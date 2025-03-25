import { Button } from "@mui/material";
import { FC, useState } from "react";
import { ChangeProps } from "../EditUserSection";
import { useSnackbar } from "@/context/SnackbarContext";
import { useAuth } from "@/context/AuthContext";
import { resetUserPassword } from "@/services/authService";
import PasswordField from "@/components/common/PasswordField";

const ChangePassword: FC<ChangeProps> = ({ onSuccess }) => {
  const { showSnackbar } = useSnackbar();
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const handleChangePassword = async () => {
    if (!token) {
      showSnackbar(
        "Invalid or missing reset token.", 
        "error"
      );
      return;
    }
    if (!newPassword || !confirmNewPassword) {
      showSnackbar(
        "All fields are required!", 
        "error"
      );
      return;
    }
    if (newPassword !== confirmNewPassword) {
      showSnackbar(
        "Passwords do not match!", 
        "error"
      );
      return;
    }
    setLoading(true);

    const res = await resetUserPassword(token, newPassword);

    showSnackbar(
      res.message, 
      res.success ? "success" : "error"
    );

    setLoading(false);
    onSuccess();
  };

  return (
    <>
      <PasswordField 
        label={"New Password"} 
        value={newPassword} 
        onChange={
          (e) => setNewPassword(e.target.value)
        }
      />
      <PasswordField 
        label={"Confirm New Password"} 
        value={confirmNewPassword} 
        onChange={
          (e) => setConfirmNewPassword(e.target.value)
        }
      />
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleChangePassword}
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Password"}
      </Button>
    </>
  )
}
export default ChangePassword;