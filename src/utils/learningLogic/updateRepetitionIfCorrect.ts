import { updateUserWordRepetition } from "@/services/apiService";
import { FormattedWord } from "@/types/wordType";

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
  console.info(updatedCount);

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

