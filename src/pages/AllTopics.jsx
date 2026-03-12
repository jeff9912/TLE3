import React from 'react';
import { Link } from 'react-router-dom';

// Mockup data voor alle categorieën en onderwerpen
const allCategories = [
  {
    title: 'Omgeving',
    description: 'Alles over uw leefomgeving, parkeren, afval en natuur.',
    color: 'bg-blue-100',
    slug: 'omgeving',
    items: [
      { name: 'Parkeren', description: 'Parkeervergunningen en tarieven' },
      { name: 'Afval', description: 'Afvalinzameling en -scheiding' },
      { name: 'Natuur', description: 'Groen in de stad' },
      { name: 'Straat en stoep', description: 'Onderhoud openbare ruimte' },
      { name: 'Verlichting', description: 'Straatverlichting en meldingen' },
    ],
  },
  {
    title: 'Wonen',
    description: 'Informatie over wonen, verhuizen, belastingen en verbouwen.',
    color: 'bg-orange-100',
    slug: 'wonen',
    items: [
      { name: 'Verhuizen', description: 'Adreswijziging doorgeven' },
      { name: 'Belastingen', description: 'Gemeentelijke heffingen' },
      { name: 'Verbouwen', description: 'Bouwvergunningen' },
      { name: 'Woning zoeken', description: 'Sociale woningbouw' },
      { name: 'Energiebesparing', description: 'Subsidies en tips' },
    ],
  },
  {
    title: 'Leven',
    description:
      'Belangrijke levensgebeurtenissen zoals trouwen, scheiden en geboorte.',
    color: 'bg-pink-100',
    slug: 'leven',
    items: [
      { name: 'Trouwen', description: 'Trouwlocaties en documenten' },
      { name: 'Scheiden', description: 'Procedures bij scheiding' },
      { name: 'Geboorte', description: 'Geboorteaangifte regelen' },
      { name: 'Overlijden', description: 'Uitvaart en documenten' },
      { name: 'Burgerzaken', description: 'Paspoort en identiteitskaart' },
    ],
  },
  {
    title: 'Zorg',
    description: 'Ondersteuning en zorg voor iedereen die het nodig heeft.',
    color: 'bg-green-100',
    slug: 'zorg',
    items: [
      { name: 'WMO', description: 'Maatschappelijke ondersteuning' },
      { name: 'Vluchtelingen', description: 'Opvang en integratie' },
      { name: 'Tijdelijke ondersteuning', description: 'Kortdurende hulp' },
      { name: 'Jeugdzorg', description: 'Ondersteuning voor gezinnen' },
      {
        name: 'Schuldhulpverlening',
        description: 'Hulp bij financiële problemen',
      },
    ],
  },
  {
    title: 'Werk en Inkomen',
    description: 'Ondersteuning bij werk zoeken en financiële regelingen.',
    color: 'bg-yellow-100',
    slug: 'werk-en-inkomen',
    items: [
      { name: 'Uitkering', description: 'Bijstand en toeslagen' },
      { name: 'Werk zoeken', description: 'Vacatures en begeleiding' },
      { name: 'Re-integratie', description: 'Terug naar werk' },
      { name: 'Minimaregeling', description: 'Tegemoetkomingen' },
    ],
  },
  {
    title: 'Onderwijs en Sport',
    description: 'Scholen, kinderopvang en sportvoorzieningen.',
    color: 'bg-purple-100',
    slug: 'onderwijs-en-sport',
    items: [
      { name: 'Scholen', description: 'Basisonderwijs en middelbaar' },
      { name: 'Kinderopvang', description: 'Dagopvang en BSO' },
      { name: 'Sport', description: 'Sporthallen en velden' },
      { name: 'Jeugdactiviteiten', description: 'Clubs en cursussen' },
    ],
  },
];

function AllTopics() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="mx-auto max-w-310">
        {/* breadcrums */}
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-gray-700" aria-current="page">Alle onderwerpen</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="mb-4 text-3xl sm:text-4xl font-bold text-gray-900">
            Alle onderwerpen
          </h1>
          <p className="text-lg text-gray-600">
            Vind snel wat u zoekt. Alle gemeentelijke diensten en informatie op
            één plek.
          </p>
        </header>

        <div className="space-y-12">
          {allCategories.map((category) => (
            <section
              key={category.title}
              className="rounded-xl bg-white p-4 sm:p-8 shadow-sm"
            >
              <div className="mb-6">
                <div>
                  <h2 className="mb-2 text-3xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <Link
                    key={item.name}
                    to={`/artikel/${category.slug}/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group flex flex-col rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-500 hover:shadow-md"
                  >
                    <div className="flex-1">
                      <h3 className="mb-1 font-semibold text-gray-900 group-hover:text-blue-600">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8">
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

export default AllTopics;
