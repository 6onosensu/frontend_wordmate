import { FC } from "react";
import { Container, Typography, Button, Stack, Card } from "@mui/material";
import SvgButton from "@/components/common/SvgButton";
import SoundIcon from "@/assets/sound.svg";
import { LearningBaseProps } from "@/types/learningComponentsProps";
import { playAudio } from "@/utils/audioUtils";
import useWordToAudio from "@/hooks/learning/useWordToAudio";

const WordToAudio: FC<LearningBaseProps> = ({ word, onNext }) => {
  const { options, handleSelect } = useWordToAudio(word, onNext);

  return (
    <Container className="container-primary">
      <Typography variant="h6">
        Which audio matches the word below?
      </Typography>

      <Typography variant="h2">
        {word.word}
      </Typography>

      <Stack spacing={2} direction={"row"} mt={3}>
        {options.map((option, index) => (
          <Card
            key={index}
            sx={{ px: 2, py: 1.5 }}
          >
            <SvgButton
              iconSrc={SoundIcon}
              altText={`Option ${index + 1}`}
              onClick={() => {
                if (option.audio) {
                  playAudio(option.audio);
                }
              }}
            />
            <Button 
              variant="contained"
              color="primary"
              onClick={() => handleSelect(index)}
            >
              This one!
            </Button>
          </Card>
        ))}
      </Stack>

      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 5 }}
        onClick={() => onNext(false)}
      >
        Skip
      </Button>
    </Container>
  );
};

export default WordToAudio;
