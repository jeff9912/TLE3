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
        description: 'Parkeervergunningen en tarieven',
      },
      {
        title: 'Afval',
        description: 'Afvalinzameling en -scheiding',
      },
      {
        title: 'Natuur',
        description: 'Groen in de stad',
      },
      {
        title: 'Straat en stoep',
        description: 'Onderhoud openbare ruimte',
      },
      {
        title: 'Verlichting',
        description: 'Straatverlichting en meldingen',
      },
    ],
  },
  wonen: {
    title: 'Wonen',
    description: 'Informatie over wonen, verhuizen, belastingen en verbouwen.',
    items: [
      {
        title: 'Verhuizen',
        description: 'Adreswijziging doorgeven',
      },
      {
        title: 'Belastingen',
        description: 'Gemeentelijke heffingen',
      },
      {
        title: 'Verbouwen',
        description: 'Bouwvergunningen',
      },
      {
        title: 'Woning zoeken',
        description: 'Sociale woningbouw',
      },
      {
        title: 'Energiebesparing',
        description: 'Subsidies en tips',
      },
    ],
  },
  leven: {
    title: 'Leven',
    description: 'Belangrijke levensgebeurtenissen zoals trouwen, scheiden en geboorte.',
    items: [
      {
        title: 'Trouwen',
        description: 'Trouwlocaties en documenten',
      },
      {
        title: 'Scheiden',
        description: 'Procedures bij scheiding',
      },
      {
        title: 'Geboorte',
        description: 'Geboorteaangifte regelen',
      },
      {
        title: 'Overlijden',
        description: 'Uitvaart en documenten',
      },
      {
        title: 'Burgerzaken',
        description: 'Paspoort en identiteitskaart',
      },
    ],
  },
  zorg: {
    title: 'Zorg',
    description: 'Ondersteuning en zorg voor iedereen die het nodig heeft.',
    items: [
      {
        title: 'WMO',
        description: 'Maatschappelijke ondersteuning',
      },
      {
        title: 'Vluchtelingen',
        description: 'Opvang en integratie',
      },
      {
        title: 'Tijdelijke ondersteuning',
        description: 'Kortdurende hulp',
      },
      {
        title: 'Jeugdzorg',
        description: 'Ondersteuning voor gezinnen',
      },
      {
        title: 'Schuldhulpverlening',
        description: 'Hulp bij financiele problemen',
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
        <div className="mx-auto max-w-310">
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <Link to="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <span className="mx-2 text-gray-400">›</span>
            <span className="text-gray-700" aria-current="page">Categorie niet gevonden</span>
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
      <div className="mx-auto max-w-310">

        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-gray-700" aria-current="page">{data.title}</span>
        </nav>

        <header className="mb-12">
          <h1 className="mb-4 text-3xl sm:text-4xl font-bold text-gray-900">
            {data.title}
          </h1>
          <p className="text-lg text-gray-600">{data.description}</p>
        </header>

        {/* Items grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <Link
              key={item.title}
              to={`/artikel/${category}/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group flex flex-col rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-500 hover:shadow-md"
            >
              <h2 className="mb-1 font-semibold text-gray-900 group-hover:text-blue-600">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
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
