import { updateUserWordRepetition } from "@/services/apiService";
import { FormattedWord } from "@/types/wordType";
import { Dispatch, SetStateAction } from "react";

export const updateRepetitionIfCorrect = async (
  isCorrect: boolean,
  currentWord: FormattedWord,
  currentIndex: number,
  words: FormattedWord[],
  token: string,
  setWords: (value: FormattedWord[]) => void
) => {
  if (!isCorrect || !token) return;

  const updatedCount = currentWord.repetitionCount + 1;

  try {
    await updateUserWordRepetition(currentWord.id, updatedCount, token);

    const updatedWords = [...words];
    updatedWords[currentIndex] = {
      ...currentWord,
      repetitionCount: updatedCount,
    };
    setWords(updatedWords);
  } catch (error) {
    console.error("Error updating repetitionCount:", error);
  }
};

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