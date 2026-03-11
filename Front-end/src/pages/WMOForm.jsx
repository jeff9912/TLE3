// import React, {useState} from "react";
//
// export default function MultiStepForm() {
//
//     const [step, setStep] = useState(1);
//     const [selectedOption, setSelectedOption] = useState("");
//
//     const nextStep = () => {
//         setStep(step + 1);
//     };
//
//     const prevStep = () => {
//         setStep(step - 1);
//     };
//
//     console.log(selectedOption);
//
//   // try {
//   //     const response = await fetch('', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(formData),
//   //     });
//
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//
//             <div className="bg-white p-10 rounded-lg shadow w-[500px]">
//
//                 {/* Step Indicator */}
//                 <p className="mb-6 text-gray-500">Stap {step} van 5</p>
//
//                 {/* Step Content */}
//                 {step === 1 && (
//                     <div>
//                         <h2 className="text-xl mb-4">Persoonlijke informatie</h2>
//
//                         <input
//                             type="text"
//                             placeholder="Naam"
//                             className="border p-2 w-full mb-3"
//                         />
//
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             className="border p-2 w-full"
//                         />
//
//                         <button
//                             onClick={nextStep}
//                             className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
//                         >
//                             Volgende
//                         </button>
//                     </div>
//                 )}
//
//                 {step === 2 && (
//                     <div>
//                         <h2 className="text-xl mb-4">Adres informatie</h2>
//
//                         <input
//                             type="text"
//                             placeholder="Straat"
//                             className="border p-2 w-full mb-3"
//                         />
//
//                         <input
//                             type="text"
//                             placeholder="Postcode"
//                             className="border p-2 w-full"
//                         />
//
//                         <div className="flex justify-between mt-6">
//                             <button
//                                 onClick={prevStep}
//                                 className="bg-gray-400 text-white px-4 py-2 rounded"
//                             >
//                                 Vorige
//                             </button>
//
//                             <button
//                                 onClick={nextStep}
//                                 className="bg-blue-600 text-white px-4 py-2 rounded"
//                             >
//                                 Volgende
//                             </button>
//                         </div>
//                     </div>
//                 )}
//
//                 {step === 3 && (
//                     <div>
//                         <h2 className="text-xl mb-6">Kies een optie</h2>
//
//                         <div className="flex justify-center gap-8 mb-6">
//
//                             <label
//                                 onClick={() => setSelectedOption("optie1")}
//                                 className="flex flex-col items-center cursor-pointer"
//                             >
//                                 <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center
//                 ${selectedOption === "optie1"
//                                     ? "bg-blue-600 border-blue-600"
//                                     : "border-gray-400"}`}>
//                                 </div>
//                                 <span className="mt-2 text-sm">Optie 1</span>
//                             </label>
//
//                             <label
//                                 onClick={() => setSelectedOption("optie2")}
//                                 className="flex flex-col items-center cursor-pointer"
//                             >
//                                 <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center
//                 ${selectedOption === "optie2"
//                                     ? "bg-blue-600 border-blue-600"
//                                     : "border-gray-400"}`}>
//                                 </div>
//                                 <span className="mt-2 text-sm">Optie 2</span>
//                             </label>
//
//                             <label
//                                 onClick={() => setSelectedOption("optie3")}
//                                 className="flex flex-col items-center cursor-pointer"
//                             >
//                                 <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center
//                 ${selectedOption === "optie3"
//                                     ? "bg-blue-600 border-blue-600"
//                                     : "border-gray-400"}`}>
//                                 </div>
//                                 <span className="mt-2 text-sm">Optie 3</span>
//                             </label>
//
//                         </div>
//
//                         <div className="flex justify-between mt-6">
//                             <button
//                                 onClick={prevStep}
//                                 className="bg-gray-400 text-white px-4 py-2 rounded"
//                             >
//                                 Vorige
//                             </button>
//
//                             <button
//                                 onClick={nextStep}
//                                 className="bg-blue-600 text-white px-4 py-2 rounded"
//                             >
//                                 Volgende
//                             </button>
//                         </div>
//                     </div>
//                 )}
//
//                 {step === 4 && (
//                     <div>
//                         <h2 className="text-xl mb-4">Adres informatie</h2>
//
//                         <input
//                             type="text"
//                             placeholder="Straat"
//                             className="border p-2 w-full mb-3"
//                         />
//
//                         <input
//                             type="text"
//                             placeholder="Postcode"
//                             className="border p-2 w-full"
//                         />
//
//                         <div className="flex justify-between mt-6">
//                             <button
//                                 onClick={prevStep}
//                                 className="bg-gray-400 text-white px-4 py-2 rounded"
//                             >
//                                 Vorige
//                             </button>
//
//                             <button
//                                 onClick={nextStep}
//                                 className="bg-blue-600 text-white px-4 py-2 rounded"
//                             >
//                                 Volgende
//                             </button>
//                         </div>
//                     </div>
//                 )}
//
//                 {step === 5 && (
//                     <div>
//                         <h2 className="text-xl mb-4">Bevestiging</h2>
//
//                         <p className="mb-6">Controleer uw gegevens en verzend.</p>
//
//                         <div className="flex justify-between">
//                             <button
//                                 onClick={prevStep}
//                                 className="bg-gray-400 text-white px-4 py-2 rounded"
//                             >
//                                 Vorige
//                             </button>
//
//                             <button className="bg-green-600 text-white px-4 py-2 rounded">
//                                 Verzenden
//                             </button>
//                         </div>
//                     </div>
//                 )}
//
//
//             </div>
//         </div>
//     );
// }
import React, { useEffect, useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    straat: "",
    postcode: "",
    question: "",
    description: ""
  });

  const [inquiryTypes, setInquiryTypes] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [loadingTypes, setLoadingTypes] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const USER_ID = "69b157e7c5851af11eca54de";
  const API_BASE_URL = "http://127.0.0.1:8000/api";

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    async function fetchInquiryTypes() {
      try {
        const response = await fetch(`http://145.24.237.215:8000/api/inquiry-types`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error("Kon inquiry types niet ophalen");
        }

        const data = await response.json();
        setInquiryTypes(data);
      } catch (error) {
        console.error(error);
        setResultMessage("Fout bij het ophalen van de aanvraagtypes.");
      } finally {
        setLoadingTypes(false);
      }
    }

    fetchInquiryTypes();
  }, []);

  const handleSubmit = async () => {
    if (!selectedOption) {
      setResultMessage("Kies eerst een type aanvraag.");
      return;
    }

    setSubmitting(true);
    setResultMessage("");

    const payload = {
      user_id: USER_ID,
      type_id: selectedOption,
      created_at: new Date().toISOString(),
      content: {
        naam: formData.naam,
        email: formData.email,
        straat: formData.straat,
        postcode: formData.postcode,
        beschrijving: formData.description
      },
      status: "OPEN",
      question: formData.question
    };

    try {
      const response = await fetch(`http://145.24.237.215:8000/api/inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Er ging iets mis bij het versturen.");
      }

      setResultMessage("Uw aanvraag is succesvol verzonden.");
      console.log("Inquiry response:", data);
    } catch (error) {
      console.error(error);
      setResultMessage(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow w-[500px]">
        <p className="mb-6 text-gray-500">Stap {step} van 5</p>

        {resultMessage && (
          <div className="mb-4 p-3 rounded bg-gray-100 text-sm text-gray-700">
            {resultMessage}
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="text-xl mb-4">Persoonlijke informatie</h2>

            <input
              type="text"
              name="naam"
              placeholder="Naam"
              value={formData.naam}
              onChange={handleChange}
              className="border p-2 w-full mb-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
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
              name="straat"
              placeholder="Straat"
              value={formData.straat}
              onChange={handleChange}
              className="border p-2 w-full mb-3"
            />

            <input
              type="text"
              name="postcode"
              placeholder="Postcode"
              value={formData.postcode}
              onChange={handleChange}
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
            <h2 className="text-xl mb-6">Kies een aanvraagtype</h2>

            {loadingTypes ? (
              <p>Aanvraagtypes laden...</p>
            ) : (
              <div className="grid gap-3 mb-6">
                {inquiryTypes.map((type) => (
                  <label
                    key={type.id || type._id}
                    onClick={() => setSelectedOption(type.id || type._id)}
                    className={`border rounded p-3 cursor-pointer ${
                      selectedOption === (type.id || type._id)
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300"
                    }`}
                  >
                    <div className="font-medium">{type.name}</div>
                    {type.description && (
                      <div className="text-sm text-gray-600 mt-1">
                        {type.description}
                      </div>
                    )}
                  </label>
                ))}
              </div>
            )}

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
            <h2 className="text-xl mb-4">Uw vraag</h2>

            <input
              type="text"
              name="question"
              placeholder="Korte vraag"
              value={formData.question}
              onChange={handleChange}
              className="border p-2 w-full mb-3"
            />

            <textarea
              name="description"
              placeholder="Beschrijf uw situatie"
              value={formData.description}
              onChange={handleChange}
              className="border p-2 w-full"
              rows={6}
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

            <div className="mb-4 text-sm text-gray-700 space-y-2">
              <p><strong>Naam:</strong> {formData.naam}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Straat:</strong> {formData.straat}</p>
              <p><strong>Postcode:</strong> {formData.postcode}</p>
              <p><strong>Vraag:</strong> {formData.question}</p>
              <p><strong>Beschrijving:</strong> {formData.description}</p>
            </div>

            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Vorige
              </button>

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                {submitting ? "Bezig..." : "Verzenden"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}