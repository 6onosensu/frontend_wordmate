import { Box, Button, Container, Grid2 } from "@mui/material";

import LearningStatistics from "./LearningStatistics";
import LearningGoals from "./LearningGoals";
import UserInfo from "./UserInfo";
import Options from "@/components/common/Options";
import { useNavigate } from "react-router-dom";
import { handleNavigate } from "@/utils/scrollUtils"; 

const OverviewProfileSection = () => {
  const navigate = useNavigate();
  return (
    <Container className="container-primary">
      <Box px={1.1}>
      <Grid2 
        container 
        spacing={3}
      >
        <Grid2 size={3.6}>
          <UserInfo />
        </Grid2>

        <Grid2 size={3.5}>
          <LearningGoals />
        </Grid2>

        <Grid2 size={4.8}>
          <LearningStatistics />
        </Grid2>

        <Grid2 size={7.15}>
          <Options />
        </Grid2>

        <Grid2 size={4.8}>
          <Button 
            variant="contained" 
            color="info" 
            onClick={() => handleNavigate("Explore!", "/dashboard", navigate)}
          >
            Learn!
          </Button>
          <Button 
            variant="contained" 
            color="info" 
            onClick={() => handleNavigate("Refresh!", "/dashboard", navigate)}
          >
            Repeat!
          </Button>
          <Button 
            variant="contained" 
            color="info" 
            onClick={() => handleNavigate("Review!", "/dashboard", navigate)}
          >
            Review!!
          </Button>
        </Grid2>
      </Grid2>
      </Box>
    </Container>
  )
}

export default OverviewProfileSection;