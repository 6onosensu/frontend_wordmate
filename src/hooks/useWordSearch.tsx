import { useAuth } from "@/context/AuthContext";
import { saveUserWord } from "@/services/apiService";
import { DictionaryAPIResponse } from "@/types/wordType";
import { useState } from "react";

export const useWordSearch = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState<DictionaryAPIResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const { token } = useAuth();

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
      const result: DictionaryAPIResponse[] = await response.json();
      setData(result[0]);
    } catch (err) {
      setError("Word not found, try another one.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddDefinition = async (
    meaning: DictionaryAPIResponse["meanings"][number],
    definition: DictionaryAPIResponse["meanings"][number]["definitions"][number],
  ) => {
    if (!token) {
      console.error("No token found! User is not authenticated.");
      return;
    }

    if (!data) return;

    const word = data.word;

    let audio = null;
    if (data.phonetics) {
      for (const phonetic of data.phonetics) {
        if (phonetic.audio && phonetic.audio.trim() !== "") {
          audio = phonetic.audio;
          break; 
        }
      }
    }
    
    const formattedData = {
      word: word,
      audio: audio,
      partOfSpeech: meaning.partOfSpeech, 
      definition: definition.definition, 
      example: definition.example || null,
      synonyms: definition.synonyms || [],
      antonyms: definition.antonyms || []
    };

    try {
      await saveUserWord(formattedData, token);
    } catch (err) {
      console.error("Error saving word:", err);
    }
  };

  return { word, setWord, data, error, loading, handleSearch, handleAddDefinition };
};
