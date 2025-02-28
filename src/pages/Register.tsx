import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import StepOne from "../components/register/StepOne";
import StepTwo from "../components/register/StepTwo";

const Register = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  const navigate = useNavigate();

  const nextStep = () => {
    if (!email || !password || password !== confirmPassword) {
      setError("Please fill out all fields correctly!");
      return;
    }
    setError("");
    setStep(2);
  }

  const prevStep = () => setStep(1);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter a valid name!");
      return;
    }

    setLoading(true);
    setError("");
    try {
      await registerUser(email, password, name, phone, country, pictureUrl);
      navigate("/");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  
  let content;
  if (step === 1) {
    content = (
      <StepOne
        email={email} 
        password={password} 
        confirmPassword={confirmPassword} 
        setEmail={setEmail} 
        setPassword={setPassword} 
        setConfirmPassword={setConfirmPassword} 
        nextStep={nextStep} 
      />
    );
  } else {
    content = (
      <StepTwo 
        name={name} 
        phone={phone} 
        country={country} 
        pictureUrl={pictureUrl} 
        setName={setName} 
        setPhone={setPhone} 
        setCountry={setCountry} 
        setPictureUrl={setPictureUrl}
        prevStep={prevStep} 
        handleRegister={handleRegister} 
        loading={loading} 
      />
    );
  }

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <Box sx={{ textAlign: "center", mb: 2}}>
        <Typography variant="h4">Create an Account</Typography>
        <Typography variant="body1">Sign up to start using WordMate!</Typography>
      </Box>

      <Box sx={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "50px",
        boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "400px",
        width: "100%",
      }}>
      <Typography variant="h3" gutterBottom>Register</Typography>
      {error && <Box sx={{ 
        color: "red", 
        textAlign: "center", 
        mb: 2 
      }}>
        {error}
      </Box>}
      {content}
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        <Button variant="text" onClick={() => navigate("/")}>
          Already have an account? Login
        </Button>
      </Box>
      </Box>
    </Box>
  );
};

export default Register;