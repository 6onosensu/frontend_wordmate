import { FormattedWord } from "@/types/wordType";

interface LearningBaseProps {
  word: FormattedWord;
  onNext: (isCorrect: boolean) => void;
}

interface WithPrevProps {
  onPrev: () => void;
}

export type FlashcardProps = LearningBaseProps & WithPrevProps;
export type ListenAndTypeProps = LearningBaseProps;
export type MeaningToWordProps = LearningBaseProps;
export type WordToAudioProps = LearningBaseProps;
export type AudioToWordProps = LearningBaseProps;
