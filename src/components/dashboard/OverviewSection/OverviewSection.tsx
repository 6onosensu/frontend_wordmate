import { Box, Button, Container } from "@mui/material"
import { logoutUser } from "../../../services/authService"
import { useNavigate } from "react-router-dom";
import LearningStatictics from "./LearningStatistics";
import LearningGoals from "./LearningGoals";
import UserInfo from "./UserInfo";

const OverviewSection = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <Container>
      <UserInfo />
        <LearningGoals />
        <LearningStatictics />

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Button variant="contained" color="secondary">Edit Profile</Button>
          <Button variant="contained" color="secondary">Settings</Button>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
    </Container>
  )
}

export default OverviewSection;