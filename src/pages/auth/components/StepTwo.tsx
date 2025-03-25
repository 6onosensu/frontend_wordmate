import { TextField, Box, Typography, Button } from "@mui/material";
import InfoTextField from "@/components/common/InfoTextField";
import CountrySelectPhoneInput from "@/components/common/CountrySelectPhoneInput";

type SetState<T> = (value: T) => void;

interface StepTwoProps {
  name: string;
  number: string;
  countryName: string;
  pictureUrl: string;
  setName: SetState<string>;
  setNumber: SetState<string>;
  setCountryName: SetState<string>;
  setPictureUrl: SetState<string>;
  prevStep: () => void;
  handleRegister: (e: React.FormEvent) => void;
  loading: boolean;
}

const StepTwo = ({
  name, 
  number, 
  countryName, 
  pictureUrl, 
  setName, 
  setNumber, 
  setCountryName, 
  setPictureUrl,
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
      
      <CountrySelectPhoneInput
        country={countryName}
        phone={number}
        setCountry={setCountryName}
        setPhone={setNumber}
      />

      <InfoTextField
        label="Profile Picture URL"
        value={pictureUrl} 
        onChange={(e) => setPictureUrl(e.target.value)}
        title={
          "To get a picture URL, right-click any image on the internet and choose 'Copy Image Address' or 'Copy Image URL'."
        }
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