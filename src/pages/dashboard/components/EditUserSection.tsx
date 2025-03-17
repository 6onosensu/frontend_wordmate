import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";

const EditUserSection = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  return (
    <Container className="container-primary">
      <Typography variant="h2">Profile Update</Typography>
    </Container>
  )
}
export default EditUserSection;