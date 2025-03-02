import { FC } from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import Logo from "../assets/BookWordMate.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Header: FC = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const handleLogoClick = () => {
    navigate(token ? "/dashboard" : "/");
  };

  return (
    <AppBar position="fixed" color="secondary" >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box
          sx={{
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={Logo}
            alt="WordMate Logo"
            style={{ cursor: "pointer" }}
            onClick={handleLogoClick}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
