import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OverviewSection from "../components/dashboard/OverviewSection/OverviewSection";


const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Box maxWidth="xl" sx={{ 
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <Typography variant="h3">Dashboard</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Welcome to your dashboard! You are logged in.
      </Typography>
      <OverviewSection />
    </Box>
  );
};

export default Dashboard;
