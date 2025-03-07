import { useState } from "react";

export const useWordSearch = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!word) return;
    
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) {
        throw new Error("Word not found");
      }
      const result = await response.json();
      setData(result[0]);
    } catch (err) {
      setError("Word not found, try another one.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddDefinition = (definition: string) => {
    console.log(`Added definition: ${definition}`);
  };

  return { word, setWord, data, error, loading, handleSearch, handleAddDefinition };
};
