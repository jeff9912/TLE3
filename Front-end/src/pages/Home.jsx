import React from 'react';
import heroBackground from '../assets/img/achtergrond-hero.png';
import stad1 from '../assets/img/stad1.png';
import stad2 from '../assets/img/stad2.png';
import stad3 from '../assets/img/stad3.png';
import stad4 from '../assets/img/stad4.png';

const quickLinks = [
  '> Vergunningen',
  '> Afval',
  '> Natuur',
  ' > Vervoer',
  '> Belastingen',
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
    items: ['Trouwen', 'Scheiden', 'Geboort'],
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
              <li key={item} className="border-b border-gray-300">
                <button
                  type="button"
                  className="flex w-full items-center gap-3 py-5 text-left text-[20px] font-medium text-gray-900"
                >
                  <span>{item}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mx-auto max-w-[1240px]">

        <div className="mb-12 flex gap-8 px-8 py-6 items-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Meest gezocht
          </h2>

          <div className="flex flex-wrap items-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-full bg-yellow-200 px-6 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-300">
              › Verkiezingen
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-yellow-200 px-6 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-300">
              › Paspoort
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-yellow-200 px-6 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-300">
              › ID-Kaart
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-yellow-200 px-6 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-300">
              › Afval
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-green-600 px-6 py-2 text-sm font-medium text-white hover:bg-green-700">
              Alle onderwerpen
            </button>
          </div>
        </div>


        <div className="flex gap-12 items-start">
          {categories.map((category) => (
            <div key={category.title} className="flex flex-col min-w-[250px]">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {category.title}
              </h3>

              <ul className="mb-4 space-y-2">
                {category.items.map((item) => (
                  <li key={item}>
                    <button className="text-sm font-medium text-gray-900 hover:text-green-600">
                      › {item}
                    </button>
                  </li>
                ))}
              </ul>


              <div className="overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-40 w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
