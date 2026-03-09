import React from 'react';
import { useParams, Link } from 'react-router-dom';

const categoryNames = {
  'omgeving': 'Omgeving',
  'wonen': 'Wonen',
  'leven': 'Leven',
  'zorg': 'Zorg',
  'werk-en-inkomen': 'Werk en Inkomen',
  'onderwijs-en-sport': 'Onderwijs en Sport',
};

function Article() {
  const { category, topic } = useParams();
  
  const articleData = {
    title: topic ? topic.replace(/-/g, ' ') : 'Artikel',
    lastUpdated: '8 maart 2026',
    category: categoryNames[category] || 'Algemeen',
    readTime: '5 min lezen',
    content: [
      {
        type: 'intro',
        text: 'Welkom op deze informatiepagina. Hier vindt u alle belangrijke informatie over dit onderwerp. Deze content wordt in de toekomst dynamisch geladen uit een database, maar voor nu gebruiken we deze uitgebreide mockup data.',
      },
      {
        type: 'heading',
        text: 'Wat is dit?',
      },
      {
        type: 'paragraph',
        text: 'Dit onderwerp valt onder de gemeentelijke dienstverlening. Wij helpen u graag verder met uw vraag of aanvraag. Hieronder vindt u gedetailleerde informatie over de procedure, vereisten en mogelijkheden.',
      },
      {
        type: 'alert',
        alertType: 'info',
        text: 'Let op: Door de grote drukte kan het langer duren voordat uw aanvraag wordt verwerkt. Reken op 4 tot 6 weken verwerkingstijd.',
      },
      {
        type: 'heading',
        text: 'Wat heeft u nodig?',
      },
      {
        type: 'paragraph',
        text: 'Voor een succesvolle aanvraag heeft u de volgende documenten en gegevens nodig:',
      },
      {
        type: 'list',
        items: [
          'Een geldig identiteitsbewijs (paspoort, ID-kaart of rijbewijs)',
          'Bewijs van inschrijving op uw huidige adres (niet ouder dan 3 maanden)',
          'Relevante documentatie specifiek voor uw situatie',
          'Eventuele formulieren volledig ingevuld en ondertekend',
          'DigiD voor online aanvragen',
          'Bankrekeningnummer voor eventuele terugbetalingen',
        ],
      },
      {
        type: 'heading',
        text: 'Hoe werkt het?',
      },
      {
        type: 'paragraph',
        text: 'Het aanvraagproces bestaat uit verschillende stappen. Volg deze stappen zorgvuldig om vertragingen te voorkomen:',
      },
      {
        type: 'numbered-list',
        items: [
          'Controleer of u aan alle voorwaarden voldoet',
          'Verzamel alle benodigde documenten',
          'Vul het online formulier in via onze website (DigiD vereist)',
          'Upload de gevraagde documenten',
          'Controleer uw gegevens en verstuur de aanvraag',
          'U ontvangt binnen 2 werkdagen een ontvangstbevestiging per e-mail',
          'Wij beoordelen uw aanvraag binnen 4 weken',
          'U ontvangt een besluit per post',
        ],
      },
      {
        type: 'paragraph',
        text: 'Indien wij aanvullende informatie nodig hebben, nemen wij binnen 10 werkdagen contact met u op. De behandeltermijn wordt dan opgeschort tot wij alle benodigde informatie hebben ontvangen.',
      },
      {
        type: 'heading',
        text: 'Openingstijden en locaties',
      },
      {
        type: 'paragraph',
        text: 'U kunt ook persoonlijk langskomen bij één van onze locaties. Let op: maak altijd eerst een afspraak via onze website of bel 14 010.',
      },
      {
        type: 'table',
        headers: ['Locatie', 'Adres', 'Openingstijden'],
        rows: [
          ['Hoofdkantoor', 'Coolsingel 40', 'Ma-Vr: 08:00-17:00'],
          ['Servicepunt Noord', 'Noordplein 21', 'Ma-Vr: 09:00-16:00'],
          ['Servicepunt Zuid', 'Zuidplein 123', 'Di-Do: 10:00-18:00'],
        ],
      },
      {
        type: 'heading',
        text: 'Kosten',
      },
      {
        type: 'paragraph',
        text: 'De kosten voor deze dienst zijn afhankelijk van uw specifieke situatie. Hieronder vindt u een overzicht van de standaardtarieven:',
      },
      {
        type: 'list',
        items: [
          'Standaard aanvraag: €25,00',
          'Spoedeisende aanvraag (binnen 5 werkdagen): €75,00',
          'Herhaalaanvraag: €15,00',
          'Kopie van documenten: €5,00 per stuk',
        ],
      },
      {
        type: 'alert',
        alertType: 'success',
        text: 'Tip: Heeft u recht op een bijstandsuitkering of bent u student? U komt mogelijk in aanmerking voor kwijtschelding. Vraag dit aan bij uw aanvraag.',
      },
      {
        type: 'heading',
        text: 'Veelgestelde vragen',
      },
      {
        type: 'faq',
        items: [
          {
            question: 'Hoe lang duurt de behandeling van mijn aanvraag?',
            answer: 'De standaard behandeltijd is 4 weken. Voor spoedeisende aanvragen is dit 5 werkdagen.',
          },
          {
            question: 'Kan ik mijn aanvraag intrekken?',
            answer: 'Ja, u kunt uw aanvraag op elk moment intrekken. Reeds betaalde kosten worden niet teruggestort.',
          },
          {
            question: 'Wat als ik het niet eens ben met het besluit?',
            answer: 'U kunt binnen 6 weken na de beslisdatum bezwaar maken. Dit kan via een bezwaarformulier op onze website.',
          },
        ],
      },
    ],
  };

  return (
    <main className="px-6 py-8 bg-white">
      <div className="mx-auto max-w-[800px]">

        <nav className="mb-6 text-sm">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-400">›</span>
          <Link to={`/categorie/${category}`} className="text-blue-600 hover:underline">{articleData.category}
          </Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-gray-600 capitalize">{articleData.title}</span>
        </nav>

        <header className="mb-8 border-b border-gray-200 pb-6">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-800">
              {articleData.category}
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">{articleData.readTime}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">Laatst bijgewerkt: {articleData.lastUpdated}</span>
          </div>
          <h1 className="mb-3 text-4xl font-bold text-gray-900 capitalize">
            {articleData.title}
          </h1>
        </header>

        <article className="prose max-w-none">
          {articleData.content.map((section, index) => {
            switch (section.type) {
              case 'intro':
                return (
                  <p key={index} className="mb-6 text-lg font-medium text-gray-800 leading-relaxed">
                    {section.text}
                  </p>
                );
              case 'heading':
                return (
                  <h2
                    key={index}
                    className="mt-10 mb-4 text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4"
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
                  <ul key={index} className="mb-6 ml-6 space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              case 'numbered-list':
                return (
                  <ol key={index} className="mb-6 ml-6 space-y-2 list-decimal">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 pl-2">
                        {item}
                      </li>
                    ))}
                  </ol>
                );
              case 'alert':
                return (
                  <div
                    key={index}
                    className={`mb-6 rounded-lg p-4 ${
                      section.alertType === 'info'
                        ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-900'
                        : 'bg-green-50 border-l-4 border-green-500 text-green-900'
                    }`}
                  >
                    <p className="font-medium">{section.text}</p>
                  </div>
                );
              case 'table':
                return (
                  <div key={index} className="mb-6 overflow-x-auto">
                    <table className="min-w-full border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          {section.headers.map((header, hIndex) => (
                            <th
                              key={hIndex}
                              className="border-b border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows.map((row, rIndex) => (
                          <tr key={rIndex} className="border-b border-gray-200">
                            {row.map((cell, cIndex) => (
                              <td
                                key={cIndex}
                                className="px-4 py-3 text-sm text-gray-700"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              case 'faq':
                return (
                  <div key={index} className="mb-6 space-y-4">
                    {section.items.map((item, faqIndex) => (
                      <div
                        key={faqIndex}
                        className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                      >
                        <h3 className="mb-2 font-semibold text-gray-900">
                          {item.question}
                        </h3>
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                );
              default:
                return null;
            }
          })}
        </article>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="mb-4 text-lg font-bold text-gray-900">Gerelateerde onderwerpen</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <Link 
              to={`/categorie/${category}`} 
              className="rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-500 hover:shadow-sm"
            >
              <p className="font-medium text-gray-900">← Terug naar {articleData.category}</p>
            </Link>
            <Link to="/" className="rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-500 hover:shadow-sm">
              <p className="font-medium text-gray-900">Terug naar home →</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Article;
