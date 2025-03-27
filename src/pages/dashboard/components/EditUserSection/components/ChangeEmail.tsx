import { Button, } from "@mui/material";
import InfoTextField from "@/components/common/InfoTextField";

interface ChangeEmailProps {
  email: string;
  setEmail: (v: string) => void;
  onSubmit: () => void;
}

const ChangeEmail= ({ 
  email, 
  setEmail, 
  onSubmit 
}: ChangeEmailProps) => (
  <>
    <InfoTextField
      label={"New Email"}
      type={"email"}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      title={"Email must be unique!"}
      autoComplete="email"
    />
    <Button 
      variant="contained" 
      color="secondary" 
      onClick={onSubmit}
    >
      Update Email
    </Button>
  </>
)
export default ChangeEmail;