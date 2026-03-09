import React from 'react';
import { Link } from 'react-router-dom';
import heroBackground from '../assets/img/achtergrond-hero.png';
import stad1 from '../assets/img/stad1.png';
import stad2 from '../assets/img/stad2.png';
import stad3 from '../assets/img/stad3.png';
import stad4 from '../assets/img/stad4.png';

const quickLinks = [
  { label: 'Vergunningen', category: 'omgeving', topic: 'vergunningen' },
  { label: 'Afval', category: 'omgeving', topic: 'afval' },
  { label: 'Natuur', category: 'omgeving', topic: 'natuur' },
  { label: 'Vervoer', category: 'omgeving', topic: 'vervoer' },
  { label: 'Belastingen', category: 'wonen', topic: 'belastingen' },
];

const categories = [
  {
    title: 'Omgeving',
    items: ['Parkeren', 'Afval', 'Natuur'],
    image: stad1,
  },
  {
    title: 'Wonen',
    items: ['Verhuizen', 'Belastingen', 'Verbouwen'],
    image: stad2,
  },
  {
    title: 'Leven',
    items: ['Trouwen', 'Scheiden', 'Geboorte'],
    image: stad3,
  },
  {
    title: 'Zorg',
    items: ['WMO', 'Vluchtelingen', 'Tijdelijke ondersteuning'],
    image: stad4,
  },
];

function Home() {
  return (
    <main className="px-6 py-6">
      <section className="mx-auto grid max-w-[1240px] grid-cols-1 gap-3 lg:grid-cols-[2fr_1fr] mb-12">
        <div className="overflow-hidden rounded-md">
          <img
            src={heroBackground}
            alt="Parkeerzone bord"
            className="h-[470px] w-full object-cover"
          />
        </div>

        <aside className="rounded-xl bg-gray-100 px-8 py-6">
          <h2 className="mb-4 text-[30px] font-semibold text-gray-900">
            Relevant voor jou
          </h2>

          <ul>
            {quickLinks.map((item) => (
              <li key={item.label} className="border-b border-gray-300">
                <Link
                  to={`/artikel/${item.category}/${item.topic}`}
                  className="flex w-full items-center gap-3 py-5 text-left text-[20px] font-medium text-gray-900 hover:text-blue-600"
                >
                  <span>› {item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mx-auto max-w-[1240px]">

        <div className="mb-12 flex flex-col gap-6 px-8 py-6 md:flex-row md:items-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Meest gezocht
          </h2>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/categorie/omgeving"
              className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-6 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200"
            >
              › Omgeving
            </Link>
            <Link
              to="/categorie/wonen"
              className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-6 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200"
            >
              › Wonen
            </Link>
            <Link
              to="/categorie/leven"
              className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-6 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200"
            >
              › Leven
            </Link>
            <Link
              to="/categorie/zorg"
              className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-6 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200"
            >
              › Zorg
            </Link>
            <Link
              to="/alle-onderwerpen"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Alle onderwerpen
            </Link>
          </div>
        </div>


        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.title} className="flex flex-col">
              <Link
                to={`/categorie/${category.title.toLowerCase()}`}
                className="mb-4 text-2xl font-bold text-gray-900 hover:text-blue-600"
              >
                {category.title}
              </Link>

              <ul className="mb-4 space-y-2">
                {category.items.map((item) => (
                  <li key={item}>
                    <Link
                      to={`/artikel/${category.title.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm font-medium text-gray-900 hover:text-blue-600"
                    >
                      › {item}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                to={`/categorie/${category.title.toLowerCase()}`}
                className="overflow-hidden rounded-lg block"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-40 w-full object-cover transition-transform hover:scale-105"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
