import { FC } from "react";
import { Container, Typography, Button, Stack, Card } from "@mui/material";
import SvgButton from "@/components/common/SvgButton";
import SoundIcon from "@/assets/sound.svg";
import { WordToAudioProps } from "@/types/learningComponentsProps";

const WordToAudio: FC<WordToAudioProps> = ({ word, onNext }) => {
  
  return (
    <Container className="container-primary">
      <Typography variant="h6">
        Which audio matches the word below?
      </Typography>

      <Typography variant="h3">
        {word.word}
      </Typography>

      <Stack spacing={2} direction={"row"}>
        {[0, 1, 2, 3].map((_, index) => (
          <Card 
            key={index} 
            sx={{ px: 2, py: 1.5 }}
          >
            <SvgButton 
              iconSrc={SoundIcon} 
              altText={`Option ${index + 1}`} 
              onClick={() => {}} 
            />
          </Card>
        ))}
      </Stack>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => onNext(false)}
      >
        Skip
      </Button>
    </Container>
  );
};

export default WordToAudio;
