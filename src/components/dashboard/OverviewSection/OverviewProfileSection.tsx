import { Box, Button, Container} from "@mui/material"
import { logoutUser } from "@/services/authService";
import { useNavigate } from "react-router-dom";
import LearningStatistics from "./LearningStatistics";
import LearningGoals from "./LearningGoals";
import UserInfo from "./UserInfo";

const OverviewProfileSection = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      element.classList.add("highlight");
      setTimeout(() => {
        element.classList.remove("highlight");
      }, 8000);
    }
  };

  return (
    <Container className="container-secondary">
      <Box>
        <UserInfo />
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={handleLogout} 
          sx={{ margin: "4vh 0 0 0 ", }}
        >
          Logout
        </Button>
      </Box>
      <LearningGoals />
      <Box>
        <LearningStatistics />
        <Button 
          variant="contained" 
          color="info" 
          onClick={() => handleNavigate("Explore!")}
        >
          Learn!
        </Button>
        <Button 
          variant="contained" 
          color="info" 
          onClick={() => handleNavigate("Refresh!")}
        >
          Repeat!
        </Button>
        <Button 
          variant="contained" 
          color="info" 
          onClick={() => handleNavigate("Review!")}
        >
          Review!!
        </Button>
      </Box>

    </Container>
  )
}

export default OverviewProfileSection;