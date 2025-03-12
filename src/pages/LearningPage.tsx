import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ReviewPhase } from "@/components/learningPage/ReviewPhase";
import { FormattedWord } from "@/types/wordType";

const LearningPage = () => {
  const location = useLocation();
  const title = location.state?.title;
  const words: FormattedWord[] = location.state?.words || [];
  const [showWords, setShowWords] = useState(true);

  const handleStartLearning = () => {
    setShowWords(false);
  };
  return (
    <Stack>
      <Typography variant="h2">Review Your Words:</Typography>
      <ReviewPhase showWords={showWords} words={words}/>
      
      <Button
        variant="contained" 
        color="primary" 
        onClick={handleStartLearning}
      >
        {title}
      </Button>
    </Stack>
  );
};

export default LearningPage;