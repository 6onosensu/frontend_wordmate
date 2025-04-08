import { FC } from "react";
import { Container, Typography, Button, Card } from "@mui/material";
import SvgButton from "@/components/common/SvgButton";
import SoundIcon from "@/assets/sound.svg";
import { playAudio } from "@/utils/audioUtils";
import { LearningBaseProps } from "@/types/learningComponentsProps";
import useAudioToWord from "@/hooks/learning/options/useAudioToWord";
import { getFeedbackColor } from "@/utils/getFeedbackColor";
import Grid from "@mui/system/Grid/Grid";

const AudioToWord: FC<LearningBaseProps> = ({ word, onNext }) => {
  const {
    options,
    selectedIndex,
    correctIndex,
    disabled,
    handleSelect,
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

      <Grid container spacing={3} sx={{ mx: 5, my: 3}}>
        {options.map((option, index) => (
          <Grid key={index} size={6}>
            <Card
              variant="outlined"
              key={index}
              sx={{ 
                backgroundColor: getFeedbackColor(
                  selectedIndex, 
                  correctIndex, 
                  index
                ),
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.6 : 1,
                }}
              onClick={() => !disabled && handleSelect(index)}
            >
              <Typography variant="h2">
                {option.word}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      
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

export default AudioToWord;