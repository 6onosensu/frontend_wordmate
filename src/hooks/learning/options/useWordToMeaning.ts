import { useRandomWords } from "@/context/RandomWordsContext";
import { FormattedWord } from "@/types/wordType";
import { useChoiceAnswer } from "../logic/useChoiceAnswer";
import useGenerateOptions from "./useGenerateOptions";
import getValidRandomMeaning from "@/utils/random/getValidRandomMeaning";

const useWordToMeaning = (
  word: FormattedWord,
  onNext: (isCorrect: boolean) => void
) => {
  const { randomWords } = useRandomWords();

  const { options, correctIndex } = useGenerateOptions( 
    word, randomWords,
    getValidRandomMeaning, 3
  );
  
  const { 
    selectedIndex, disabled, handleChoice,
  } = useChoiceAnswer(correctIndex, onNext);

  return {
    options, selectedIndex, correctIndex, disabled,
    handleSelect: handleChoice,
  }; 
}
export default useWordToMeaning;
