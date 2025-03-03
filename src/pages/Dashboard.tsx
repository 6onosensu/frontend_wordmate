import { Box } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OverviewProfileSection from "../components/dashboard/OverviewSection/OverviewProfileSection";
import WordSearch from "../components/dashboard/WordSearch/WordSearch";
import { LearningStages } from "../components/dashboard/LearningStages/LearningStages";


const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Stack>
      <Box>
        <OverviewProfileSection />
      </Box>
      <Box>
        <WordSearch />
      </Box>
      <Box>
        <LearningStages />
      </Box>
    </Stack>
  );
};

export default Dashboard;
