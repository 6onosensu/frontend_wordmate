import { Button, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Container } from "@mui/system";
import { MeaningToWordProps } from "@/types/learningComponentsProps";

const MeaningToWord: FC<MeaningToWordProps> = ({ word, onNext }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    onNext(true);
  };

  return (
    <Container className="container-primary">
      <Typography variant="h6">What word matches this meaning?</Typography>
      <Typography variant="body1" fontStyle="italic">{word.definition}</Typography>

      <TextField
        label="Your Answer"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ width: "35%"}}
      />
      
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