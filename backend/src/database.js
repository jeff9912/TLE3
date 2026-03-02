const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, '..', 'zuidplas.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS berichten (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    titel       TEXT    NOT NULL,
    inhoud      TEXT    NOT NULL,
    categorie   TEXT    NOT NULL,
    datum       TEXT    NOT NULL,
    gepubliceerd INTEGER DEFAULT 1,
    aangemaakt  TEXT
  )
`);

const count = db.prepare('SELECT COUNT(*) AS cnt FROM berichten').get();
if (count.cnt === 0) {
  const insert = db.prepare(`
    INSERT INTO berichten (titel, inhoud, categorie, datum, gepubliceerd, aangemaakt)
    VALUES (@titel, @inhoud, @categorie, @datum, @gepubliceerd, @aangemaakt)
  `);

  const seed = db.transaction(() => {
    insert.run({
      titel: 'Gemeenteraadsvergadering mei 2025',
      inhoud: 'De gemeenteraad van Zuidplas vergadert op dinsdag 20 mei 2025 om 19:30 uur in het gemeentehuis. Op de agenda staan onder andere de begroting 2026 en de herziening van het bestemmingsplan Zevenhuizen-Noord.',
      categorie: 'Vergadering',
      datum: '2025-05-20',
      gepubliceerd: 1,
      aangemaakt: new Date().toISOString(),
    });
    insert.run({
      titel: 'Werkzaamheden Bredeweg – verwachte vertraging',
      inhoud: 'Vanaf maandag 12 mei tot en met vrijdag 6 juni 2025 vinden er rioleringswerkzaamheden plaats aan de Bredeweg in Moordrecht. Gedurende deze periode is de weg afgesloten voor doorgaand verkeer. Fietsers en voetgangers kunnen gebruik maken van de tijdelijke omleidingsroute via de Kerkweg.',
      categorie: 'Bekendmaking',
      datum: '2025-05-12',
      gepubliceerd: 1,
      aangemaakt: new Date().toISOString(),
    });
    insert.run({
      titel: 'Subsidieregeling verduurzaming woningen opengesteld',
      inhoud: 'De gemeente Zuidplas stelt per 1 juni 2025 opnieuw subsidie beschikbaar voor het verduurzamen van particuliere woningen. Inwoners kunnen een bijdrage aanvragen voor isolatie, zonnepanelen en warmtepompen. Het totale subsidiebudget bedraagt € 250.000. Aanvragen kunnen worden ingediend via het digitale loket op de gemeentewebsite.',
      categorie: 'Nieuws',
      datum: '2025-06-01',
      gepubliceerd: 1,
      aangemaakt: new Date().toISOString(),
    });
    insert.run({
      titel: 'Koningsdag 2025 – programma en afsluitingen',
      inhoud: 'Op zaterdag 26 april 2025 viert Zuidplas Koningsdag met een uitgebreid programma op het Dorpsplein in Zevenhuizen. De festiviteiten beginnen om 10:00 uur met een kindervrijmarkt en duren tot 18:00 uur. Diverse wegen rondom het centrum zijn van 08:00 tot 20:00 uur afgesloten voor gemotoriseerd verkeer.',
      categorie: 'Evenement',
      datum: '2025-04-26',
      gepubliceerd: 1,
      aangemaakt: new Date().toISOString(),
    });
    insert.run({
      titel: 'Ter inzage: ontwerp-omgevingsplan Zuidplas West',
      inhoud: 'Het college van burgemeester en wethouders maakt bekend dat het ontwerp-omgevingsplan Zuidplas West van 15 mei tot en met 25 juni 2025 ter inzage ligt. Het plan voorziet in de bouw van 1.200 nieuwe woningen, een basisschool en een wijkpark. Belanghebbenden kunnen gedurende deze periode een zienswijze indienen.',
      categorie: 'Bekendmaking',
      datum: '2025-05-15',
      gepubliceerd: 1,
      aangemaakt: new Date().toISOString(),
    });
  });

  seed();
}

module.exports = db;
