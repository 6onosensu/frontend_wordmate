import { Box } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OverviewProfileSection from "@/pages/dashboard/components/OverviewSection/OverviewProfileSection";
import WordSearch from "@/pages/dashboard/components/WordSearch/WordSearch";
import { LearningStages } from "@/pages/dashboard/components/LearningStages/LearningStages";
import { useAuth } from "@/context/AuthContext";
import EditUserSection from "./components/EditUserSection";
import SettingsSection from "./components/SettingsSection";
import { useVisibility } from "@/context/VisibilityContext";

const Dashboard = () => {
  const { isSettingsVisible, isEditUserVisible } = useVisibility()
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

      {isEditUserVisible && (
        <Box>
          <EditUserSection />
        </Box>
      )}

      {isSettingsVisible && (
        <Box>
          <SettingsSection />
        </Box>
      )}
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
