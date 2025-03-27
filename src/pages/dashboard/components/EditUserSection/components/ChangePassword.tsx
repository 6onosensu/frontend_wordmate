import { Button } from "@mui/material";
import PasswordField from "@/components/common/PasswordField";

interface ChangePasswordProps {
  newPassword: string;
  confirmPassword: string;
  setNewPassword: (v: string) => void;
  setConfirmPassword: (v: string) => void;
  onSubmit: () => void;
}

const ChangePassword = ({ 
  newPassword,
  confirmPassword,
  setNewPassword,
  setConfirmPassword,
  onSubmit
 }: ChangePasswordProps) => (
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
      value={confirmPassword} 
      onChange={
        (e) => setConfirmPassword(e.target.value)
      }
    />
    <Button 
      variant="contained" 
      color="secondary" 
      onClick={onSubmit}
    >
      Update Password
    </Button>
  </>
);
export default ChangePassword;