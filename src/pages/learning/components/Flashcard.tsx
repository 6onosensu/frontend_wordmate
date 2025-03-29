import SvgButton from "@/components/common/SvgButton";
import { FormattedWord } from "@/types/wordType";
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import Sound from "@assets/sound.svg";
import { playAudio } from "@/utils/audioUtils";

interface FlashcardProps {
  word: FormattedWord;
  onNext: (isCorrect: boolean) => void;
  onPrev: () => void;
}

export const Flashcard: FC<FlashcardProps> = ({ word, onNext, onPrev }) => {
  const [flipped, setFlipped] = useState(false);

  const handleNextClick = () => {
    setFlipped(false);
    onNext(true);
  };

  const handlePrevClick = () => {
    setFlipped(false);
    onPrev();
  }

  return (
    <Stack>
      <Typography variant="h6">
        Try to recall the word's meaning before flipping!
      </Typography>
      <Card
        sx={{ 
          width: "100vh", height: "60vh",
          px: 10, py: 5, m: 5, 
          textAlign: "center" 
        }}
        onClick={() => setFlipped(!flipped)}
      >
        <CardContent>
          {flipped ? (
            <Box>
              <Typography variant="h5">
                {word.definition}
              </Typography>
              <Typography variant="body1">
                {word.partOfSpeech}
              </Typography>
              {word.example && 
                <Typography variant="body2">
                  <strong>Example: </strong>
                  {word.example}
                </Typography>}
            </Box>
          ) : (
            <Box>
              <Typography variant="h3">
                {word.word}
              </Typography>
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
            </Box>
          )}
        </CardContent>
      </Card>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={handlePrevClick} 
        >
          Back
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleNextClick} 
        >
          Next
        </Button>
      </Stack>
    </Stack>
  )
}