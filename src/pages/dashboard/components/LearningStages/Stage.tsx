import { Box, Button, Container, Typography } from "@mui/material"
import { UserWordTable } from "./UserWordTable";
import { FC, useEffect, useMemo } from "react";
import { useWords } from "@/context/WordContext";
import { useNavigate } from "react-router-dom";
import { formatUserWords } from "@/utils/formatUserWords";

interface StageProps {
  stage: string;
  title: string;
}

export const Stage: FC<StageProps> = ({ stage, title }) => {
  const { words, loadWords } = useWords();
  const navigate = useNavigate();
  
  useEffect(() => {
    loadWords([stage]);
  }, [stage]);
  
  const formattedWords = useMemo(() => {
    return formatUserWords(words[stage] || []);
  }, [words, stage]);

  return (
    <Box sx={{ display: "flex" }}>
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
            onClick={
              () => navigate(
                "/LearningPage", 
                { 
                  state: { words: formattedWords, title } 
                }
              )
            }
          >
            {title}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}