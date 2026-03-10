import React from "react";

export default function WmoAanvragen() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">

            {/* Title Section */}
            <div className="w-full max-w-6xl bg-gray-200 rounded-xl shadow p-10 text-center relative">
                <h1 className="text-3xl font-semibold">WMO-aanvragen</h1>
                <p className="text-gray-700 mt-2">Wet maatschappelijke ondersteuning</p>

                {/* Progress Bar */}
                <div className="mt-8 flex items-center justify-between px-10">

                    {/* Line */}
                    <div className="absolute left-20 right-20 h-2 bg-blue-600"></div>

                    {/* Circles */}
                    <div className="w-6 h-6 bg-red-500 rounded-full z-10"></div>
                    <div className="w-6 h-6 bg-blue-600 rounded-full z-10"></div>
                    <div className="w-6 h-6 bg-blue-600 rounded-full z-10"></div>
                    <div className="w-6 h-6 bg-blue-600 rounded-full z-10"></div>
                    <div className="w-6 h-6 bg-blue-600 rounded-full z-10"></div>
                    <div className="w-6 h-6 bg-blue-600 rounded-full z-10"></div>
                    <div className="w-6 h-6 bg-blue-600 rounded-full z-10"></div>

                </div>
            </div>


            {/* Main Card */}
            <div className="relative w-full max-w-5xl mt-12">

                {/* Decorative circles */}
                <div className="absolute -left-10 top-20 w-20 h-20 bg-red-300 rounded-full"></div>
                <div className="absolute -right-10 -top-10 w-24 h-24 bg-red-300 rounded-full"></div>

                <div className="bg-white border-4 border-blue-800 rounded-xl p-12 text-center relative z-10">

                    <h2 className="text-2xl mb-6">Ik wil een WMO Melding doen!</h2>

                    {/* Info Text */}
                    <div className="text-sm text-gray-700 max-w-xl mx-auto mb-10 text-left">
                        <p className="font-semibold mb-2">Cruciale informatie:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                Als u dit formulier invult wanneer u ingelogd bent zullen wij
                                automatisch veel van uw persoonsgegevens voor u invullen.
                            </li>
                            <li>
                                De gemeente verwerkt en beschermt wettelijk uw persoonsgegevens
                                volgens de AI Gelverordening.
                            </li>
                            <li>
                                Ook zonder in te loggen kunt u deze melding doen.
                            </li>
                            <li>
                                U kunt uw persoonlijke plan indienen voordat u aan dit formulier
                                begint. Dit is niet verplicht, maar helpt ons met het beeld
                                krijgen bij uw situatie.
                            </li>
                        </ul>
                    </div>

                    {/* Buttons Section (FLEX INSTEAD OF GRID) */}
                    <div className="flex justify-center gap-10">

                        <div className="flex flex-col items-center">
                            <p className="mb-3 font-medium">Met DigiD</p>
                            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg">
                                WMO melding doen
                            </button>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="mb-3 font-medium">Zonder DigiD</p>
                            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg">
                                WMO melding doen
                            </button>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="mb-3 font-medium">Uw plan creeren</p>
                            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg">
                                Mijn idee maken
                            </button>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}