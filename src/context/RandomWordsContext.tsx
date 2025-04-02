import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { FormattedWord } from "@/types/wordType";
import { getRandomWords } from "@/services/apiService";
import { useAuth } from "./AuthContext";
import { formatMeanings } from "@/utils/format/formatMeanings";

interface RandomWordsContextType {
  randomWords: FormattedWord[];
}

const RandomWordsContext = createContext<RandomWordsContextType>({
  randomWords: [],
});

export const RandomWordsProvider = ({ children }: { children: ReactNode }) => {
  const [randomWords, setRandomWords] = useState<FormattedWord[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchWords = async () => {
      if (!token) return;
      const result = await getRandomWords(20, token);
      const words = formatMeanings(result);
      setRandomWords(words);
    };

    fetchWords();
  }, [token]);

  return (
    <RandomWordsContext.Provider value={{ randomWords }}>
      {children}
    </RandomWordsContext.Provider>
  );
};

export const useRandomWords = () => useContext(RandomWordsContext);
