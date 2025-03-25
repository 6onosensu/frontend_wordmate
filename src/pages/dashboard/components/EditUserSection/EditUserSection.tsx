import { Button, Typography } from "@mui/material";
import { Container, Grid, Stack } from "@mui/system";
import ChangePassword from "./components/ChangePassword";
import ChangeEmail from "./components/ChangeEmail";
import ChangePersonalInfo from "./components/ChangePersonalInfo";
import { useState } from "react";
import CollapseButton from "@/components/common/CollapseButton";
import { useVisibility } from "@/context/VisibilityContext";

export interface ChangeProps {
  onSuccess: () => void;
}

const EditUserSection = () => {
  const { setIsEditUserVisible } = useVisibility();
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showChangeEmail, setShowChangeEmail] = useState(false);
  const [showChangePersonalInfo, setShowChangePersonalInfo] = useState(false);

  const handleProfileUpdateSuccess = () => {
    setShowChangePersonalInfo(false);
  };

  const handlePasswordChangeSuccess = () => {
    setShowChangePassword(false);
  };

  const handleEmailChangeSuccess = () => {
    setShowChangeEmail(false);
  };

  return (
    <Container className="container-primary" id="edit-user-section">
      <CollapseButton onClick={() => setIsEditUserVisible(false)} />
      <Typography variant="h2">Account Update</Typography>

      <Grid 
        container 
        spacing={5} 
        sx={{ mx: 0, my: 2, justifyContent: "center" }} 
      >
        <Grid>
          <Stack spacing={2} sx={{ width: "300px" }}>
            <Typography variant="h4">Change Personal Info</Typography>
            {!showChangePersonalInfo ? (
              <Button 
                variant="text" 
                onClick={() => setShowChangePersonalInfo(true)}
                fullWidth
              >
                Change
              </Button>
            ) : (
              <ChangePersonalInfo onSuccess={handleProfileUpdateSuccess} />
            )}
          </Stack>
        </Grid>

        <Grid>
          <Stack spacing={2} sx={{ width: "300px" }}>
            <Typography variant="h4">Change Password</Typography>
            {!showChangePassword ? (
              <Button 
                variant="text" 
                onClick={() => setShowChangePassword(true)}
                fullWidth
              >
                Change
              </Button>
            ) : (
              <ChangePassword onSuccess={handlePasswordChangeSuccess} />
            )}
          </Stack>
        </Grid>

        <Grid>
          <Stack spacing={2} sx={{ width: "300px" }}>
            <Typography variant="h4">Change Email</Typography>
            {!showChangeEmail ? (
              <Button 
                variant="text" 
                onClick={() => setShowChangeEmail(true)}
                fullWidth
              >
                Change
              </Button>
            ) : (
              <>
                <ChangeEmail onSuccess={handleEmailChangeSuccess} />
                <Typography variant="body2">
                  If you change your email, you will need to use the new email for future logins.
                </Typography>
              </>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}
export default EditUserSection;