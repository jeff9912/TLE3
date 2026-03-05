import React from 'react';
import { useNavigate } from 'react-router-dom';
import Accordion from '../components/Accordion';

function WMOForm() {
  const navigate = useNavigate();

  const accordionItems = [
    {
      title: 'Wanneer hulp via WMO?',
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-relaxed">
            U kunt hulp via de WMO (Wet Maatschappelijke Ondersteuning) krijgen wanneer u door een beperking, ziekte of ouderdom moeite heeft om zelfstandig te functioneren in het dagelijks leven. Het doel van de WMO is om ervoor te zorgen dat u zo lang mogelijk zelfstandig thuis blijven wonen en actief kunt deelnemen aan de samenleving.
          </p>
          <p className="font-semibold text-sm">U komt mogelijk in aanmerking voor ondersteuning wanneer:</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>U het huishouden niet meer zelfstandig kunt doen</li>
            <li>U moeite heeft met dagelijkse activiteiten, zoals boodschappen doen of administratie</li>
            <li>U begeleiding nodig heeft bij het aanbrengen van structuur in uw dag</li>
            <li>Uw woning aangepast moet worden (bijvoorbeeld met een traplift of aangepaste badkamer)</li>
            <li>U aanpast vervoer nodig heeft</li>
            <li>U zonder ondersteuning niet zelfstandig thuis kunt blijven wonen</li>
          </ul>
          <p className="text-sm text-gray-700 italic mt-4">
            De gemeente kijkt altijd eerst naar wat u zelf nog kunt en of mensen in uw omgeving kunnen helpen. Daarna bepalen we samen of en hoe de gemeente ondersteuning kan bieden.
          </p>
        </div>
      ),
    },
    {
      title: 'Waarvor kan je terecht bij de gemeente?',
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-relaxed">
            De gemeente Zuidplas kan u helpen met verschillende zaken onder de WMO. Hier zijn enkele voorbeelden:
          </p>
          <div className="bg-white p-4 rounded border border-gray-300 space-y-3 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Hulp in het huishouden</h4>
              <p className="text-gray-700">Ondersteuning bij schoonmaken, wassen en strijken van kleding</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Persoonlijke verzorging</h4>
              <p className="text-gray-700">Hulp bij wassen, aankleden of medicijngebruik</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Begeleiding en activering</h4>
              <p className="text-gray-700">Ondersteuning om deel te nemen aan dagelijkse activiteiten</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Woningaanpassingen</h4>
              <p className="text-gray-700">Financiële ondersteuning voor aanpassingen aan uw woning</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Mantelzorg ondersteuning</h4>
              <p className="text-gray-700">Ondersteuning voor mensen die voor u zorgen</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 italic">
            Neem contact op met de gemeente voor een gesprek over uw specifieke situatie.
          </p>
        </div>
      ),
    },
    {
      title: 'WMO aanvragen bij Stichting ZO!',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Stichting ZO!</h4>
            <p className="text-sm leading-relaxed text-gray-700 mb-3">
              Stichting ZO! is er voor iedere inwoner van gemeente Zuidplas die een vraag heeft over welzijn en zorg. Bij Stichting ZO! kun je terecht voor alle vragen en zorgen over geldzaken, wonen, school, (mantel)zorg, jeugdhulp, gezin/relatie, inburgering en ouder worden. Daarnaast kun je er terecht voor informatie rond vrijwilligerswerk (www.stzo.nl/vrijwilligerswerk), voor inzet in jouw buurt (www.stzo.nl/zuidplasverbindt) voor meerdoen aan veel verschillende activiteiten voor alle leeftijden (www.stzo.nl/activiteiten).
            </p>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300">
            <h5 className="font-bold text-gray-900 mb-2">Wat is Stichting ZO!</h5>
            <p className="text-sm text-gray-700">
              Makkelijk en snel toegang tot zorg, welzijn en ondersteuning. Dat is het doel van Stichting ZO! Sinds 2021 is ZO! de plek waar ervaring en kennis in de gemeente Zuidplas op één plek samenkomt. ZO! gaat uit van samenwerking en van eigen kracht. Tijdens onze activiteiten en diensten staan ontmoeten, ontdekken, omarmen en ondersteunen centraal.
            </p>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300">
            <h5 className="font-bold text-gray-900 mb-2">Zovoerelkaar</h5>
            <p className="text-sm text-gray-700 mb-2">
              ZO! is ook de initiatiefnemer van de website www.zovoerelkaar.nl. Dit is het digitale dorpsplein van Zuidplas waar iedereen onder meer berichten, activiteiten en vrijwilligerswerk kan plaatsen. Er is een nauwe samenwerking tussen Stichting ZO! en de gemeente Zuidplas.
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Bekijk hier ook de flyer in pdf format over Stichting ZO!</span>
            </p>
          </div>

          <button
            onClick={() => alert('WMO aanvraag formulier opent...')}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
          >
            WMO melding doen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <div className="bg-white p-4 rounded border border-gray-300">
            <h5 className="font-bold text-gray-900 mb-3">Wat regel je nog meer via Stichting ZO!</h5>
            <p className="text-sm text-gray-700 mb-3">
              Je kunt er terecht voor je informatie over vrijwilligerswerk, voor inzet in jouw buurt en voor meerdoen aan veel verschillende activiteiten voor alle leeftijden. Daarnaast kun je er terecht voor Zorg en hulp, onder andere:
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-3">
              <li>• <span className="underline">Zorg in natura</span> (jeugd en wmo)</li>
              <li>• <span className="underline">Persoonsgebonden budget</span> (PGB)</li>
              <li>• <span className="underline">Woningaanpassing aanvragen</span></li>
              <li>• <span className="underline">Hulp bij huishouden aanvragen</span></li>
              <li>• <span className="underline">Hulp voor ouderen, zieken, mensen met een beperking</span> (wmo)</li>
              <li>• <span className="underline">Leef- en woonstandigheden</span> (daklozenopvang en inloopvoorzieningen)</li>
              <li>• <span className="underline">Aanvragen gehandicaptenparkeerkaart</span></li>
              <li>• <span className="underline">Leerlingenvervoer</span></li>
              <li>• <span className="underline">Vervoersvoorziening aanvragen</span></li>
              <li>• <span className="underline">Urgentie bij sociale huurwoningen</span></li>
              <li>• <span className="underline">Jeugdhulp</span></li>
              <li>• <span className="underline">Jeugdgezondheidszorg</span></li>
              <li>• <span className="underline">Inburgeren (civic integration programme)</span></li>
            </ul>
          </div>

          <button
            onClick={() => window.open('https://www.stzo.nl', '_blank')}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
          >
            www.stzo.nl
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Section 1: Green Header Background */}
      <section className="bg-green-50 border-b border-gray-300">
        <div className="mx-auto max-w-3xl px-6 py-12">
          {/* Back Button */}
          <button
            onClick={() => navigate('/aanvragen')}
            className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Terug naar aanvragen
          </button>

          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">
              WMO
            </h1>
            <h2 className="text-2xl text-gray-900 font-medium mb-6">
              Wet maatschappelijke ondersteuning
            </h2>
            <p className="text-gray-700 text-center max-w-2xl mx-auto">
              Heeft u door ziekte, een handicap of ouderdom moeite nodig bij uw dagelijks leven? Zoals hulp bij het huishouden of vervoer? Of heeft u een voorziening nodig, zoals een traplift in huis? De gemeente kan u daarbij helpen via de Wmo (Wet maatschappelijke ondersteuning).
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: White Content Background with Accordions */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <Accordion items={accordionItems} />
        </div>
      </section>
    </main>
  );
}

export default WMOForm;
