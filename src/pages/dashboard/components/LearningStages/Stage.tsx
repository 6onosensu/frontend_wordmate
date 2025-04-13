import { Box, Button, CircularProgress, Container, Typography } from "@mui/material"
import { UserWordTable } from "./UserWordTable";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useStageData } from "@/hooks/useStageData";

interface StageProps {
  stageKey: string;
  title: string;
}

export const Stage: FC<StageProps> = ({ stageKey, title }) => {
  const navigate = useNavigate();
  const { 
    formattedWords, 
    containerWidth, 
    loading 
  } = useStageData(stageKey);
  
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