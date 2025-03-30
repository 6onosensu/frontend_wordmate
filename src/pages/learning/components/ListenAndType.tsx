import SvgButton from "@/components/common/SvgButton";
import { playAudio } from "@/utils/audioUtils";
import { Button, TextField, Typography } from "@mui/material";
import { FC } from "react";
import Sound from "@assets/sound.svg";
import { Container } from "@mui/system";
import { ListenAndTypeProps } from "@/types/learningComponentsProps";
import useCheckInputAnswer from "@/hooks/useCheckInputAnswer";

const ListenAndType: FC<ListenAndTypeProps> = ({ word, onNext }) => {
  const {
    input,
    feedback,
    handleInputChange,
    handleSubmit
  } = useCheckInputAnswer(word, onNext);

  return (
    <Container className="container-primary">
      <Typography variant="h6">Listen and type the word you hear:</Typography>

      {word.audio && (
        <SvgButton 
          iconSrc={Sound} 
          altText={"Play Sound!"} 
          onClick={(e) => {
            e.stopPropagation(); 
            playAudio(word.audio!);
          }}
        />
      )}

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

export default ListenAndType;