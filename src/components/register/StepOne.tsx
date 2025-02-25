import { TextField, Box } from "@mui/material";
import MyButton from "../CustomButton";

type SetState<T> = (value: T) => void;

interface StepOneProps {
  email: string;
  password: string;
  confirmPassword: string;
  setEmail: SetState<string>;
  setPassword: SetState<string>;
  setConfirmPassword: SetState<string>;
  nextStep: () => void;
  error: string;
}

const StepOne = ({
    email, 
    password, 
    confirmPassword, 
    setEmail, 
    setPassword, 
    setConfirmPassword, 
    nextStep, 
    error 
  }: StepOneProps) => {
  return (
    <form 
      onSubmit={(e) => e.preventDefault()} 
      style={{ width: "100%" }}
    >
      {error && <Box sx={{ 
        color: "red", 
        textAlign: "center", 
        mb: 2 
      }}>
        {error}
      </Box>}

      <TextField 
        label="Email" 
        type="email" 
        fullWidth 
        margin="normal" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <TextField 
        label="Password" 
        type="password" 
        fullWidth
        margin="normal" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <TextField 
        label="Confirm Password" 
        type="password" 
        fullWidth 
        margin="normal" 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)} 
        required 
      />

      <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        <MyButton customVariant="primary" onClick={nextStep}>
          Next
        </MyButton>
      </Box>
    </form>
  );
};

export default StepOne;
