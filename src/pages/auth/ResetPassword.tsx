import PasswordField from "@/components/common/PasswordField";
import { useSnackbar } from "@/context/SnackbarContext";
import { resetUserPassword } from "@/services/authService";
import { Button, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const { showSnackbar } = useSnackbar();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const handleSubmit = async () => {
    if (!token) {
      showSnackbar(
        "Invalid or missing reset token.", 
        "error"
      );
      return;
    }

    if (!password || !confirmPassword) {
      showSnackbar(
        "All fields are required!", 
        "error"
      );
      return;
    }
    
    if (password !== confirmPassword) {
      showSnackbar(
        "Passwords do not match!", 
        "error"
      );
      return;
    }

    const res = await resetUserPassword(token, password);

    showSnackbar(
      res.message, 
      res.success ? "success" : "error"
    );

    if (res.success) {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <Stack>
      <Container className="container-primary">
        <Typography variant="h2">Reset Password</Typography>
        <Typography variant="body1">Enter a new password for your account.</Typography>
        
        <PasswordField 
          label={"New Password"} 
          value={password}
          onChange={
            (e) => setPassword(e.target.value)
          }
        />
        <PasswordField 
          label={"Confirm New Password"} 
          value={confirmPassword} 
          onChange={
            (e) => setConfirmPassword(e.target.value)
          }
        />
        
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Reset Password
        </Button>
      </Container>
    </Stack>
  )
}
export default ResetPassword;