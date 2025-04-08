import { FormattedWord } from "@/types/wordType";
import { useRandomWords } from "@/context/RandomWordsContext";
import { useChoiceAnswer } from "@hooks/learning/logic/useChoiceAnswer";
import { getValidRandomWords } from "@/utils/random/getValidRandomWords";
import useGenerateOptions from "@/hooks/learning/options/useGenerateOptions";

const useAudioToWord = (
  word: FormattedWord,
  onNext: (isCorrect: boolean) => void
) => {
  const { randomWords } = useRandomWords();

  const { options, correctIndex } = useGenerateOptions(
    word, randomWords,
    getValidRandomWords, 3
  );

  const { 
    selectedIndex, disabled, handleChoice, 
  } = useChoiceAnswer(correctIndex, onNext);

  return {
    options, selectedIndex, correctIndex, disabled,
    handleSelect: handleChoice,
  };
};

export default useAudioToWord;
