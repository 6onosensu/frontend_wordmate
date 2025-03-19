import { useSnackbar } from "@/context/SnackbarContext";
import { Button, List, ListItem, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { useState } from "react";
import { deleteUserAccount } from "@/services/authService";
import { useNavigate } from "react-router-dom";

const SettingsSection = () => {
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteAccount = async () => {
    if (!window.confirm("⚠️ WARNING: Deleting your account is irreversible!\n\n" +
      "This will permanently remove:\n" +
      "✔ Your account information\n" +
      "✔ All saved words & learning progress\n" +
      "✔ Any associated data\n\n" +
      "Are you sure you want to proceed?"
    )) {
      return;
    }

    setIsDeleting(true); 
    const res = await deleteUserAccount();

    showSnackbar(res.message, res.success ? "success" : "error");

    if (res.success) {
      setTimeout(() => {
        navigate("/"); 
      }, 2000);
    }
    setIsDeleting(false);
  };
  
  return (
    <Container className="container-primary">
      <Typography variant="h2">Settings</Typography>

      <Stack spacing={2} sx={{ mt: 4 }}>
        <Typography variant="body1" sx={{ mt: 2, color: "red", fontWeight: "bold" }}>
          ⚠️ Warning: Deleting your account is permanent.
        </Typography>
        <Box>
          <Typography variant="body1" sx={{ mt: 1 }}>
            This action will <strong>permanently erase all your data</strong>, including:
          </Typography>
          <List sx={{ pl: 2 }}> 
            <ListItem sx={{ display: "list-item", pl: 1 }}>
              <Typography variant="body2">✔ Your saved words and learning progress</Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 1 }}>
              <Typography variant="body2">✔ Your account details</Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 1 }}>
              <Typography variant="body2">✔ Any associated records</Typography>
            </ListItem>
          </List>
        </Box>
        
        <Button
          variant="text"
          onClick={handleDeleteAccount}
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Delete My Account"}
        </Button>
      </Stack>
    </Container>
  )
}
export default SettingsSection;