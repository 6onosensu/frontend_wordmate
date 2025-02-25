import { TextField, MenuItem, Box, Typography } from "@mui/material";
import MyButton from "../CustomButton";
import { countries } from "../../utils/countries";

type SetState<T> = (value: T) => void;

interface StepTwoProps {
  name: string;
  phone: string;
  country: string;
  profilePicture: File | null;
  setName: SetState<string>;
  setPhone: SetState<string>;
  setCountry: SetState<string>;
  setProfilePicture: SetState<File | null>;
  prevStep: () => void;
  handleRegister: (e: React.FormEvent) => void;
  loading: boolean;
}

const StepTwo = ({
  name, 
  phone, 
  country, 
  profilePicture, 
  setName, 
  setPhone, 
  setCountry, 
  setProfilePicture, 
  prevStep, 
  handleRegister, 
  loading
} : StepTwoProps) => {
  return (
    <form onSubmit={handleRegister} style={{ width: "100%" }}>
      <TextField 
        label="Full Name" 
        type="text" 
        fullWidth 
        margin="normal"
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <TextField 
        label="Phone Number" 
        type="tel" 
        fullWidth 
        margin="normal" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
      />
      <TextField 
        select 
        label="Country" 
        fullWidth 
        margin="normal" 
        value={country} 
        onChange={(e) => setCountry(e.target.value)} 
        required
      >
        {countries.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <input 
        type="file" 
        accept="image/*" 
        onChange={(e) => setProfilePicture(e.target.files?.[0] || null)} 
        style={{ marginTop: "16px" }} 
      />
      {profilePicture && (
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Typography variant="body2">Preview:</Typography>
          <img 
            src={URL.createObjectURL(profilePicture)} 
            alt="Profile Preview" 
            width={100} 
            height={100} 
            style={{ borderRadius: "50%" }} 
          />
        </Box>
      )}

      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
        <MyButton customVariant="secondary" onClick={prevStep}>
          Back
        </MyButton>
        <MyButton customVariant="primary" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Register"}
        </MyButton>
      </Box>
    </form>
  );
};

export default StepTwo;
