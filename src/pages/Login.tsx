import { Typography, Box, TextField, Button, CircularProgress, FormControlLabel, Checkbox } from "@mui/material";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { loginUser } from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = await loginUser(email, password);
      console.log("Token received:", token);
      login(token, rememberMe);
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
    <Box maxWidth="xs" sx={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    }}>
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
            <Button variant="contained" color="primary" type="submit" disabled={loading}>
              {loading ? <CircularProgress size={24} color="secondary" /> : "Login"}
            </Button>
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
    </Box>
  );
};

export default Login;