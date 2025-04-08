import { FormattedWord } from "@/types/wordType";

export interface LearningBaseProps {
  word: FormattedWord;
  onNext: (isCorrect: boolean) => void;
}
