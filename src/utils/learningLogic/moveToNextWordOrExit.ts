import { FormattedWord } from "@/types/wordType";
import { Dispatch, SetStateAction } from "react";

export const moveToNextWordOrExit = (
  currentIndex: number,
  words: FormattedWord[],
  setCurrentIndex: Dispatch<SetStateAction<number>>,
  navigate: (path: string) => void
) => {
  if (currentIndex < words.length - 1) {
    setCurrentIndex(prev => prev + 1);
  } else {
    navigate("/dashboard");
  }
};