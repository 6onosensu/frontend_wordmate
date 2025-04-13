import { createContext, FC, ReactNode, useContext, useState } from "react";
import { fetchUserWordsByStatus} from "@/services/apiService"; 
import { useAuth } from "@/context/AuthContext";
import { UserWord } from "@/types/wordType";
import { stages } from "@/utils/data/stages";

interface WordContextProps {
  words: Record<string, UserWord[]>;
  loadWords: (statuses?: string[]) => Promise<void>;
  refreshWords: (status: string) => void;
  loading: boolean;
  error: string;
}

const WordContext = createContext<WordContextProps | undefined>(undefined);
const defaultStatuses = stages.map(s => s.key);

export const WordProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { token } = useAuth();
  const [words, setWords] = useState<Record<string, UserWord[]>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadWords = async (statuses: string[] = defaultStatuses) => {
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

      setWords((prev) => {
        const updated = { ...prev };
        results.forEach(({ status, data }) => {
          updated[status] = data || [];
        });
        return updated;
      });
    } catch {
      setError("Failed to load words");
    } finally {
      setLoading(false);
    }
  };

  const refreshWords = (status: string) => {
    return loadWords([status]);
  };

  return (
    <WordContext.Provider 
      value={{ words, loadWords, refreshWords, loading, error }}
    >
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