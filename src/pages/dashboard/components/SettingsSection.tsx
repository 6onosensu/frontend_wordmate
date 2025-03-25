import { useSnackbar } from "@/context/SnackbarContext";
import { Button,  Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { useState } from "react";
import { deleteUserAccount } from "@/services/authService";
import { useNavigate } from "react-router-dom";
import CollapseButton from "@/components/common/CollapseButton";
import { useVisibility } from "@/context/VisibilityContext";

const SettingsSection = () => {
  const { setIsSettingsVisible } = useVisibility();
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const warningText = "⚠️ Warning: Deleting your account is permanent.";
  const infoText = "This action will permanently erase all your data!";

  const handleDeleteAccount = async () => {
    if (!window.confirm(`
      ${warningText}
      ${infoText}\n
      Are you sure you want to proceed?
    `)) return;

    setIsDeleting(true); 
    const res = await deleteUserAccount();
    showSnackbar(
      res.message, 
      res.success ? "success" : "error"
    );

    if (res.success) {
      setTimeout(() => {
        navigate("/"); 
      }, 2000);
    }
    setIsDeleting(false);
  };
  
  return (
    <Container className="container-primary" id="settings-section">
      <CollapseButton onClick={() => setIsSettingsVisible(false)} />
      <Typography variant="h2">Settings</Typography>

      <Stack spacing={3} sx={{ my: 3, width: "100%" }}>
        <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center" 
          width="100%"
        >
          <Box flex={1} px={4}>
            <Typography variant="h6" sx={{ 
              mt: 2, 
              color: "red", 
              fontWeight: "bold" 
            }}>
              {warningText}
            </Typography>
            <Typography sx={{ my: 1 }}>
              {infoText} Including:
            </Typography>
            <Typography>
              ✔ Your saved words and learning progress
            </Typography>
            <Typography>
              ✔ Your account details
            </Typography>
            <Typography>
              ✔ Any associated records
            </Typography>
          </Box>
        
          <Button
            variant="text"
            onClick={handleDeleteAccount}
            disabled={isDeleting}
            sx={{ whiteSpace: "nowrap" }}
          >
            {isDeleting ? "Deleting..." : "Delete My Account"}
          </Button>
        </Box>
      </Stack>
    </Container>
  )
}
export default SettingsSection;