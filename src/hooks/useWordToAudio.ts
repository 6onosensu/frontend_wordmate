import { FormattedWord } from "@/types/wordType";
import { useChoiceAnswer } from "./useChoiceAnswer";
import { useRandomWords } from "@/context/RandomWordsContext";
import { getValidRandomAudio } from "@/utils/random/getValidRandomAudio";
import useGenerateOptions from "./useGenerateOptions";

const useWordToAudio = (
  word: FormattedWord,
  onNext: (isCorrect: boolean) => void
) => {
  const { randomWords } = useRandomWords();

  const { 
    options, 
    correctIndex 
  } = useGenerateOptions( 
    word, randomWords,
    getValidRandomAudio, 3
  );
  
  const { 
    selectedIndex, 
    handleChoice 
  } = useChoiceAnswer(correctIndex, onNext);

  return {
    options,
    handleSelect: handleChoice,
    selectedIndex
  };
};

export default useWordToAudio;
