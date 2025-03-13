import { Box } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OverviewProfileSection from "@/pages/dashboard/components/OverviewSection/OverviewProfileSection";
import WordSearch from "@/pages/dashboard/components/WordSearch/WordSearch";
import { LearningStages } from "@/pages/dashboard/components/LearningStages/LearningStages";
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
