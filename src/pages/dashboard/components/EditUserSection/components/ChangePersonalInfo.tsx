import { Button, TextField } from "@mui/material";
import InfoTextField from "@/components/common/InfoTextField";
import CountrySelectPhoneInput from "@/components/common/CountrySelectPhoneInput";

interface ChangePersonalInfoProps {
  name: string;
  pictureUrl: string;
  country: string;
  phone: string;
  setName: (v: string) => void;
  setPictureUrl: (v: string) => void;
  setCountry: (v: string) => void;
  setPhone: (v: string) => void;
  onSubmit: () => void;
}

const ChangePersonalInfo = ({ 
  name,
  pictureUrl,
  country,
  phone,
  setName,
  setPictureUrl,
  setCountry,
  setPhone,
  onSubmit
}: ChangePersonalInfoProps) => (
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
      country={country}
      phone={phone}
      setCountry={setCountry}
      setPhone={setPhone}
    />
    <Button 
      variant="contained" 
      color="secondary" 
      onClick={onSubmit}
    >
      Update Profile
    </Button>
  </>
)
export default ChangePersonalInfo;