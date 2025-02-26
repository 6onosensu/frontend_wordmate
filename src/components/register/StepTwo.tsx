import { TextField, MenuItem, Box, Typography, Button } from "@mui/material";
import { countries } from "../../utils/countries";
import { ChangeEvent } from "react";

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
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfilePicture(e.target.files[0]);
    }
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
        required
      >
        {countries.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <Box 
        sx={{ 
          mt: 2, 
          alignItems: "center",
          display: "flex",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px 8px",
          width: "100%",
        }}
      >
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }} 
        />
        <label htmlFor="file-upload">
          <Button 
            variant="contained" 
            color="info" 
            sx={{ 
              margin: 0, 
              flexShrink: 0,
              minWidth: "141px",
              }} 
            component="span"
          > Upload Image
          </Button>
        </label>
        <Typography 
          variant="body2" 
          sx={{ 
            ml: 1, 
            flexGrow: 1, 
            overflow: "hidden", 
            textOverflow: "ellipsis", 
            whiteSpace: "nowrap"
          }}
        > {profilePicture ? profilePicture.name : "No file selected"}
        </Typography>
      </Box>

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
