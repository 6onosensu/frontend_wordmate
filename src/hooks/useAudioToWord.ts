import { FormattedWord } from "@/types/wordType";
import { useRandomWords } from "@/context/RandomWordsContext";
import { useChoiceAnswer } from "./useChoiceAnswer";
import { getValidRandomWords } from "@/utils/random/getValidRandomWords";
import useGenerateOptions from "./useGenerateOptions";

const useAudioToWord = (
  word: FormattedWord,
  onNext: (isCorrect: boolean) => void
) => {
  const { randomWords } = useRandomWords();

  const { options, correctIndex } = useGenerateOptions(
    word,
    randomWords,
    getValidRandomWords,
    3
  );

  const { 
    selectedIndex, 
    handleChoice, 
    resetChoice 
  } = useChoiceAnswer(correctIndex, onNext);

  return {
    options,
    selectedIndex,
    correctIndex,
    handleSelect: handleChoice,
    resetChoice,
  };
};

export default useAudioToWord;
