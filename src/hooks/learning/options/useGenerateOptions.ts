import { FormattedWord } from "@/types/wordType";
import shuffleAndSlice from "@/utils/random/shuffleAndSlice";
import { useState, useEffect } from "react";

const useGenerateOptions = (
  word: FormattedWord,
  randomWords: FormattedWord[],
  getValidWords: (
    randomWords: FormattedWord[], 
    word: FormattedWord, 
    count: number
  ) => FormattedWord[],
  count: number = 3
) => {
  const [options, setOptions] = useState<FormattedWord[]>([]);
  const [correctIndex, setCorrectIndex] = useState<number>(-1);

  useEffect(() => {
    const distractors = getValidWords(randomWords, word, count);
    const allOptions = [...distractors, word];
    const shuffled = shuffleAndSlice(allOptions, count + 1);

    setOptions(shuffled);
    setCorrectIndex(shuffled.findIndex(
      (w) => w.word === word.word)
    );
  }, [word, randomWords, count]);

  return { options, correctIndex };
};

export default useGenerateOptions;
