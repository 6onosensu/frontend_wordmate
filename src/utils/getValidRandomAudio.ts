import { FormattedWord } from "@/types/wordType";

export const getValidRandomAudio = (
  allWords: FormattedWord[],
  currentWord: FormattedWord,
  count: number = 3
): FormattedWord[] => {
  const filtered = allWords.filter(
    (w) => w.word !== currentWord.word && !!w.audio
  );

  const shuffled = filtered.sort(() => Math.random() - 0.5);

  return shuffled.slice(0, count);
};
