import { useAuth } from "@/context/AuthContext";
import { FormattedWord } from "@/types/wordType";
import { moveToNextWordOrExit } from "@/utils/learningLogic/moveToNextWordOrExit";
import { renderLearningPhase } from "@/utils/learningLogic/renderLearningPhase";
import { updateRepetitionIfCorrect } from "@/utils/learningLogic/updateRepetitionIfCorrect";
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

  return {
    words,
    currentWord,
    handlePrev,
    handleNext,
    handleExit,
    content: renderLearningPhase(currentWord, handlePrev, handleNext)
  };
}
export default useLearningSession;
