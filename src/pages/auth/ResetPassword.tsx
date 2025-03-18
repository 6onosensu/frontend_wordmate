import CustomSnackbar from "@/components/common/CustomSnackbar";
import { Button, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useState } from "react";

const ResetPassword = () => {
  const [snackbar, setSnackbar] = useState({ 
    open: false, 
    message: "", 
    severity: "info" as "success" | "error" | "info" | "warning" 
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
  
  };

  return (
    <Stack>
      <Container className="container-primary">
        <Typography variant="h2">Reset Password</Typography>
        <Typography variant="body1">Enter a new password for your account.</Typography>

        <TextField 
          label="Email that you have send"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField 
          label="New Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
        />
        
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Reset Password
        </Button>
      </Container>
      <CustomSnackbar 
        open={snackbar.open} 
        message={snackbar.message} 
        severity={snackbar.severity} 
        onClose={() => setSnackbar({ ...snackbar, open: false })} 
      />
    </Stack>
  )
}
export default ResetPassword;