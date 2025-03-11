import { Box, Button, Container, Typography } from "@mui/material"
import { UserWordTable } from "./UserWordTable";
import { FC, useEffect } from "react";
import { useWords } from "@/context/WordContext";
import { FormattedWord, UserWord } from "@/types/wordType";

interface StageProps {
  stage: string;
  title: string;
}

export const Stage: FC<StageProps> = ({ stage, title }) => {
  const { words, loadWords } = useWords();

  useEffect(() => {
    loadWords([stage]);
  }, [stage]);
  
 const formattedWords: FormattedWord[]  = (
  words[stage] || []).map((userWord: UserWord): FormattedWord => ({
    id: userWord.id,
    word: userWord.meaning.word.word ?? "Word is undefined",
    audio: userWord?.meaning.word.audio ?? null,
    definition: userWord.meaning.definition ?? "Definition is undefined",
    partOfSpeech: userWord.meaning.partOfSpeech.title ?? "Part of speech is undefined",
    synonyms: userWord?.meaning.synonyms ?? [],
    antonyms: userWord?.meaning.antonyms ?? [],
    example: userWord?.meaning.example ?? "No example available",
  }));

  const handleClick = () => {
    
  };

  return (
    <Container maxWidth="xs" id={title} className="container-primary">
      <Box>
        <Typography variant="h3">{stage}</Typography>
      </Box>
      <Box >
        <UserWordTable data={formattedWords} />
      </Box>
      <Box>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleClick}
        >
          {title}
        </Button>
      </Box>
    </Container>
  )
}