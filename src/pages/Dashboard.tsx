import { Button, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";


const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3">Dashboard</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Welcome to your dashboard! You are logged in.
      </Typography>
      <CustomButton color="secondary" onClick={handleLogout}>
        Logout
      </CustomButton>
    </Container>
  );
};

export default Dashboard;
