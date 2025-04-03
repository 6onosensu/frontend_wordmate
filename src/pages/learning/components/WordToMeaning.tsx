
import useWordToMeaning from "@/hooks/learning/useWordToMeaning";
import { LearningBaseProps } from "@/types/learningComponentsProps";
import { getFeedbackColor } from "@/utils/getFeedbackColor";
import { Typography, Button, Card } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { FC } from "react";

const WordToMeaning: FC<LearningBaseProps> = ({ word, onNext }) => {
  const {
    options,
    selectedIndex,
    correctIndex,
    handleSelect,
    resetChoice,
  } = useWordToMeaning(word, onNext);

  return (
    <Container className="container-primary">
      <Typography variant="h6">What word matches this word?</Typography>
      <Typography variant="h2">{word.word}</Typography>

      <Stack spacing={2} mt={3}>
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
            <Typography variant="body2">
              {option.definition}
            </Typography>
          </Card>
        ))}
      </Stack>
      
      <Button 
        variant="contained" 
        color="primary"
        onClick={resetChoice}
      >
        Submit
      </Button>
    </Container>
  );
}
export default WordToMeaning;