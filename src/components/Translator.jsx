import React, { useState } from "react";
import axios from "axios";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [language, setLanguage] = useState("hi"); // Default: Hindi
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
  setLoading(true);

  const options = {
    method: 'POST',
    url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/text',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '95135971d1mshf20ef7dc0c3703ep1c7e3ejsn7f1902787dbe', // ⬅️ Put your actual key here
      'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com',
    },
    data: {
      from: 'en',
      to: language,
      text: inputText,
    },
  };

  try {
    const response = await axios.request(options);
    setTranslatedText(response.data.trans);
  } catch (error) {
    console.error(error);
    alert("Translation failed. Please check API key or input.");
  }

  setLoading(false);
};


  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Text Translator</h1>

      <textarea
        className="w-full p-2 border rounded mb-4"
        rows={4}
        placeholder="Enter English text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <select
        className="w-full p-2 border rounded mb-4"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="hi">Hindi</option>
        <option value="mr">Marathi</option>
        <option value="ta">Tamil</option>
        <option value="te">Telugu</option>
        <option value="gu">Gujarati</option>
      </select>

      <button
        onClick={handleTranslate}
        disabled={loading || !inputText.trim()}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Translating..." : "Translate"}
      </button>

      {translatedText && (
        <div className="mt-4 bg-gray-100 p-3 rounded">
          <strong className="text-gray-700">Translation:</strong>
          <p className="mt-2 text-lg">{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
