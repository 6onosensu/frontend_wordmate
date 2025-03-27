import { Button, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { ChangeProps } from "../EditUserSection";
import { useAuth } from "@/context/AuthContext";
import { useSnackbar } from "@/context/SnackbarContext";
import { updateUserProfile } from "@/services/authService";
import InfoTextField from "@/components/common/InfoTextField";
import { useUser } from "@/context/UserContext";
import CountrySelectPhoneInput from "@/components/common/CountrySelectPhoneInput";

const ChangePersonalInfo: FC<ChangeProps> = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [countryName, setCountryName] = useState("");
  const [number, setNumber] = useState("");

  const { token } = useAuth();
  const { showSnackbar } = useSnackbar();
  const { user, refreshUser } = useUser();
  
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
        await refreshUser();
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
        required
      />
      <InfoTextField
        label="Profile Picture URL"
        value={pictureUrl} 
        onChange={(e) => setPictureUrl(e.target.value)}
        title={
          "To get a picture URL, right-click any image on the internet and choose 'Copy Image Address' or 'Copy Image URL'."
        }
      />
      <CountrySelectPhoneInput
        country={countryName}
        phone={number}
        setCountry={setCountryName}
        setPhone={setNumber}
      />
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleProfileUpdate}
      >
        Update Profile
      </Button>
    </>
  )
}
export default ChangePersonalInfo;