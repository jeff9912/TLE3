import React, { useState } from 'react';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-2 border-gray-800 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between text-left transition-colors"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <svg
              className={`w-6 h-6 text-gray-900 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>

          {openIndex === index && (
            <div className="px-6 py-6 bg-gray-50 border-t-2 border-gray-800 text-gray-900">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
