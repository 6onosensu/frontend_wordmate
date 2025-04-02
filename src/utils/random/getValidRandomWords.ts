import { FormattedWord } from "@/types/wordType";
import shuffleAndSlice from "./shuffleAndSlice";

export const getValidRandomWords = (
  allWords: FormattedWord[],
  currentWord: FormattedWord,
  count: number
): FormattedWord[] => {
  const filtered = allWords.filter(
    (w) => w.word !== currentWord.word && !!w.word
  );
  return shuffleAndSlice(filtered, count);
};
