import { useContext } from "react";
import { WordContext } from "../context/WordContext";

export const useWords = () => {
  const context = useContext(WordContext);
  if (!context) {
    throw new Error("useWords must be used within a WordProvider");
  }
  return context;
};