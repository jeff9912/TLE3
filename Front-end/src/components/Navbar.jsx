import React, { useState, useEffect } from 'react';
import zuidplasLogo from '../assets/img/zuidplas2.png';

function Navbar() {
  // dropdown voor contrasten enzo
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [contrastMode, setContrastMode] = useState(false);
  const [largeFontMode, setLargeFontMode] = useState(false);
  const [dropdownTimeoutId, setDropdownTimeoutId] = useState(null);

  useEffect(() => {
    let fontSize = '16px';
    let contrast = '1';

    if (largeFontMode) fontSize = '18px';
    if (contrastMode) contrast = '1.5';

    document.documentElement.style.fontSize = fontSize;
    document.documentElement.style.filter = `contrast(${contrast})`;
  }, [contrastMode, largeFontMode]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutId) clearTimeout(dropdownTimeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
    setDropdownTimeoutId(timeoutId);
  };

  return (
    <nav className="bg-white border-b border-gray-300 px-12 py-4 flex justify-between items-center gap-8">
      <div className="flex-shrink-0">
        <img src={zuidplasLogo} alt="Zuidplas Logo" className="h-12 w-auto" />
      </div>


      <ul className="flex gap-10 text-gray-700 font-medium flex-1 ml-8">
        <li>
          <a href="/" className="hover:text-green-700 transition-colors text-sm">
            Home
          </a>
        </li>
        <li>
          <a href="/mijn-gemeente" className="hover:text-green-700 transition-colors text-sm">
            Mijn Gemeente
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-green-700 transition-colors text-sm">
            Contact opnemen
          </a>
        </li>
      </ul>

 
      <div className="flex items-center gap-4 flex-shrink-0">
        <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-semibold flex items-center gap-1 transition-colors text-sm">
          Aanvragen of regelen
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 5a1 1 0 011-1h12a1 1 0 011 1v2H3V5zm0 4h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
          </svg>
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <svg className="w-5 h-5 text-gray-600 hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            title="Toegankelijkheidsinstellingen"
          >
            <svg className="w-5 h-5 text-gray-600 hover:text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
              <button
                onClick={() => setContrastMode(!contrastMode)}
                className={`w-full text-left px-4 py-3 flex items-center gap-2 transition-colors ${
                  contrastMode
                    ? 'bg-green-50 text-green-700 border-l-4 border-green-600'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-sm font-medium">Hoger Contrast</span>
                {contrastMode && <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>}
              </button>

              <button
                onClick={() => setLargeFontMode(!largeFontMode)}
                className={`w-full text-left px-4 py-3 flex items-center gap-2 transition-colors border-t border-gray-200 ${
                  largeFontMode
                    ? 'bg-green-50 text-green-700 border-l-4 border-green-600'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 4v3h5v12h3V7h5V4H9zm8.5 13l-3.5 4h4.5v3h5v-3h4.5l-3.5-4h-7z" />
                </svg>
                <span className="text-sm font-medium">Groter Lettertype</span>
                {largeFontMode && <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>}
              </button>
            </div>
          )}
        </div>

        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <svg className="w-5 h-5 text-gray-600 hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <svg className="w-5 h-5 text-gray-600 hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;