import { Box } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WordSearch from "@/pages/dashboard/components/WordSearch/WordSearch";
import { LearningStages } from "@/pages/dashboard/components/LearningStages/LearningStages";
import { useAuth } from "@/context/AuthContext";
import EditUserSection from "./components/EditUserSection/EditUserSection";
import SettingsSection from "./components/SettingsSection";
import { useVisibility, VisibilityProvider } from "@/context/VisibilityContext";
import { UserProvider } from "@/context/UserContext";
import OverviewProfileSection from "./components/OverviewSection/OverviewProfileSection";

const Dashboard = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/");
  }, [navigate, token]);

  return (
    <VisibilityProvider>
      <ActualDashboard />
    </VisibilityProvider>
  );
};

const ActualDashboard = () => {
  const { isSettingsVisible, isEditUserVisible } = useVisibility();

  return (
    <Stack>
      <UserProvider>
        <Box>
          <OverviewProfileSection />
        </Box>

        {isEditUserVisible && (
          <Box>
            <EditUserSection />
          </Box>
        )}
      </UserProvider>

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
