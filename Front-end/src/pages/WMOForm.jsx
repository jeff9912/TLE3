import React, {useState} from "react";

export default function MultiStepForm() {

    const [step, setStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState("");

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    console.log(selectedOption);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-10 rounded-lg shadow w-[500px]">

                {/* Step Indicator */}
                <p className="mb-6 text-gray-500">Stap {step} van 5</p>

                {/* Step Content */}
                {step === 1 && (
                    <div>
                        <h2 className="text-xl mb-4">Persoonlijke informatie</h2>

                        <input
                            type="text"
                            placeholder="Naam"
                            className="border p-2 w-full mb-3"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="border p-2 w-full"
                        />

                        <button
                            onClick={nextStep}
                            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Volgende
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2 className="text-xl mb-4">Adres informatie</h2>

                        <input
                            type="text"
                            placeholder="Straat"
                            className="border p-2 w-full mb-3"
                        />

                        <input
                            type="text"
                            placeholder="Postcode"
                            className="border p-2 w-full"
                        />

                        <div className="flex justify-between mt-6">
                            <button
                                onClick={prevStep}
                                className="bg-gray-400 text-white px-4 py-2 rounded"
                            >
                                Vorige
                            </button>

                            <button
                                onClick={nextStep}
                                className="bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Volgende
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h2 className="text-xl mb-6">Kies een optie</h2>

                        <div className="flex justify-center gap-8 mb-6">

                            <label
                                onClick={() => setSelectedOption("optie1")}
                                className="flex flex-col items-center cursor-pointer"
                            >
                                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center
                ${selectedOption === "optie1"
                                    ? "bg-blue-600 border-blue-600"
                                    : "border-gray-400"}`}>
                                </div>
                                <span className="mt-2 text-sm">Optie 1</span>
                            </label>

                            <label
                                onClick={() => setSelectedOption("optie2")}
                                className="flex flex-col items-center cursor-pointer"
                            >
                                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center
                ${selectedOption === "optie2"
                                    ? "bg-blue-600 border-blue-600"
                                    : "border-gray-400"}`}>
                                </div>
                                <span className="mt-2 text-sm">Optie 2</span>
                            </label>

                            <label
                                onClick={() => setSelectedOption("optie3")}
                                className="flex flex-col items-center cursor-pointer"
                            >
                                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center
                ${selectedOption === "optie3"
                                    ? "bg-blue-600 border-blue-600"
                                    : "border-gray-400"}`}>
                                </div>
                                <span className="mt-2 text-sm">Optie 3</span>
                            </label>

                        </div>

                        <div className="flex justify-between mt-6">
                            <button
                                onClick={prevStep}
                                className="bg-gray-400 text-white px-4 py-2 rounded"
                            >
                                Vorige
                            </button>

                            <button
                                onClick={nextStep}
                                className="bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Volgende
                            </button>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div>
                        <h2 className="text-xl mb-4">Adres informatie</h2>

                        <input
                            type="text"
                            placeholder="Straat"
                            className="border p-2 w-full mb-3"
                        />

                        <input
                            type="text"
                            placeholder="Postcode"
                            className="border p-2 w-full"
                        />

                        <div className="flex justify-between mt-6">
                            <button
                                onClick={prevStep}
                                className="bg-gray-400 text-white px-4 py-2 rounded"
                            >
                                Vorige
                            </button>

                            <button
                                onClick={nextStep}
                                className="bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Volgende
                            </button>
                        </div>
                    </div>
                )}

                {step === 5 && (
                    <div>
                        <h2 className="text-xl mb-4">Bevestiging</h2>

                        <p className="mb-6">Controleer uw gegevens en verzend.</p>

                        <div className="flex justify-between">
                            <button
                                onClick={prevStep}
                                className="bg-gray-400 text-white px-4 py-2 rounded"
                            >
                                Vorige
                            </button>

                            <button className="bg-green-600 text-white px-4 py-2 rounded">
                                Verzenden
                            </button>
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
}