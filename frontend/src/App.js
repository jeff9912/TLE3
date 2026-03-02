import React, { useState } from 'react';
import BerichtenLijst from './components/BerichtenLijst';
import BerichtFormulier from './components/BerichtFormulier';
import './App.css';

function App() {
  const [pagina, setPagina] = useState('lijst');
  const [berichtToEdit, setBerichtToEdit] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const navigeerNaarLijst = () => {
    setBerichtToEdit(null);
    setPagina('lijst');
    setRefreshTrigger((n) => n + 1);
  };

  const navigeerNaarNieuw = () => {
    setBerichtToEdit(null);
    setPagina('formulier');
  };

  const navigeerNaarBewerken = (bericht) => {
    setBerichtToEdit(bericht);
    setPagina('formulier');
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="logo-area">
            <div className="logo-icon" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="4" fill="#F9C23C"/>
                <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#003082">Z</text>
              </svg>
            </div>
            <div className="logo-text">
              <span className="gemeente-naam">Gemeente Zuidplas</span>
              <span className="gemeente-tagline">Werken aan een sterke gemeente</span>
            </div>
          </div>
          <div className="rijksoverheid-badge">Overheid.nl</div>
        </div>
      </header>

      <nav className="nav">
        <div className="nav-inner">
          <button
            className={`nav-tab${pagina === 'lijst' ? ' nav-tab--actief' : ''}`}
            onClick={navigeerNaarLijst}
          >
            Berichten
          </button>
          <button
            className={`nav-tab${pagina === 'formulier' && !berichtToEdit ? ' nav-tab--actief' : ''}`}
            onClick={navigeerNaarNieuw}
          >
            Nieuw bericht
          </button>
        </div>
      </nav>

      <main className="main">
        <div className="main-inner">
          {pagina === 'lijst' && (
            <BerichtenLijst
              refreshTrigger={refreshTrigger}
              onBewerken={navigeerNaarBewerken}
              onNieuw={navigeerNaarNieuw}
            />
          )}
          {pagina === 'formulier' && (
            <BerichtFormulier
              bericht={berichtToEdit}
              onSuccess={navigeerNaarLijst}
              onAnnuleren={navigeerNaarLijst}
            />
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Gemeente Zuidplas · Alle rechten voorbehouden</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
