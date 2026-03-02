import React, { useState, useEffect } from 'react';
import { createBericht, updateBericht } from '../api';

const CATEGORIEEN = ['Nieuws', 'Bekendmaking', 'Vergadering', 'Evenement'];

const leegFormulier = {
  titel: '',
  inhoud: '',
  categorie: '',
  datum: '',
  gepubliceerd: false,
};

function BerichtFormulier({ bericht, onSuccess, onAnnuleren }) {
  const isBewerken = Boolean(bericht);
  const [velden, setVelden] = useState(leegFormulier);
  const [fouten, setFouten] = useState({});
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState('');
  const [succes, setSucces] = useState('');

  useEffect(() => {
    if (bericht) {
      setVelden({
        titel: bericht.titel || '',
        inhoud: bericht.inhoud || '',
        categorie: bericht.categorie || '',
        datum: bericht.datum ? bericht.datum.split('T')[0] : '',
        gepubliceerd: bericht.gepubliceerd || false,
      });
    } else {
      setVelden(leegFormulier);
    }
    setFouten({});
    setFout('');
    setSucces('');
  }, [bericht]);

  const valideer = () => {
    const nieuweFouten = {};
    if (!velden.titel.trim()) nieuweFouten.titel = 'Titel is verplicht.';
    if (!velden.inhoud.trim()) nieuweFouten.inhoud = 'Inhoud is verplicht.';
    if (!velden.categorie) nieuweFouten.categorie = 'Categorie is verplicht.';
    if (!velden.datum) nieuweFouten.datum = 'Datum is verplicht.';
    return nieuweFouten;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setVelden((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (fouten[name]) {
      setFouten((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validatieFouten = valideer();
    if (Object.keys(validatieFouten).length > 0) {
      setFouten(validatieFouten);
      return;
    }

    setBezig(true);
    setFout('');
    setSucces('');

    try {
      if (isBewerken) {
        await updateBericht(bericht.id || bericht._id, velden);
        setSucces('Bericht succesvol bijgewerkt!');
      } else {
        await createBericht(velden);
        setSucces('Bericht succesvol aangemaakt!');
      }
      setTimeout(() => onSuccess(), 800);
    } catch (e) {
      setFout(e.message || 'Er is een fout opgetreden.');
    } finally {
      setBezig(false);
    }
  };

  return (
    <section className="sectie">
      <div className="sectie-header">
        <h1 className="sectie-titel">
          {isBewerken ? 'Bericht bewerken' : 'Nieuw bericht aanmaken'}
        </h1>
      </div>

      {fout && <div className="melding melding--fout">{fout}</div>}
      {succes && <div className="melding melding--succes">{succes}</div>}

      <form className="formulier" onSubmit={handleSubmit} noValidate>
        <div className={`formulier-veld${fouten.titel ? ' formulier-veld--fout' : ''}`}>
          <label htmlFor="titel" className="formulier-label">
            Titel <span className="verplicht" aria-hidden="true">*</span>
          </label>
          <input
            id="titel"
            name="titel"
            type="text"
            className="formulier-invoer"
            value={velden.titel}
            onChange={handleChange}
            placeholder="Voer de titel in"
            aria-required="true"
            aria-describedby={fouten.titel ? 'titel-fout' : undefined}
          />
          {fouten.titel && <span id="titel-fout" className="veld-fout">{fouten.titel}</span>}
        </div>

        <div className={`formulier-veld${fouten.inhoud ? ' formulier-veld--fout' : ''}`}>
          <label htmlFor="inhoud" className="formulier-label">
            Inhoud <span className="verplicht" aria-hidden="true">*</span>
          </label>
          <textarea
            id="inhoud"
            name="inhoud"
            className="formulier-invoer formulier-textarea"
            value={velden.inhoud}
            onChange={handleChange}
            rows={6}
            placeholder="Schrijf hier de inhoud van het bericht…"
            aria-required="true"
            aria-describedby={fouten.inhoud ? 'inhoud-fout' : undefined}
          />
          {fouten.inhoud && <span id="inhoud-fout" className="veld-fout">{fouten.inhoud}</span>}
        </div>

        <div className="formulier-rij">
          <div className={`formulier-veld${fouten.categorie ? ' formulier-veld--fout' : ''}`}>
            <label htmlFor="categorie" className="formulier-label">
              Categorie <span className="verplicht" aria-hidden="true">*</span>
            </label>
            <select
              id="categorie"
              name="categorie"
              className="formulier-invoer"
              value={velden.categorie}
              onChange={handleChange}
              aria-required="true"
              aria-describedby={fouten.categorie ? 'categorie-fout' : undefined}
            >
              <option value="">Selecteer een categorie</option>
              {CATEGORIEEN.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {fouten.categorie && (
              <span id="categorie-fout" className="veld-fout">{fouten.categorie}</span>
            )}
          </div>

          <div className={`formulier-veld${fouten.datum ? ' formulier-veld--fout' : ''}`}>
            <label htmlFor="datum" className="formulier-label">
              Datum <span className="verplicht" aria-hidden="true">*</span>
            </label>
            <input
              id="datum"
              name="datum"
              type="date"
              className="formulier-invoer"
              value={velden.datum}
              onChange={handleChange}
              aria-required="true"
              aria-describedby={fouten.datum ? 'datum-fout' : undefined}
            />
            {fouten.datum && (
              <span id="datum-fout" className="veld-fout">{fouten.datum}</span>
            )}
          </div>
        </div>

        <div className="formulier-veld formulier-veld--checkbox">
          <label className="checkbox-label">
            <input
              id="gepubliceerd"
              name="gepubliceerd"
              type="checkbox"
              className="checkbox-invoer"
              checked={velden.gepubliceerd}
              onChange={handleChange}
            />
            <span className="checkbox-tekst">Gepubliceerd</span>
          </label>
          <p className="veld-hint">
            {velden.gepubliceerd
              ? 'Dit bericht is zichtbaar voor bezoekers.'
              : 'Dit bericht wordt opgeslagen als concept.'}
          </p>
        </div>

        <div className="formulier-acties">
          <button
            type="submit"
            className="btn btn--primair"
            disabled={bezig}
          >
            {bezig
              ? isBewerken ? 'Opslaan…' : 'Aanmaken…'
              : isBewerken ? 'Wijzigingen opslaan' : 'Bericht aanmaken'}
          </button>
          <button
            type="button"
            className="btn btn--secundair"
            onClick={onAnnuleren}
            disabled={bezig}
          >
            Annuleren
          </button>
        </div>
      </form>
    </section>
  );
}

export default BerichtFormulier;
