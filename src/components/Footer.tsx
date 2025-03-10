import { FC } from "react";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/BookTwoWords.svg";
import { logoutUser } from "@/services/authService";
import SvgButton from "@/components/SvgButton";
import CopyEmail from "@/assets/emailCircle.svg";
import github from "@/assets/githubCircle.svg";
import linkedin from "@/assets/linkedinCircle.svg";
import telegram from "@/assets/telegramCircle.svg";

const Footer: FC = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    logout();
    navigate("/");
  };

  const handleLogoClick = () => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCopyEmail = () => {
    const email = "darja.suhhanova@gmail.com";
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  }

  const handleLink = (link: string) => {
    window.open(link, "_blank");
  }

  return (
    <AppBar 
      position="static"
      color="secondary" 
      sx={{ marginTop: "5vh", padding: "1vh" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between",  gap: 2 }}>
        <SvgButton 
          iconSrc={Logo} 
          altText={"WordMate Footer Logo"} 
          onClick={handleLogoClick}
          width={"30vh"}
          height={"30vh"}
          zoom={1}
        />

        <Box sx={{ display: "flex", flexDirection: "column"}}>
          <Button variant="text" onClick={() => navigate("/privacy")}>
            Privacy Policy
          </Button>
          {token ? (
            <>
              <Button variant="text" onClick={() => handleNavigate("searchword")}>
                Search Word
              </Button>
              <Button variant="text" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button variant="text" onClick={() => navigate("login")}>
              Login
            </Button>
          )}
        </Box>
        <Box>
          <Typography sx={{ textAlign: "center" }}>
            © 2025 Darja Suhhanova. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3, marginTop: "1vh", justifyContent: "center" }}>
            <SvgButton 
              iconSrc={linkedin} 
              altText={"linkedin"} 
              onClick={
                () => handleLink("https://linkedin.com/in/darja-suhhanova")
              }
              width="30px"
              height="30px"
            />
            <SvgButton 
              iconSrc={github} 
              altText={"github"} 
              onClick={
                () => handleLink("https://github.com/6onosensu/")
              }
              width="30px"
              height="30px"
            />
            <SvgButton 
              iconSrc={telegram} 
              altText={"telegram"} 
              onClick={
                () => handleLink("https://t.me/bonosensu16")
              }
              width="30px"
              height="30px"
            />
            <SvgButton 
              iconSrc={CopyEmail} 
              altText={"Copy Email"} 
              onClick={handleCopyEmail}
              width="30px"
              height="30px"
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
