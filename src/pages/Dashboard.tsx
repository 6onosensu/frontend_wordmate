import { Box } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OverviewSection from "../components/dashboard/OverviewSection/OverviewSection";
import WordSearch from "../components/dashboard/WordSearch/WordSearch";


const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Stack sx={{alignContent: "center", }}>
      <Box>
        <OverviewSection />
      </Box>
      <Box>
        <WordSearch />
      </Box>
    </Stack>

  );
};

export default Dashboard;
