import React, { useState, useEffect } from 'react';
import DecorativeCircles from '../components/DecorativeCircles.jsx';

// Functie voor een enkele dropdown sectie
const DropdownSection = ({ title, isOpen, onClick, children }) => (
  <div className="dropdown-section">
    <button onClick={onClick} className="dropdown-toggle">
      {title}
      <span>{isOpen ? '-' : '+'}</span>
    </button>
    {isOpen && <div className="dropdown-content">{children}</div>}
  </div>
);

function PersonalPage() {
  const [personalData, setPersonalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null); // Houdt bij welke dropdown open is

  useEffect(() => {
    const fetchPersonalData = async () => {
      try {
        // VERVANG DEZE URL met je daadwerkelijke API-eindpunt voor persoonlijke gegevens
        const response = await fetch('');

        if (!response.ok) {
          throw new Error('Netwerk response was niet ok!');
        }

        const data = await response.json();
        setPersonalData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonalData();
  }, []);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  if (loading) return <p>Gegevens laden...</p>;
  if (error) return <p>Fout: {error}</p>;

  return (
    <div className="PersonalPage">
      <DecorativeCircles />
      <h1>Mijn gegevens</h1>

      <DropdownSection
        title="Mijn gegevens"
        isOpen={openDropdown === 'gegevens'}
        onClick={() => toggleDropdown('gegevens')}
      >
        {personalData ? (
          <div>
            {/* Pas de onderstaande velden aan op basis van je seeder data structuur */}
            <h4>Identiteitsgegevens</h4>
            <p>Naam: {personalData.identity?.name}</p>
            <p>BSN: {personalData.identity?.bsn}</p>

            <h4>Adresgegevens</h4>
            <p>Straat: {personalData.address?.street}</p>
            <p>Postcode: {personalData.address?.zipcode}</p>
            <p>Stad: {personalData.address?.city}</p>
          </div>
        ) : (
          <p>Geen gegevens gevonden.</p>
        )}
      </DropdownSection>

      <DropdownSection
        title="Mijn documenten"
        isOpen={openDropdown === 'documenten'}
        onClick={() => toggleDropdown('documenten')}
      >
        {/* Hier komt de logica om documenten te tonen */}
        <p>Paspoort, rijbewijs, etc.</p>
      </DropdownSection>

      <DropdownSection
        title="Mijn aanvraag status"
        isOpen={openDropdown === 'status'}
        onClick={() => toggleDropdown('status')}
      >
        {/* Hier komt de logica om de aanvraagstatus te tonen */}
        <p>Status van je aanvragen.</p>
      </DropdownSection>
    </div>
  );
}

export default PersonalPage;
