import { useState } from "react";
import { Container, Typography, TextField, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomSnackbar from "@/components/common/CustomSnackbar";
import { sendPasswordResetEmail } from "@/services/authService";

const ForgotPassword = () => {
  const [snackbar, setSnackbar] = useState({ 
    open: false, 
    message: "", 
    severity: "info" as "success" | "error" | "info" | "warning" 
  });
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const showSnackbar = (message: string, severity: "success" | "error") => {
    setSnackbar({ open: true, message, severity });
  };

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
      <CustomSnackbar 
        open={snackbar.open} 
        message={snackbar.message} 
        severity={snackbar.severity} 
        onClose={() => setSnackbar({ ...snackbar, open: false })} 
      />
    </Stack>
  );
};

export default ForgotPassword;
