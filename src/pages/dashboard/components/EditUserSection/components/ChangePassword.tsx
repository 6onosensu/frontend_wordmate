import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";

interface ChangePasswordProps {
  onSuccess: () => void;
}

const ChangePassword: FC<ChangePasswordProps> = ({ onSuccess }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async () => {
    if (!newPassword || newPassword !== confirmNewPassword) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  return (
    <>
      <TextField 
        label="New Password" 
        type="password" 
        value={newPassword} 
        onChange={(e) => setNewPassword(e.target.value)}
        fullWidth 
      />
      <TextField 
        label="Confirm New Password" 
        type="password" 
        value={confirmNewPassword} 
        onChange={(e) => setConfirmNewPassword(e.target.value)}
        fullWidth 
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