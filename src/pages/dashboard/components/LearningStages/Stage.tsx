import { Box, Button, CircularProgress, Container, Typography } from "@mui/material"
import { UserWordTable } from "./UserWordTable";
import { FC, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { formatUserWords } from "@/utils/format/formatUserWords";
import { useWords } from "@/context/WordContext";
import { getContainerWidth } from "@/utils/getContainerWidth";

interface StageProps {
  stageKey: string;
  title: string;
}

export const Stage: FC<StageProps> = ({ stageKey, title }) => {
  const navigate = useNavigate();
  const { words, refreshWords, loading } = useWords();
  
  useEffect(() => {
    refreshWords(stageKey);
  }, [stageKey]);

  const list = words?.[stageKey] || [];

  const formattedWords = useMemo(() => {
    return formatUserWords(list);
  }, [list]);

  const totalStagesWithWords = Object.values(words)
    .filter(w => w?.length > 0).length;
  const allLengths = Object.values(words)
    .map(list => list?.length || 0);
  const maxLength = Math.max(...allLengths);
  const containerWidth = getContainerWidth(
    formattedWords.length, 
    totalStagesWithWords,
    maxLength
  );

  return (
    <Container 
      className="container-primary"
      id={title} 
      sx={{
        height: "auto", 
        width: containerWidth,
        transition: "width 0.3s ease"
      }} 
    >
      <Box>
        <Typography variant="h3">{stageKey}</Typography>
      </Box>
      <Box>
        {loading ? (
          <Box px={5} py={5} >
            <CircularProgress />
          </Box>
        ) : formattedWords.length === 0 ? (
          <Box py={4} >
            <Typography variant="body2" align="center">
              No words to display!
            </Typography>
          </Box>
        ) : (
          <UserWordTable data={formattedWords} />
        )}
      </Box>
      
      <Box>
      {formattedWords.length === 0 ? (
        <></>
      ) : (
        <Button 
          variant="contained" 
          color="primary" 
          onClick={ () => navigate("/LearningPage", { 
            state: { words: formattedWords, title } 
        })}>
          {title}
        </Button>
      )}
      </Box>
    </Container>
  )
}