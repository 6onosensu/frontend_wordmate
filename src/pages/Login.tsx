import { Container, Typography, Box, TextField, Button} from "@mui/material";
import { FormEvent, useState } from "react";
import CustomButton from "../components/CustomButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Login successful:", data);
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    }
    catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box 
        sx={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "50px",
          boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth: "400px"
        }}
      >
        <Typography 
          variant="h3"
          gutterBottom
        >Login</Typography>

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
          <Box sx={{ mt: 2, display: "flex", justifyContent: "center"}}>
            <CustomButton className="submit" type="submit">Login</CustomButton>
          </Box>
        </form>
        
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Button variant="text" href="/forgot-password">
            Forgot password?
          </Button>
          <Button variant="text" href="/register">
            Don't have an account? Sign up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default Login;