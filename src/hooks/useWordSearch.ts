import { useAuth } from "@/context/AuthContext";
import { useWords } from "@/context/WordContext";
import { saveUserWord } from "@/services/apiService";
import { DictionaryAPIResponse } from "@/types/dictionaryApiResponse";
import { useState } from "react";

export const useWordSearch = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState<DictionaryAPIResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { refreshWords } = useWords();
  const { token } = useAuth();

  const handleSearch = async () => {
    if (!word) return;
    
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      if (!res.ok) throw new Error("Word not found");
      const result: DictionaryAPIResponse[] = await res.json();
      setData(result[0]);
    } catch {
      setError("Word not found, try another one.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddDefinition = async (
    meaning: DictionaryAPIResponse["meanings"][number],
    definition: DictionaryAPIResponse["meanings"][number]["definitions"][number],
  ) => {
    if (!token || !data) return;

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
      word: data.word,
      audio,
      partOfSpeech: meaning.partOfSpeech, 
      definition: definition.definition, 
      example: definition.example || null,
      synonyms: Array.from(new Set([
        ...(definition.synonyms || []),
        ...(meaning.synonyms || [])
      ])),
      antonyms: Array.from(new Set([
        ...(definition.antonyms || []),
        ...(meaning.antonyms || [])
      ])),
      
    };
    
    try {
      await saveUserWord(formattedData, token);
      await refreshWords("To Explore");
    } catch (err) {
      console.error("Error saving word:", err);
    }
  };

  return { 
    word, 
    setWord, 
    data, 
    error, 
    loading, 
    handleSearch, 
    handleAddDefinition 
  };
};
