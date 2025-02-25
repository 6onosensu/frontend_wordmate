import { Container, Typography, Box, TextField, Button, CircularProgress, FormControlLabel, Checkbox } from "@mui/material";
import { FormEvent, useState, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) navigate("/dashboard");
  }, [navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      if (rememberMe) {
        localStorage.setItem("token", data.token);
      } else {
        sessionStorage.setItem("token", data.token);
      }

      navigate("/dashboard");
    }
    catch (error: any) {
      setError(error.message);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Typography variant="h4">Welcome to WordMate!</Typography>
        <Typography variant="body1">Please log in to access your account.</Typography>
      </Box>
      <Box 
        sx={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "50px",
          boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <Typography variant="h3" gutterBottom>Login</Typography>

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField 
            label="Email" 
            type="email" 
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField 
            label="Password" 
            type="password" 
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            }
            label="Remember Me!"
            sx={{ mt: 1 }}
          />

          <Box sx={{ mt: 2, display: "flex", justifyContent: "center"}}>
            <CustomButton className="submit" type="submit" disabled={loading}>
              {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
              </CustomButton>
          </Box>
        </form>
        
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Button variant="text" onClick={() => navigate("/forgot-password")}>
            Forgot password?
          </Button>
          <Button variant="text" onClick={() => navigate("/register")}>
            Don't have an account? Sign up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;