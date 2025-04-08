
import useWordToMeaning from "@/hooks/learning/options/useWordToMeaning";
import { LearningBaseProps } from "@/types/learningComponentsProps";
import { getFeedbackColor } from "@/utils/getFeedbackColor";
import { Typography, Button, Card } from "@mui/material";
import { Container, Grid} from "@mui/system";
import { FC } from "react";

const WordToMeaning: FC<LearningBaseProps> = ({ word, onNext }) => {
  const {
    options,
    selectedIndex,
    correctIndex,
    disabled,
    handleSelect,
  } = useWordToMeaning(word, onNext);

  return (
    <Container className="container-primary">
      <Typography variant="h6">What word matches this word?</Typography>
      <Typography variant="h2">{word.word}</Typography>

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
              <Typography variant="body1">
                {option.definition}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Button 
        variant="contained" 
        color="secondary"
        onClick={() => onNext(false)}
      >
        Skip
      </Button>
    </Container>
  );
}
export default WordToMeaning;