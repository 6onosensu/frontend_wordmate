import { Button, IconButton, InputAdornment, TextField, Tooltip } from "@mui/material"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { FC, useState } from "react";

interface ChangeEmailProps {
  onSuccess: () => void;
}

const ChangeEmail: FC<ChangeEmailProps> = ({ onSuccess }) => {
  const [newEmail, setNewEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeEmail = () => {
    if (!newEmail) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  return (
    <>
      <TextField 
        label="New Email" 
        type="email" 
        value={newEmail} 
        onChange={(e) => setNewEmail(e.target.value)}
        fullWidth 
        autoComplete="email"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip 
                title="Email must be a unique!" 
                arrow
                placement="bottom-end"
              >
                <IconButton>
                  <InfoOutlinedIcon />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleChangeEmail}
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Email"}
      </Button>
    </>
  )
}
export default ChangeEmail;