import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FormattedWord } from "@/types/wordType";
import { useLocation, useNavigate } from "react-router-dom";
import { Flashcard } from "./components/Flashcard";
import { useAuth } from "@/context/AuthContext";
import { updateUserWordRepetition } from "@/services/apiService";
import ListenAndType from "./components/ListenAndType";
import MeaningToWord from "./components/MeaningToWord";

const LearningController = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [words, setWords] = useState<FormattedWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const shuffleArray = (array: FormattedWord[]) => {
    return array.sort(() => Math.random() - 0.5)
  }
  
  useEffect(() => {
    if (location.state?.words?.length) {
      setWords(shuffleArray(location.state.words));
    }
  }, [location.state?.words])

  const currentWord = words[currentIndex];

  const handleNext = async (isCorrect?: boolean) => {
    if (!currentWord || words.length === 0) return;
    let updatedWords = [...words];

    if (isCorrect && token) {
      const updatedCount = currentWord.repetitionCount + 1;
      try {
        await updateUserWordRepetition(currentWord.id, updatedCount, token);
        console.log(`Updated repetitionCount to ${updatedCount}`);

        updatedWords[currentIndex] = { ...currentWord, repetitionCount: updatedCount };
        setWords(updatedWords);
      } catch (error) {
        console.error("Error updating repetitionCount:", error);
      }
    }
  
    if (currentIndex < words.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate("/dashboard");
    }
  }

  const handleExit = () => {
    if (window.confirm("Are you sure you want to exit?")) {
      navigate("/dashboard");
    }
  }

  const renderPhase = () => {
    if (!currentWord) {
      return <Typography variant="h5">Word not found</Typography>;
    }

    switch (currentWord.repetitionCount) {
      case 0:
        return <Flashcard word={currentWord} onNext={() => handleNext(true)} />;
      case 1:
        return <ListenAndType word={currentWord} />;
      case 2:
        return <MeaningToWord word={currentWord} />;
      default:
        return null;
    }
  };

  return (
    <Stack>
      <Typography variant="h4">Learning Sessions</Typography>
      {words.length === 0 ? (
        <>
          <Typography variant="body1">
            No words available for learning.
          </Typography>
          <Button 
            variant="contained" 
            onClick={handleExit}
          >
            Go Back
          </Button>
        </>
      ) : (
        <>
          {renderPhase()}

          <Button 
            variant="contained" 
            color="info" 
            onClick={handleExit}
            sx={{ mt: 2 }}
          >
            Exit
          </Button>
        </>
      )}
    </Stack>
  )
}

export default LearningController;