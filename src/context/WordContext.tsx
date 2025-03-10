import { createContext, FC, ReactNode, useCallback, useContext } from "react";
import { fetchUserWordsByStatus} from "@/services/apiService"; 
import { useAuth } from "@/context/AuthContext";
import { useFetch } from "@/hooks/useFetch";
import { UserWord } from "@/types/wordType";

interface WordContextProps {
  words: Record<string, UserWord[]>; 
  loadWords: (status: string) => void; 
  loading: boolean;
  error: string;
}

export const WordContext = createContext<WordContextProps | undefined>(undefined);

export const WordProvider: FC<{ children: ReactNode; status: string }> = ({ children, status }) => {
  const { token } = useAuth();

  const fetchWords = useCallback(() => {
    if (!token) return Promise.resolve({});
    return fetchUserWordsByStatus(status, token); 
  }, [token, status]);

  const { data: words, loading, error } = useFetch(fetchWords);

  return (
    <WordContext.Provider value={{ words: words || {}, loadWords: fetchWords, loading, error }}>
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