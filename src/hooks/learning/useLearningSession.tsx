import { useAuth } from "@/context/AuthContext";
import AudioToWord from "@/pages/learning/components/AudioToWord";
import { Flashcard } from "@/pages/learning/components/Flashcard";
import ListenAndType from "@/pages/learning/components/ListenAndType";
import MeaningToWord from "@/pages/learning/components/MeaningToWord";
import WordToAudio from "@/pages/learning/components/WordToAudio";
import { FormattedWord } from "@/types/wordType";
import { isAudioTaskWithoutAudio } from "@/utils/learningLogic/audioTaskUtils";
import { moveToNextWordOrExit, updateRepetitionIfCorrect } from "@/utils/learningLogic/learningSession";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

const useLearningSession = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [words, setWords] = useState<FormattedWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state?.words?.length) {
      const shuffled = [
        ...location.state.words
      ].sort(
        () => Math.random() - 0.5
      );
      setWords(shuffled);
    }
  }, [location.state?.words])

  const currentWord = words[currentIndex];

  
  const handleExit = () => {
    if (window.confirm("Are you sure you want to exit?")) {
      navigate("/dashboard");
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  const handleNext = async (isCorrect?: boolean) => {
    if (!currentWord || words.length === 0) return;

    await updateRepetitionIfCorrect(
      Boolean(isCorrect),
      currentWord,
      currentIndex,
      words,
      token!,
      setWords
    );

    moveToNextWordOrExit(currentIndex, words, setCurrentIndex, navigate);
  };

  const renderPhase = () => {
    if (!currentWord) {
      return <Typography variant="h5">Word not found</Typography>;
    }

    if (isAudioTaskWithoutAudio(currentWord)) {
      handleNext(true);
      return null;
    }
  

    switch (currentWord.repetitionCount) {
      case 0:
        return (
          <Flashcard 
            word={currentWord} 
            onPrev={handlePrev}
            onNext={() => handleNext(true)} 
          />
        );
      case 1:
        return (
          <ListenAndType 
            word={currentWord}
            onNext={() => handleNext(true)}
          />
        );
      case 2:
        return (
          <MeaningToWord 
            word={currentWord}
            onNext={() => handleNext(true)}
          />
        );
      case 3:
        return (
          <WordToAudio 
            word={currentWord}
            onNext={() => handleNext(true)}
          />
        );
      case 4:
        return (
          <AudioToWord
            word={currentWord}
            onNext={() => handleNext(true)}
          />
        );
      default:
        return null;
    }
  };

  return {
    words, currentWord,
    handlePrev, handleNext, handleExit,
    content: renderPhase()
  };
}
export default useLearningSession;
