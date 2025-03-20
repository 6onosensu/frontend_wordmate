import { Tooltip, Button, TextField, Typography, InputAdornment, IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState } from "react";

const ChangePersonalInfo = () => {
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const handleProfileUpdate = () => {
  };


  return (
    <Stack spacing={2} sx={{ width: "300px" }}>
      <Typography variant="h4">Change Personal Info</Typography>
      <TextField 
        label="Full Name" 
        value={userName} 
        onChange={(e) => setUserName(e.target.value)}
        fullWidth 
      />
      <TextField 
        label="Profile Picture URL" 
        value={profilePic} 
        onChange={(e) => setProfilePic(e.target.value)}
        fullWidth 
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip 
                title="To get a picture URL, right-click any image on the internet and choose 'Copy Image Address' or 'Copy Image URL'." 
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
      <TextField 
        label="Country" 
        value={country} 
        onChange={(e) => setCountry(e.target.value)}
        fullWidth 
      />
      <TextField 
        label="Phone Number" 
        value={phoneNumber} 
        onChange={(e) => setPhoneNumber(e.target.value)}
        fullWidth 
        autoComplete="tel"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip 
                title="Enter your phone number including country code" 
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
        onClick={handleProfileUpdate}
      >
        Update Profile
      </Button>
    </Stack>
  )
}
export default ChangePersonalInfo;