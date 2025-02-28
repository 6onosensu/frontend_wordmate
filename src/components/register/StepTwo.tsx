import { TextField, MenuItem, Box, Typography, Button } from "@mui/material";
import { countries } from "../../utils/countries";
import { ChangeEvent } from "react";

type SetState<T> = (value: T) => void;

interface StepTwoProps {
  name: string;
  phone: string;
  country: string;
  pictureUrl: string;
  setName: SetState<string>;
  setPhone: SetState<string>;
  setCountry: SetState<string>;
  setPictureUrl: SetState<string>;
  prevStep: () => void;
  handleRegister: (e: React.FormEvent) => void;
  loading: boolean;
}

const StepTwo = ({
  name, 
  phone, 
  country, 
  pictureUrl, 
  setName, 
  setPhone, 
  setCountry, 
  setPictureUrl,
  prevStep, 
  handleRegister, 
  loading
} : StepTwoProps) => {

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPictureUrl(e.target.value);
  };

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
      >
        {countries.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Image URL"
        type="text"
        fullWidth
        margin="normal"
        value={pictureUrl}
        onChange={handleUrlChange}
      />

      {pictureUrl && (
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Typography variant="body2">Preview:</Typography>
          <img 
            src={pictureUrl} 
            alt="Profile Preview" 
            width={100} 
            height={100} 
            style={{ borderRadius: "50%", objectFit: "cover" }} 
          />
        </Box>
      )}

      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" color="secondary" onClick={prevStep}>
          Back
        </Button>
        <Button variant="contained" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Register"}
        </Button>
      </Box>
    </form>
  );
};

export default StepTwo;
