import { FormattedWord } from "@/types/wordType";
import { useChoiceAnswer } from "@hooks/learning/logic/useChoiceAnswer";
import { useRandomWords } from "@/context/RandomWordsContext";
import { getValidRandomAudio } from "@/utils/random/getValidRandomAudio";
import useGenerateOptions from "@/hooks/learning/options/useGenerateOptions";

const useWordToAudio = (
  word: FormattedWord,
  onNext: (isCorrect: boolean) => void
) => {
  const { randomWords } = useRandomWords();

  const { options, correctIndex } = useGenerateOptions( 
    word, randomWords,
    getValidRandomAudio, 3
  );
  
  const { 
    selectedIndex, disabled, handleChoice 
  } = useChoiceAnswer(correctIndex, onNext);

  return {
    options, selectedIndex, correctIndex, disabled,
    handleSelect: handleChoice,
  };
};

export default useWordToAudio;
