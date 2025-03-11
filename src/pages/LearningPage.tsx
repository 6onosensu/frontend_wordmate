import { Button, Container, Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const LearningPage = () => {
  const location = useLocation();
  const words = location.state?.words || []; 

  const handleNextPhase = () => {
    
  }

  return (
    <Stack>
      <Container className="container-primary">
        <Typography variant="h2">Get to Know!</Typography>
        
        <Button
          variant="contained" 
          color="primary" 
          onClick={handleNextPhase}
        >
          Let's do it!
        </Button>
      </Container>
    </Stack>
  );
};

export default LearningPage;