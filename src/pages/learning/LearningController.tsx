import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FormattedWord } from "@/types/wordType";
import { useLocation, useNavigate } from "react-router-dom";
import { Flashcard } from "./components/Flashcard";

const LearningController = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const words: FormattedWord[] = location.state?.words || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const currentWord = words[currentIndex];
  const handleNext = () => {
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
        return <Flashcard word={currentWord} onNext={handleNext} />;
      case 1:
        return <Typography variant="body1">Next learning phase coming soon...</Typography>;
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
            onClick={() => navigate("/dashboard")}
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