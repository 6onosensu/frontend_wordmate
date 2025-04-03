import { Flashcard } from "@/pages/learning/components/Flashcard";
import ListenAndType from "@/pages/learning/components/ListenAndType";
import MeaningToWord from "@/pages/learning/components/MeaningToWord";
import WordToAudio from "@/pages/learning/components/WordToAudio";
import AudioToWord from "@/pages/learning/components/AudioToWord";
import { Typography } from "@mui/material";
import { FormattedWord } from "@/types/wordType";
import { isAudioTaskWithoutAudio } from "@/utils/learningLogic/audioTaskUtils";

export const renderLearningPhase = (
  word: FormattedWord | undefined,
  handlePrev: () => void,
  handleNext: (isCorrect?: boolean) => void
) => {
  if (!word) {
    return <Typography variant="h5">Word not found</Typography>;
  }

  if (isAudioTaskWithoutAudio(word)) {
    handleNext(true);
    return null;
  }

  switch (word.repetitionCount) {
    case 0:
      return (
        <Flashcard 
          word={word} 
          onPrev={handlePrev} 
          onNext={() => handleNext(true)} 
        />
      );
    case 1:
      return (
        <ListenAndType 
          word={word} 
          onNext={() => handleNext(true)} 
        />
      );
    case 2:
      return (
        <MeaningToWord 
          word={word} 
          onNext={() => handleNext(true)} 
        />
      );
    case 3:
      return (
        <WordToAudio 
          word={word} 
          onNext={() => handleNext(true)} 
        />
      );
    case 4:
      return (
        <AudioToWord 
          word={word} 
          onNext={() => handleNext(true)} 
        />
      );
    default:
      return null;
  }
};
