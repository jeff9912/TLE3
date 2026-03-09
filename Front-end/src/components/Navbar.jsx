import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import zuidplasLogo from '../assets/img/zuidplas2.png';
import RequestsDropdown from './RequestsDropdown';

function Navbar() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
    <nav className="bg-white border-b border-gray-300 px-12 py-4 flex justify-between items-center gap-8">
      <div className="flex-shrink-0">
        <img src={zuidplasLogo} alt="Zuidplas Logo" className="h-12 w-auto cursor-pointer" onClick={() => navigate('/')} />
      </div>

      <ul className="flex gap-10 text-gray-700 font-medium flex-1 ml-8">
        <li>
          <button onClick={() => navigate('/')} className="hover:text-green-700 transition-colors text-sm bg-none border-none cursor-pointer text-gray-700 font-medium">
            Home
          </button>
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
        </li>        <li>
          <a href="/nieuws" className="hover:text-green-700 transition-colors text-sm">
            Nieuws
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-4 flex-shrink-0">
        <button onClick={() => setShowDropdown(true)} className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-semibold flex items-center gap-1 transition-colors text-sm">
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
    {showDropdown && <RequestsDropdown onClose={() => setShowDropdown(false)} />}
    </>
  );
}

export default Navbar;
