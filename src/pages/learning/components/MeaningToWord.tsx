import { Button, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { Container } from "@mui/system";
import { MeaningToWordProps } from "@/types/learningComponentsProps";
import useCheckInputAnswer from "@/hooks/useCheckInputAnswer";

const MeaningToWord: FC<MeaningToWordProps> = ({ word, onNext }) => {
  const { 
    input, 
    feedback, 
    handleInputChange, 
    handleSubmit 
  } = useCheckInputAnswer(word.word, onNext);

  return (
    <Container className="container-primary">
      <Typography variant="h6">What word matches this meaning?</Typography>
      <Typography variant="body1" fontStyle="italic">{word.definition}</Typography>

      <TextField
        label="Your Answer"
        value={input}
        onChange={handleInputChange}
        sx={{ width: "35%"}}
      />

      {feedback === "correct" && (
        <Typography variant="h6" color="success.main" sx={{ mt: 1 }}>
          Correct!
        </Typography>
      )}
      {feedback === "incorrect" && (
        <Typography variant="h6" color="error.main" sx={{ mt: 1 }}>
          Incorrect. Try again.
        </Typography>
      )}  
      
      <Button 
        variant="contained" 
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Container>
  );
};

export default MeaningToWord;