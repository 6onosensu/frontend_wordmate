import { useRandomWords } from "@/context/RandomWordsContext";
import { FormattedWord } from "@/types/wordType";
import { useChoiceAnswer } from "./logic/useChoiceAnswer";
import useGenerateOptions from "./logic/useGenerateOptions";
import getValidRandomMeaning from "@/utils/random/getValidRandomMeaning";

const useWordToMeaning = (
  word: FormattedWord,
  onNext: (isCorrect: boolean) => void
) => {
  const { randomWords } = useRandomWords();

  const { 
    options, 
    correctIndex 
  } = useGenerateOptions( 
    word, randomWords,
    getValidRandomMeaning, 3
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
}
export default useWordToMeaning;
