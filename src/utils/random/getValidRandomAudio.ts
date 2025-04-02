import { FormattedWord } from "@/types/wordType";
import shuffleAndSlice from "./shuffleAndSlice";

export const getValidRandomAudio = (
  allWords: FormattedWord[],
  currentWord: FormattedWord,
  count: number
): FormattedWord[] => {
  const filtered = allWords.filter(
    (w) => w.word !== currentWord.word && !!w.audio
  );
  return shuffleAndSlice(filtered, count);
};
