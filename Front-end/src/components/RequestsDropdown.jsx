import React from 'react';
import { useNavigate } from 'react-router-dom';

function RequestsDropdown({ onClose }) {
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    navigate(path);
    onClose();
  };

  const aanvragenItems = [
    { label: 'Vergunning aanvragen', path: '/vergunning' },
    { label: 'WMO aanvragen', path: '/wmo-form' },
    { label: 'Documenten aanvragen (rijbewijs, paspoort, ID)', path: '/documenten' },
    { label: 'Subsidies aanvragen', path: '/subsidies' },
  ];

  const regelenItems = [
    { label: 'Begrafenis regelen', path: '/begrafenis' },
    { label: 'Meldingen of klachten regelen', path: '/meldingen' },
    { label: 'Trouwen regelen', path: '/trouwen' },
    { label: 'Verhuizing regelen', path: '/verhuizing' },
  ];

  return (
    <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose}>
      <div
        className="absolute top-0 left-0 right-0 bg-white shadow-lg z-50"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 85%, rgba(255,255,255,0))',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-12">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 mb-6"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h1 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Wat wil je vandaag aanvragen/regelen?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-6">Aanvragen:</h2>
              <ul className="space-y-4">
                {aanvragenItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleItemClick(item.path)}
                      className="flex items-center gap-3 text-gray-900 hover:text-green-600 transition-colors group"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center group-hover:bg-green-700">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-6">Regelen:</h2>
              <ul className="space-y-4">
                {regelenItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleItemClick(item.path)}
                      className="flex items-center gap-3 text-gray-900 hover:text-green-600 transition-colors group"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center group-hover:bg-green-700">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestsDropdown;
