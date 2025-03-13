import SvgButton from "@/components/common/SvgButton";
import { FormattedWord } from "@/types/wordType";
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import Sound from "@assets/sound.svg";
import { playAudio } from "@/utils/audioUtils";

interface FlashcardProps {
  word: FormattedWord;
  onNext: (isCorrect: boolean) => void;
}

export const Flashcard: FC<FlashcardProps> = ({ word, onNext }) => {
  const [flipped, setFlipped] = useState(false);

  const handleNextClick = () => {
    setFlipped(false);
    onNext(true);
  };

  return (
    <Stack sx={{ width: "800px" }}>
      <Typography variant="h6">
        Try to recall the word's meaning before flipping!
      </Typography>
      <Card
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
            <>
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
            </>
          )}
        </CardContent>
      </Card>
      
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleNextClick} 
      >
        Next
      </Button>
    </Stack>
  )
}