import React from 'react';
import { useNavigate } from 'react-router-dom';

const requestItems = [
  {
    id: 1,
    title: 'Wonen',
    description: 'Alles wat u nodig heeft voor het aanvragen van zaken rondom wonen',
  },
  {
    id: 2,
    title: 'Verhuizen',
    description: 'Inschrijving adreswijziging en gerelateerde diensten',
  },
  {
    id: 3,
    title: 'Belastingen',
    description: 'Inschrijving en betaling van lokale belastingen',
  },
  {
    id: 4,
    title: 'Vergunningen',
    description: 'Aanvragen van diverse vergunningen en toestemmingen',
  },
  {
    id: 5,
    title: 'WMO',
    description: 'Wet Maatschappelijke Ondersteuning - ondersteuning en zorg',
    isWMO: true,
  },
  {
    id: 6,
    title: 'Vluchtelingen',
    description: 'Ondersteuning en aanvragen voor vluchtelingen',
  },
  {
    id: 7,
    title: 'Afval',
    description: 'Afvalverwerking en milieugerelateerde zaken',
  },
  {
    id: 8,
    title: 'Parkeren',
    description: 'Parkeervergunningen en gerelateerde zaken',
  },
];

function Requests() {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    if (item.isWMO) {
      navigate('/wmo-form');
    }
  };

  return (
    <main className="px-6 py-12">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Aanvragen en Regelen
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl leading-relaxed">
            Op deze pagina kunt u alle aanvragen en regelingen van Gemeente Zuidplas vinden. 
            Kies uw onderwerp en we helpen u graag verder.
          </p>
        </section> 

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Kies uw onderwerp
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requestItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`p-6 rounded-lg border-2 transition-all text-left ${
                  item.isWMO
                    ? 'bg-green-50 border-green-500 hover:bg-green-100 hover:shadow-lg hover:border-green-600'
                    : 'bg-white border-gray-300 hover:bg-gray-50 hover:shadow-lg hover:border-green-500'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className={`text-xl font-semibold ${item.isWMO ? 'text-green-700' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  {item.isWMO && (
                    <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Formulier
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
                {item.isWMO && (
                  <div className="mt-4 text-green-700 font-medium text-sm flex items-center gap-2">
                    Naar formulier
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </section>

        <section className="bg-green-50 border-l-4 border-green-600 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Hulp nodig?
          </h3>
          <p className="text-gray-700 mb-4">
            Wilt u meer informatie of bent u niet zeker welke regeling voor u van toepassing is? <strong>Neem contact op met de gemeente.</strong>
          </p>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>📞 Telefoonnummer: (0180) 330 300</li>
            <li>💬 E-mailadres: gemeente@zuidplas.nl</li>
            <li>🏢 Bezoek ons kantoor in het gemeeentehuis</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Requests;
