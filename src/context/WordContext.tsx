import { createContext, FC, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { fetchUserWordsByStatus} from "@/services/apiService"; 
import { useAuth } from "@/context/AuthContext";
import { UserWord } from "@/types/wordType";

interface WordContextProps {
  words: Record<string, UserWord[]>;
  loadWords: (statuses?: string[]) => Promise<void>;
  refreshWords: () => void;
  loading: boolean;
  error: string;
}

export const WordContext = createContext<WordContextProps | undefined>(undefined);

export const WordProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { token } = useAuth();
  const [words, setWords] = useState<Record<string, UserWord[]>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const defaultStages = ["To Explore", "To Refresh", "Retained"];

  const loadWords = useCallback(async (statuses: string[] = defaultStages) => {
    if (!token) return;
    setLoading(true);
    setError("");

    try {
      const results = await Promise.all(
        statuses.map(async (status) => {
          const data = await fetchUserWordsByStatus(status, token);
          return { status, data };
        })
      );
      
      const updatedWords: Record<string, UserWord[]> = {};
      results.forEach(({ status, data }) => {
        updatedWords[status] = data || [];
      });

      setWords(updatedWords);
    } catch (err) {
      setError("Failed to load words");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      loadWords();
    }
  }, [token]);

  const refreshWords = () => loadWords(); 

  return (
    <WordContext.Provider value={{ words, loadWords, refreshWords, loading, error }}>
      {children}
    </WordContext.Provider>
  );
};

export const useWords = () => {
  const context = useContext(WordContext);
  if (!context) {
    throw new Error("useWords must be used within a WordProvider");
  }
  return context;
};