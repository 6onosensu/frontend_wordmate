import { Container, Typography, Box, TextField} from "@mui/material";
import { FormEvent, useState } from "react";
import CustomButton from "../components/CustomButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <Container>
      <Box 
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography 
          variant="h3"
          gutterBottom
        >
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "50%" }}>
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
      </Box>
    </Container>
  );
};
export default Login;