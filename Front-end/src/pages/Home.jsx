import React from "react";
import heroBackground from "../assets/img/achtergrond-hero.png";

const quickLinks = ["Vergunningen", "Afval", "Natuur", "Vervoer", "Belastingen"];

function Home() {
  return (
    <main className="px-6 py-6">
      <section className="mx-auto grid max-w-[1240px] grid-cols-1 gap-3 lg:grid-cols-[2fr_1fr]">
        <div className="overflow-hidden rounded-md">
          <img
            src={heroBackground}
            alt="Parkeerzone bord"
            className="h-[370px] w-full object-cover"
          />
        </div>

        <aside className="rounded-xl bg-gray-100 px-8 py-6">
          <h2 className="mb-4 text-[30px] font-semibold text-gray-900">Relevant voor jou</h2>

          <ul>
            {quickLinks.map((item) => (
              <li key={item} className="border-b border-gray-300">
                <button
                  type="button"
                  className="flex w-full items-center gap-3 py-5 text-left text-[27px] font-medium text-gray-900"
                >
                  <span className="text-[30px] leading-none">›</span>
                  <span>{item}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}

export default Home;