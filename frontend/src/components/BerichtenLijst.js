import React, { useState, useEffect, useRef } from 'react';
import { getBerichten, deleteBericht } from '../api';

const CATEGORIEEN = ['Nieuws', 'Bekendmaking', 'Vergadering', 'Evenement'];

function BerichtenLijst({ refreshTrigger, onBewerken, onNieuw }) {
  const [berichten, setBerichten] = useState([]);
  const [laden, setLaden] = useState(true);
  const [fout, setFout] = useState('');
  const [succes, setSucces] = useState('');
  const [filters, setFilters] = useState({ categorie: '', gepubliceerd: '' });
  const [verwijderenId, setVerwijderenId] = useState(null);
  const filtersRef = useRef(filters);
  filtersRef.current = filters;

  const [localRefresh, setLocalRefresh] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLaden(true);
    setFout('');
    getBerichten(filtersRef.current)
      .then((data) => { if (!cancelled) setBerichten(data); })
      .catch((e) => { if (!cancelled) setFout(e.message || 'Kan berichten niet laden.'); })
      .finally(() => { if (!cancelled) setLaden(false); });
    return () => { cancelled = true; };
  }, [filters, refreshTrigger, localRefresh]);

  const handleVerwijderen = async (id) => {
    if (!window.confirm('Weet u zeker dat u dit bericht wilt verwijderen?')) return;
    setVerwijderenId(id);
    setFout('');
    try {
      await deleteBericht(id);
      setSucces('Bericht succesvol verwijderd.');
      setTimeout(() => setSucces(''), 3000);
      setLocalRefresh((n) => n + 1);
    } catch (e) {
      setFout(e.message || 'Verwijderen mislukt.');
    } finally {
      setVerwijderenId(null);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const formatDatum = (datum) => {
    if (!datum) return '—';
    return new Date(datum).toLocaleDateString('nl-NL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <section className="sectie">
      <div className="sectie-header">
        <h1 className="sectie-titel">Berichten</h1>
        <button className="btn btn--primair" onClick={onNieuw}>
          + Nieuw bericht
        </button>
      </div>

      {fout && <div className="melding melding--fout">{fout}</div>}
      {succes && <div className="melding melding--succes">{succes}</div>}

      <div className="filter-balk">
        <div className="filter-groep">
          <label htmlFor="filter-categorie" className="filter-label">Categorie</label>
          <select
            id="filter-categorie"
            name="categorie"
            className="filter-select"
            value={filters.categorie}
            onChange={handleFilterChange}
          >
            <option value="">Alle categorieën</option>
            {CATEGORIEEN.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="filter-groep">
          <label htmlFor="filter-gepubliceerd" className="filter-label">Status</label>
          <select
            id="filter-gepubliceerd"
            name="gepubliceerd"
            className="filter-select"
            value={filters.gepubliceerd}
            onChange={handleFilterChange}
          >
            <option value="">Alle statussen</option>
            <option value="true">Gepubliceerd</option>
            <option value="false">Concept</option>
          </select>
        </div>

        <button className="btn btn--secundair" onClick={() => setLocalRefresh((n) => n + 1)}>
          Vernieuwen
        </button>
      </div>

      {laden ? (
        <div className="laden">
          <div className="laden-spinner" aria-label="Laden…"></div>
          <span>Berichten laden…</span>
        </div>
      ) : (
        <>
          <p className="resultaat-telling">
            {berichten.length === 0
              ? 'Geen berichten gevonden.'
              : `${berichten.length} bericht${berichten.length !== 1 ? 'en' : ''} gevonden`}
          </p>

          {berichten.length > 0 && (
            <div className="tabel-wrapper">
              <table className="tabel">
                <thead>
                  <tr>
                    <th>Titel</th>
                    <th>Categorie</th>
                    <th>Datum</th>
                    <th>Gepubliceerd</th>
                    <th>Acties</th>
                  </tr>
                </thead>
                <tbody>
                  {berichten.map((b) => (
                    <tr key={b.id || b._id}>
                      <td className="tabel-titel">{b.titel}</td>
                      <td>
                        <span className={`badge badge--${(b.categorie || '').toLowerCase()}`}>
                          {b.categorie}
                        </span>
                      </td>
                      <td>{formatDatum(b.datum)}</td>
                      <td>
                        <span className={`status-label ${b.gepubliceerd ? 'status-label--gepubliceerd' : 'status-label--concept'}`}>
                          {b.gepubliceerd ? 'Gepubliceerd' : 'Concept'}
                        </span>
                      </td>
                      <td className="acties">
                        <button
                          className="btn btn--klein btn--secundair"
                          onClick={() => onBewerken(b)}
                        >
                          Bewerken
                        </button>
                        <button
                          className="btn btn--klein btn--gevaar"
                          onClick={() => handleVerwijderen(b.id || b._id)}
                          disabled={verwijderenId === (b.id || b._id)}
                        >
                          {verwijderenId === (b.id || b._id) ? 'Bezig…' : 'Verwijderen'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default BerichtenLijst;
