import { Box, Button, CircularProgress, Container, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import MyButton from "../components/CustomButton";
import { authUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await authUser(email, password, "register");
      navigate("/");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ textAlign: "center", mb: 2}}>
        <Typography variant="h4">Create an Account</Typography>
        <Typography variant="body1">Sign up to start using WordMate!</Typography>
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
        <Typography variant="h3" gutterBottom>Register</Typography>

        {error && (
          <Typography color="error" sx={{ mt: 2}}>
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
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
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
            <MyButton customVariant="primary" type="submit" disabled={loading}>
              {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
            </MyButton>
          </Box>
        </form>
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Button variant="text" onClick={() => navigate("/")}>
            Already have an account? Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;