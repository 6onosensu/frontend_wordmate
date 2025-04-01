import { useEffect, useState } from "react";
import { FormattedWord } from "@/types/wordType";
import { useChoiceAnswer } from "./useChoiceAnswer";
import { useRandomWords } from "@/context/RandomWordsContext";
import { getValidRandomAudio } from "@/utils/getValidRandomAudio";

const useWordToAudio = (
  word: FormattedWord,
  onNext: (isCorrect: boolean) => void
) => {
  const [options, setOptions] = useState<FormattedWord[]>([]);
  const [correctIndex, setCorrectIndex] = useState<number>(-1);
  const { randomWords } = useRandomWords();
  const { selectedIndex, handleChoice } = useChoiceAnswer(correctIndex, onNext);

  useEffect(() => {
    const distractors = getValidRandomAudio(randomWords, word);
    const all = [...distractors, word];
    const shuffled = all.sort(
      () => Math.random() - 0.5
    );
    setOptions(shuffled);
    setCorrectIndex(
      shuffled.findIndex(w => w.word === word.word)
    );
  }, [word]);

  return {
    options,
    handleSelect: handleChoice,
    selectedIndex
  };
};

export default useWordToAudio;
