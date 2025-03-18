import { useState } from "react";
import { Container, Typography, TextField, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "@/services/authService";
import { useSnackbar } from "@/context/SnackbarContext";

const ForgotPassword = () => {
  const { showSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email) {
      showSnackbar("Please enter your email address.", "error");
      return;
    }

    try {
      const message = await sendPasswordResetEmail(email); 
      showSnackbar(message, "success");
    } catch (error: any) {
      showSnackbar(error.message, "error");
    }
  };

  return (
    <Stack>
      <Container className="container-primary">
        <Typography variant="h2">Forgot Password</Typography>
        <Typography variant="body1">Enter your email, and we'll send you a link to reset your password.</Typography>

        <TextField 
          label="Email Address" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          fullWidth 
        />

        <Stack spacing={2} direction="row" justifyContent="center">
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSubmit}
          >
            Send Reset Link
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => navigate("/login")}
          >
            Back to Login
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};

export default ForgotPassword;
