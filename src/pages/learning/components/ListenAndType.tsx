import SvgButton from "@/components/common/SvgButton";
import { FormattedWord } from "@/types/wordType";
import { playAudio } from "@/utils/audioUtils";
import { Button, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import Sound from "@assets/sound.svg";
import { Container } from "@mui/system";

interface ListenAndTypeProps {
  word: FormattedWord;
}

const ListenAndType: FC<ListenAndTypeProps> = ({ word }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
  };

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

export default ListenAndType;