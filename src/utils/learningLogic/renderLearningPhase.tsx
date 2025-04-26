import { Typography } from "@mui/material";
import { FormattedWord } from "@/types/wordType";
import { isAudioTaskWithoutAudio } from "@/utils/learningLogic/audioTaskUtils";
import {
  Flashcard, ListenAndType, MeaningAndTypeWord,
  WordToMeaning, WordToAudio, AudioToWord,
} from "@/pages/learning/components/index";

export const renderLearningPhase = (
  word: FormattedWord,
  handleNext: (isCorrect?: boolean) => void
) => {
  if (!word) return <Typography variant="h6">Word not found</Typography>;

  const { repetitionCount, status } = word;
  const statusTitle = status?.toLowerCase();
  const isLimitedFlow = statusTitle === "to refresh";
  const skipPhases = [1, 2];

  if (isLimitedFlow && skipPhases.includes(repetitionCount)) {
    handleNext(true);
    return null;
  }

  if (isAudioTaskWithoutAudio(word)) {
    handleNext(true);
    return null;
  }

  switch (repetitionCount) {
    case 0:
      return (
        <Flashcard 
          word={word} 
          onNext={() => handleNext(true)} 
        />
      );
    case 1:
      return (
        <WordToAudio 
          word={word} 
          onNext={() => handleNext(true)} 
        />
      );
    case 2:
      return (
        <AudioToWord 
          word={word} 
          onNext={() => handleNext(true)} 
        />
      );
    case 3:
      return (
        <MeaningAndTypeWord 
          word={word} 
          onNext={() => handleNext(true)} 
        />
      );
    case 4:
      return (
        <ListenAndType 
          word={word} 
          onNext={() => handleNext(true)} 
        />
      );
    case 5:
      return (
        <WordToMeaning 
          word={word} 
          onNext={() => handleNext(true)} 
        />
      );
    default:
      return null;
  }
};
