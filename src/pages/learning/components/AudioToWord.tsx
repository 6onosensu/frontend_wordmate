import { FC } from "react";
import { Container, Typography, Button, Stack, Card } from "@mui/material";
import SvgButton from "@/components/common/SvgButton";
import SoundIcon from "@/assets/sound.svg";
import { playAudio } from "@/utils/audioUtils";
import { AudioToWordProps } from "@/types/learningComponentsProps";
import useAudioToWord from "@/hooks/learning/useAudioToWord";
import { getFeedbackColor } from "@/utils/getFeedbackColor";

const AudioToWord: FC<AudioToWordProps> = ({ word, onNext }) => {
  const {
    options,
    selectedIndex,
    correctIndex,
    handleSelect,
    resetChoice,
  } = useAudioToWord(word, onNext);

  return (
    <Container className="container-primary">
      <Typography variant="h6">
        Which word matches the audio below?
      </Typography>

      <SvgButton
        iconSrc={SoundIcon}
        altText={"Play Audio"}
        onClick={() => { playAudio(word.audio) }}
      />

      <Stack spacing={2} direction={"row"} mt={3}>
        {options.map((option, index) => (
            <Card
              key={index}
              sx={{ 
                px: 8, 
                py: 1.5, 
                width: "100%",
                backgroundColor: getFeedbackColor(
                  selectedIndex, 
                  correctIndex, 
                  index
                ),
                cursor: "pointer",
                transition: "0.3s",
               }}
              onClick={() => handleSelect(index)}
            >
              <Typography variant="h2">
                {option.word}
              </Typography>
            </Card>
        ))}
      </Stack>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 5 }}
          onClick={resetChoice}
        >
          Skip
        </Button>
    </Container>
  );
};

export default AudioToWord;
