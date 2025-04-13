import { FC } from "react";
import { Container, Typography, Button, Card } from "@mui/material";
import SvgButton from "@/components/common/SvgButton";
import SoundIcon from "@/assets/sound.svg";
import { LearningBaseProps } from "@/types/learningComponentsProps";
import { playAudio } from "@/utils/audioUtils";
import useWordToAudio from "@/hooks/learning/options/useWordToAudio";
import { getFeedbackColor } from "@/utils/getFeedbackColor";
import { Grid } from "@mui/system";

const WordToAudio: FC<LearningBaseProps> = ({ word, onNext }) => {
  const { 
    options, 
    selectedIndex,
    correctIndex,
    disabled,
    handleSelect 
  } = useWordToAudio(word, onNext);

  return (
    <Container className="container-primary">
      <Typography variant="h6">
        Which audio matches the word below?
      </Typography>

      <Typography variant="h2">
        {word.word}
      </Typography>

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
              }}
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
                onClick={() => !disabled && handleSelect(index)}
              >
                This one!
              </Button>
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

export default WordToAudio;
