import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    primary: {
      main: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#000000",
    },
  },
  typography: {
    fontFamily: "'Omnes-Medium', sans-serif",
  },
});

export default theme;
