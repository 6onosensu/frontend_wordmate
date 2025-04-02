import { FormattedWord } from "@/types/wordType";

const shuffleAndSlice = (
  filteredWords: FormattedWord[],
  count: number
): FormattedWord[] => {
  const shuffled = filteredWords.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default shuffleAndSlice;
