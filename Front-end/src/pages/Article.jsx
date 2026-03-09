import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Article() {
  const { topic } = useParams();
  const articleData = {
    title: topic ? topic.replace(/-/g, ' ') : 'Artikel',
    lastUpdated: '8 maart 2026',
    content: [
      {
        type: 'paragraph',
        text: 'Dit is een voorbeeldartikel over dit onderwerp. In de toekomst wordt deze informatie dynamisch geladen uit een database.',
      },
      {
        type: 'heading',
        text: 'Wat heeft u nodig?',
      },
      {
        type: 'list',
        items: [
          'Een geldig identiteitsbewijs',
          'Relevante documentatie',
          'Eventuele formulieren ingevuld',
        ],
      },
      {
        type: 'heading',
        text: 'Hoe werkt het?',
      },
      {
        type: 'paragraph',
        text: 'U kunt online een aanvraag indienen via ons formulier. Wij behandelen uw aanvraag binnen 4 weken en sturen u een bericht zodra uw aanvraag is verwerkt.',
      },
      {
        type: 'heading',
        text: 'Kosten',
      },
      {
        type: 'paragraph',
        text: 'De kosten voor deze dienst variëren afhankelijk van uw situatie. Neem contact op voor meer informatie over de exacte kosten.',
      },
      {
        type: 'heading',
        text: 'Contact',
      },
      {
        type: 'paragraph',
        text: 'Heeft u vragen? Neem dan contact op met onze klantenservice op telefoonnummer 14 010 of via onze contactpagina.',
      },
    ],
  };

  return (
    <main className="px-6 py-8 bg-white">
      <div className="mx-auto max-w-[800px]">
        <nav className="mb-6 text-sm">
          <Link to="/" className="text-green-600 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-gray-600 capitalize">{articleData.title}</span>
        </nav>

        <header className="mb-8">
          <h1 className="mb-3 text-4xl font-bold text-gray-900 capitalize">
            {articleData.title}
          </h1>
          <p className="text-sm text-gray-600">
            Laatst bijgewerkt: {articleData.lastUpdated}
          </p>
        </header>

        <article className="prose max-w-none">
          {articleData.content.map((section, index) => {
            switch (section.type) {
              case 'heading':
                return (
                  <h2
                    key={index}
                    className="mt-8 mb-4 text-2xl font-bold text-gray-900"
                  >
                    {section.text}
                  </h2>
                );
              case 'paragraph':
                return (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {section.text}
                  </p>
                );
              case 'list':
                return (
                  <ul key={index} className="mb-4 ml-6 list-disc space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </article>

        {/* Call-to-action buttons */}
        <div className="mt-12 flex gap-4 border-t border-gray-200 pt-8">
          <button className="rounded-md bg-green-600 px-6 py-3 text-sm font-medium text-white hover:bg-green-700">
            Aanvraag indienen
          </button>
          <button className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Meer informatie
          </button>
        </div>
      </div>
    </main>
  );
}

export default Article;
