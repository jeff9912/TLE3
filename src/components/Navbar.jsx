import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import zuidplasLogo from '../assets/img/zuidplas2.png';
import RequestsDropdown from './RequestsDropdown';

function Navbar() {
  const navigate = useNavigate();
  const accessibilityRef = useRef(null);

  // Accessibility dropdown
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
    }, 220);
    setDropdownTimeoutId(timeoutId);
  };

  const handleBlur = (event) => {
    if (!accessibilityRef.current?.contains(event.relatedTarget)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
        setShowDropdown(false);
      }
    };

    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, []);

  // Requests dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-300 px-12 py-4 flex justify-between items-center gap-8" aria-label="Hoofdnavigatie">
        <div className="shrink-0">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="rounded-md"
            aria-label="Ga naar home"
          >
            <img
              src={zuidplasLogo}
              alt="Zuidplas Logo"
              className="h-12 w-auto"
            />
          </button>
        </div>

        <ul className="flex gap-10 text-gray-700 font-medium flex-1 ml-8">
          <li>
            <button
              onClick={() => navigate('/')}
              className="hover:text-blue-700 transition-colors text-sm bg-none border-none cursor-pointer text-gray-700 font-medium"
            >
              Home
            </button>
          </li>
          <li>
            <a
              href="/mijn-gemeente"
              className="hover:text-blue-700 transition-colors text-sm"
            >
              Mijn Gemeente
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-blue-700 transition-colors text-sm"
            >
              Contact opnemen
            </a>
          </li>
          <li>
            <a
              href="/nieuws"
              className="hover:text-blue-700 transition-colors text-sm"
            >
              Nieuws
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4 shrink-0">
          <button
            type="button"
            onClick={() => setShowDropdown(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold flex items-center gap-1 transition-colors text-sm"
          >
            Aanvragen of regelen
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 5a1 1 0 011-1h12a1 1 0 011 1v2H3V5zm0 4h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
            </svg>
          </button>

          <button type="button" aria-label="Zoeken" className="p-2 hover:bg-gray-100 rounded-md transition-colors">
            <svg
              className="w-5 h-5 text-gray-600 hover:text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Accessibility Dropdown */}
          <div
            ref={accessibilityRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleBlur}
          >
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              title="Toegankelijkheidsinstellingen"
              aria-label="Toegankelijkheidsinstellingen"
              aria-expanded={isDropdownOpen}
              aria-haspopup="menu"
            >
              <svg
                className="w-5 h-5 text-gray-600 hover:text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* icon hieroner tekenen */}
                <path d="M12 2a2 2 0 100 4 2 2 0 000-4zm1 6h-2v6H9l-1 5h2l1-3h2l1 3h2l-1-5h-2V8z" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-full pt-2 z-50">
                <div
                  className="w-48 bg-white rounded-md shadow-lg border border-gray-200"
                  role="menu"
                  aria-label="Toegankelijkheidsopties"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setContrastMode((prev) => {
                        const next = !prev;
                        if (next) setLargeFontMode(false);
                        return next;
                      });
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center gap-2 transition-colors ${
                      contrastMode
                        ? 'bg-green-50 text-green-700 border-l-4 border-green-600'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                    role="menuitemcheckbox"
                    aria-checked={contrastMode}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="text-sm font-medium">Hoger Contrast</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setLargeFontMode((prev) => {
                        const next = !prev;
                        if (next) setContrastMode(false);
                        return next;
                      });
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center gap-2 transition-colors border-t border-gray-200 ${
                      largeFontMode
                        ? 'bg-green-50 text-green-700 border-l-4 border-green-600'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                    role="menuitemcheckbox"
                    aria-checked={largeFontMode}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 4v3h5v12h3V7h5V4H9zm8.5 13l-3.5 4h4.5v3h5v-3h4.5l-3.5-4h-7z" />
                    </svg>
                    <span className="text-sm font-medium">
                      Groter Lettertype
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Other buttons */}
          <button type="button" aria-label="E-mail" className="p-2 hover:bg-gray-100 rounded-md transition-colors">
            <svg
              className="w-5 h-5 text-gray-600 hover:text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>
          <button type="button" aria-label="Account" className="p-2 hover:bg-gray-100 rounded-md transition-colors">
            <svg
              className="w-5 h-5 text-gray-600 hover:text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>
      </nav>

      {showDropdown && (
        <RequestsDropdown onClose={() => setShowDropdown(false)} />
      )}
    </>
  );
}

export default Navbar;
