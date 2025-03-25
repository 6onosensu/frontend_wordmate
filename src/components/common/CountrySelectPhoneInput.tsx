import { Box, MenuItem, TextField } from "@mui/material";
import { countries } from "@/utils/countries";
import InfoTextField from "./InfoTextField";
import { ChangeEvent } from "react";

interface Props {
  country: string;
  phone: string;
  setCountry: (value: string) => void;
  setPhone: (value: string) => void;
}

const CountrySelectPhoneInput = ({ 
  country, phone, setCountry, setPhone 
}: Props) => {
  const handleCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = countries.find(c => c.name === e.target.value);
    if (selected) {
      setCountry(selected.name);
      setPhone(selected.code);
    }
  };

  return (
    <Box>
      <TextField
        select
        label="Country"
        value={country}
        onChange={handleCountryChange}
        fullWidth 
        margin="normal" 
        SelectProps={{
          MenuProps: {
            PaperProps: {
              sx: {
                borderRadius: "4px",
                maxHeight: 200,
                maxWidth: 300,
                backgroundColor: "#fff",
                mt: 0.15,
              }
            }
          }
        }}
      >
        {countries.map((c) => (
          <MenuItem 
            key={c.name} 
            value={c.name} 
            sx={{ width: "300px" }}
          >{c.name}</MenuItem>
        ))}
      </TextField>

      <InfoTextField
        label="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        title={
          "Enter your phone number including country code"
        }
        autoComplete="tel"
      />
    </Box>
  );
};

export default CountrySelectPhoneInput;
