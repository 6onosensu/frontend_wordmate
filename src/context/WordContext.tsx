import { createContext, FC, ReactNode, useCallback } from "react";
import { fetchUserWordsByStatus} from "../services/apiService"; 
import { useAuth } from "../hooks/useAuth";
import { useFetch } from "../hooks/useFetch";

interface Word {
  id: number;
  word: string;
  audio?: string;
  definition: string;
  fullData?: any; 
}

interface WordContextProps {
  words: Record<string, Word[]>; 
  loadWords: (status: string) => void; 
  loading: boolean;
  error: string;
}

export const WordContext = createContext<WordContextProps | undefined>(undefined);

export const WordProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { token } = useAuth();
  
  const fetchWords = useCallback(() => {
    if (!token) return Promise.resolve({});
    return fetchUserWordsByStatus("to_learn", token); 
  }, [token]);

  const { data: words, loading, error } = useFetch(fetchWords);

  return (
    <WordContext.Provider value={{ words: words || {}, loadWords: fetchWords, loading, error }}>
      {children}
    </WordContext.Provider>
  );
};