import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Mockup data - dit wordt later uit een database geladen
const categoryData = {
  omgeving: {
    title: 'Omgeving',
    description: 'Alles over uw leefomgeving, parkeren, afval en natuur.',
    items: [
      {
        title: 'Parkeren',
        description: 'Informatie over parkeervergunningen, tarieven en parkeerplaatsen.',
      },
      {
        title: 'Afval',
        description: 'Afvalinzameling, afvalkalender en afvalscheiding.',
      },
      {
        title: 'Natuur',
        description: 'Groen in de stad, parken en natuurgebieden.',
      },
    ],
  },
  wonen: {
    title: 'Wonen',
    description: 'Informatie over wonen, verhuizen, belastingen en verbouwen.',
    items: [
      {
        title: 'Verhuizen',
        description: 'Adreswijziging doorgeven en verhuisaangifte.',
      },
      {
        title: 'Belastingen',
        description: 'Gemeentelijke belastingen en heffingen.',
      },
      {
        title: 'Verbouwen',
        description: 'Vergunningen voor verbouwing en renovatie.',
      },
    ],
  },
  leven: {
    title: 'Leven',
    description: 'Belangrijke levensgebeurtenissen zoals trouwen, scheiden en geboorte.',
    items: [
      {
        title: 'Trouwen',
        description: 'Informatie over trouwen en geregistreerd partnerschap.',
      },
      {
        title: 'Scheiden',
        description: 'Wat te doen bij een echtscheiding.',
      },
      {
        title: 'Geboorte',
        description: 'Geboorteaangifte en geboortedocumenten.',
      },
    ],
  },
  zorg: {
    title: 'Zorg',
    description: 'Ondersteuning en zorg voor iedereen die het nodig heeft.',
    items: [
      {
        title: 'WMO',
        description: 'Wet Maatschappelijke Ondersteuning en voorzieningen.',
      },
      {
        title: 'Vluchtelingen',
        description: 'Opvang en ondersteuning voor vluchtelingen.',
      },
      {
        title: 'Tijdelijke ondersteuning',
        description: 'Korte termijn hulp en ondersteuning.',
      },
    ],
  },
};

function CategoryDetail() {
  const { category } = useParams();
  const data = categoryData[category?.toLowerCase()];

  // Als de categorie niet bestaat, toon een fallback
  if (!data) {
    return (
      <main className="px-6 py-8">
        <div className="mx-auto max-w-[1240px]">
          <nav className="mb-6 text-sm">
            <Link to="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <span className="mx-2 text-gray-400">›</span>
            <span className="text-gray-600">Categorie niet gevonden</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900">
            Categorie niet gevonden
          </h1>
          <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">
            ← Terug naar home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="px-6 py-8 bg-white">
      <div className="mx-auto max-w-[1240px]">

        <nav className="mb-6 text-sm">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-gray-600">{data.title}</span>
        </nav>

        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            {data.title}
          </h1>
          <p className="text-lg text-gray-600">{data.description}</p>
        </header>

        {/* Items grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <Link
              key={item.title}
              to={`/artikel/${category}/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-md"
            >
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">
                  {item.title}
                </h2>
              </div>
              <p className="flex-grow text-sm text-gray-600">
                {item.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
                <span>Meer informatie</span>
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Terug naar home link */}
        <div className="mt-12">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
          >
            ← Terug naar home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default CategoryDetail;
