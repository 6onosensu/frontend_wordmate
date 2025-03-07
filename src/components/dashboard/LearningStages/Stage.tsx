import { Box, Button, Container, Typography } from "@mui/material"
import { UserWordTable } from "./UserWordTable";
import { FC, useEffect } from "react";
import { useWords } from "@/context/WordContext";

interface StageProps {
  stage: string;
  title: string;
}

export const Stage: FC<StageProps> = ({ stage, title }) => {
  const { words, loadWords } = useWords();

  useEffect(() => {
    loadWords(stage);
  }, [stage]);
  const handleClick = () => {

  }

  return (
    <Container maxWidth="xs" className="container-primary">
      <Box>
        <Typography variant="h4">{stage}</Typography>
      </Box>
      <Box>
        <UserWordTable data={words[stage] || []}/>
      </Box>
      <Box>
        <Button variant="contained" color="primary" onClick={handleClick}>
          {title}
        </Button>
      </Box>
    </Container>
  )
}