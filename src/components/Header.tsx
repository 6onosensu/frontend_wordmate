import { FC } from "react";
import { AppBar, Toolbar, Box, Link} from "@mui/material";
import Logo from "../assets/BookWordMate.svg";

const Header: FC = () => {
  return (
    <AppBar position="fixed" color="secondary">
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
          <Link href="/" sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={Logo}
              alt="WordMate Logo"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
