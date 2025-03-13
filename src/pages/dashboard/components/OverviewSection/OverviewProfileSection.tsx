import { Box, Button, Container} from "@mui/material"
import { logoutUser } from "@/services/authService";
import { useNavigate } from "react-router-dom";
import LearningStatistics from "./LearningStatistics";
import LearningGoals from "./LearningGoals";
import UserInfo from "./UserInfo";

const style = {
  display: "flex", 
  flexDirection: "column", 
  alignItems: "flex-start", 
  justifyContent: "space-between", 
  width: "auto", 
  position: "relative",
  marginBottom: "0",
  paddingBottom: "0",
}

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
    <Container 
      className="container-secondary" 
      sx={{ paddingBottom: "3vh" }}
    >
      <Box sx={style}>
        <Box sx={{ width: "100%" }}>
          <UserInfo />
        </Box>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={handleLogout} 
          sx={{ 
            marginLeft: "0",
          }}
  
        >
          Logout
        </Button>
      </Box>

      <LearningGoals />

      <Box sx={style}>
        <Box sx={{ width: "100%" }}>
          <LearningStatistics />
        </Box>
        <Box
        sx={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "1vh",
          width: "100%", 
          marginTop: "10px",
        }}>
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
      </Box>
    </Container>
  )
}

export default OverviewProfileSection;