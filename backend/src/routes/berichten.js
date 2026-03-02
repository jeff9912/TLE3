const express = require('express');
const router = express.Router();
const db = require('../database');

const GELDIGE_CATEGORIEEN = ['Nieuws', 'Bekendmaking', 'Vergadering', 'Evenement'];

function parseGepubliceerd(value) {
  if (value === undefined) return undefined;
  const n = Number(value);
  return (n === 0 || n === 1) ? n : undefined;
}

// Returns `value` as 0/1 when provided, otherwise falls back to `defaultVal`
function toGepubliceerd(value, defaultVal) {
  return value !== undefined ? Number(value) : defaultVal;
}

// GET /api/berichten
router.get('/', (req, res) => {
  const { categorie, gepubliceerd } = req.query;

  if (categorie && !GELDIGE_CATEGORIEEN.includes(categorie)) {
    return res.status(400).json({ error: `Ongeldige categorie. Kies uit: ${GELDIGE_CATEGORIEEN.join(', ')}` });
  }

  const gepubliceerdFilter = parseGepubliceerd(gepubliceerd);
  if (gepubliceerd !== undefined && gepubliceerdFilter === undefined) {
    return res.status(400).json({ error: 'gepubliceerd moet 0 of 1 zijn' });
  }

  let query = 'SELECT * FROM berichten WHERE 1=1';
  const params = [];

  if (categorie) {
    query += ' AND categorie = ?';
    params.push(categorie);
  }
  if (gepubliceerdFilter !== undefined) {
    query += ' AND gepubliceerd = ?';
    params.push(gepubliceerdFilter);
  }

  query += ' ORDER BY datum DESC';

  const berichten = db.prepare(query).all(...params);
  res.json(berichten);
});

// GET /api/berichten/:id
router.get('/:id', (req, res) => {
  const bericht = db.prepare('SELECT * FROM berichten WHERE id = ?').get(req.params.id);
  if (!bericht) return res.status(404).json({ error: 'Bericht niet gevonden' });
  res.json(bericht);
});

// POST /api/berichten
router.post('/', (req, res) => {
  const { titel, inhoud, categorie, datum, gepubliceerd } = req.body;

  if (!titel || !inhoud || !categorie || !datum) {
    return res.status(400).json({ error: 'Velden titel, inhoud, categorie en datum zijn verplicht' });
  }

  const result = db.prepare(`
    INSERT INTO berichten (titel, inhoud, categorie, datum, gepubliceerd, aangemaakt)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(titel, inhoud, categorie, datum, toGepubliceerd(gepubliceerd, 1), new Date().toISOString());

  const nieuw = db.prepare('SELECT * FROM berichten WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(nieuw);
});

// PUT /api/berichten/:id
router.put('/:id', (req, res) => {
  const bestaand = db.prepare('SELECT * FROM berichten WHERE id = ?').get(req.params.id);
  if (!bestaand) return res.status(404).json({ error: 'Bericht niet gevonden' });

  const { titel, inhoud, categorie, datum, gepubliceerd } = req.body;

  db.prepare(`
    UPDATE berichten
    SET titel = ?, inhoud = ?, categorie = ?, datum = ?, gepubliceerd = ?
    WHERE id = ?
  `).run(
    titel      !== undefined ? titel      : bestaand.titel,
    inhoud     !== undefined ? inhoud     : bestaand.inhoud,
    categorie  !== undefined ? categorie  : bestaand.categorie,
    datum      !== undefined ? datum      : bestaand.datum,
    toGepubliceerd(gepubliceerd, bestaand.gepubliceerd),
    req.params.id,
  );

  const bijgewerkt = db.prepare('SELECT * FROM berichten WHERE id = ?').get(req.params.id);
  res.json(bijgewerkt);
});

// DELETE /api/berichten/:id
router.delete('/:id', (req, res) => {
  const bericht = db.prepare('SELECT * FROM berichten WHERE id = ?').get(req.params.id);
  if (!bericht) return res.status(404).json({ error: 'Bericht niet gevonden' });

  db.prepare('DELETE FROM berichten WHERE id = ?').run(req.params.id);
  res.status(204).send();
});

module.exports = router;
