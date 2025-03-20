import { Tooltip, Button, TextField, InputAdornment, IconButton } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { FC, useCallback, useEffect, useState } from "react";
import { ChangeProps } from "../EditUserSection";
import { useAuth } from "@/context/AuthContext";
import { fetchUserData } from "@/services/apiService";
import { useFetch } from "@/hooks/useFetch";
import { User } from "@/types/wordType";
import { useSnackbar } from "@/context/SnackbarContext";
import { updateUserProfile } from "@/services/authService";

const ChangePersonalInfo: FC<ChangeProps> = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [countryName, setCountryName] = useState("");
  const [number, setNumber] = useState("");

  const { token } = useAuth();
  const { showSnackbar } = useSnackbar();
  
  const fetchUser = useCallback(() => fetchUserData(token!), [token]);
  const { data: user, loading } = useFetch<User>(fetchUser);
  
  useEffect(() => {
    if (user?.name || user?.pictureUrl || user?.countryName || user?.number) {
      setName(user.name);
      setPictureUrl(user.pictureUrl || "");
      setCountryName(user.countryName || "");
      setNumber(user.number || "");
    }
  }, [user]);
  
  const authToken = token || "";

  const handleProfileUpdate = async () => {
    if (!name) {
      showSnackbar("Please enter your full name!", "warning");
      return;
    }

    try {
      const res = await updateUserProfile(authToken, { name, pictureUrl, countryName, number });

      showSnackbar(
        res.message, 
        res.success ? "success" : "error"
      );

      if (res.success) {
        onSuccess();
      }
    } catch (error: any) {
      showSnackbar(error.message || "Failed to update email!", "error");
    }
  };

  return (
    <>
      <TextField 
        label="Full Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        fullWidth 
      />
      <TextField 
        label="Profile Picture URL" 
        value={pictureUrl} 
        onChange={(e) => setPictureUrl(e.target.value)}
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
        value={countryName} 
        onChange={(e) => setCountryName(e.target.value)}
        fullWidth 
      />
      <TextField 
        label="Phone Number" 
        value={number} 
        onChange={(e) => setNumber(e.target.value)}
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
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Profile"}
      </Button>
    </>
  )
}
export default ChangePersonalInfo;