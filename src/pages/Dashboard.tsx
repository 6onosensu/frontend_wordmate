import { Box } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OverviewProfileSection from "@/components/dashboard/OverviewSection/OverviewProfileSection";
import WordSearch from "@/components/dashboard/WordSearch/WordSearch";
import { LearningStages } from "@/components/dashboard/LearningStages/LearningStages";
import { useAuth } from "@/context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate, token]);

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
