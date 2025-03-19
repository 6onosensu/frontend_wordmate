import { Components, createTheme } from "@mui/material/styles";
import typography from "./typography";
import colors from "./colors";
import '@/theme/font.css';
import MuiAlert from "./components/MuiAlert";
import MuiButton from "./components/MuiButton";
import MuiCard from "./components/MuiCard";
import MuiCardContent from "./components/MuiCard";
import MuiTableCell from "./components/MuiTableCell";
import MuiLink from "./components/MuiLink";
import MuiPaper from "./components/MuiPaper";
import MuiContainer from "./components/MuiContainer";
import MuiStack from "./components/MuiStack";

const theme = createTheme({
  palette: {
    primary: { 
      main: colors.primary, 
      contrastText: colors.secondary 
    },
    secondary: { 
      main: colors.secondary, 
      contrastText: colors.primary 
    },
    info: { 
      main: colors.info, 
      contrastText: colors.primary 
    },
  },
  typography,
  components: {
    MuiAlert,
    MuiButton,
    MuiCard,
    MuiCardContent,
    MuiContainer,
    MuiLink,
    MuiPaper,
    MuiStack,
    MuiTableCell,
  } as Components,
});

export default theme;
