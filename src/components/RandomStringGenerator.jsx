import React, { useState, useCallback, useEffect } from "react";

const RandomStringGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [randomString, setRandomString] = useState("");

  // useCallback for memoized random string generation
  const generateRandomString = useCallback(() => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    if (includeSymbols) characters += "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }, [length, includeSymbols]);

  // useEffect to auto-generate string on load or when settings change
  useEffect(() => {
    const newString = generateRandomString();
    setRandomString(newString);
  }, [generateRandomString]);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Random String Generator</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Length: {length}</label>
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
          className="mr-2"
        />
        <label className="text-sm">Include symbols (!@#$...)</label>
      </div>

      <div className="mb-4">
        <button
          onClick={() => setRandomString(generateRandomString())}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Generate
        </button>
      </div>

      <div className="bg-gray-100 p-4 rounded break-all text-center">
        <strong>Random String:</strong>
        <p className="mt-2 text-lg">{randomString}</p>
      </div>
    </div>
  );
};

export default RandomStringGenerator;
