import useLearningSession from "@/hooks/learning/useLearningSession";
import { Button, Stack, Typography } from "@mui/material";

const LearningSession = () => {
  const { words, content, handleExit } = useLearningSession();

  return (
    <Stack>
      <Typography variant="h4">Learning Sessions</Typography>
      {words.length === 0 ? (
        <>
          <Typography variant="body1">
            No words available for learning.
          </Typography>
          <Button 
            variant="contained" 
            onClick={handleExit}
          >
            Go Back
          </Button>
        </>
      ) : (
        <>
          {content}

          <Button 
            variant="contained" 
            color="info" 
            onClick={handleExit}
            sx={{ mt: 2 }}
          >
            Exit
          </Button>
        </>
      )}
    </Stack>
  )
}

export default LearningSession;