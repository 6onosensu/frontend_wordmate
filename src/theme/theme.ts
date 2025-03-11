import { createTheme } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import '@/theme/font.css'

const glowingAnimation = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`;

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
    info: {
      main: "#DDDDDD",
      contrastText: "#000000",
    }
  },
  typography: {
    fontFamily: "'Omnes-Medium', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontFamily: "'Omnes-Black', sans-serif",
    },
    h2: {
      fontSize: "2rem",
      fontFamily: "'Omnes-Bold', sans-serif",
    },
    h3: {
      fontSize: "1.85rem",
      fontFamily: "'Omnes-Bold', sans-serif",
    },
    h4: {
      fontSize: "1.75rem",
      fontFamily: "'Omnes-SemiBold', sans-serif",
    },
    h5: {
      fontSize: "1.5rem",
      fontFamily: "'Omnes-SemiBold', sans-serif",
    },
    h6: {
      fontSize: "1.35rem",
      fontFamily: "'Omnes-SemiBold', sans-serif",
    },
    body1: {
      fontSize: "1rem",
      fontFamily: "'Omnes-Medium', sans-serif",
    },
    body2: {
      fontSize: "1rem",
      fontFamily: "'Omnes-Light', sans-serif",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          display: "flex", 
          alignItems: "center",
          gap: "3vh",
          backgroundColor: "transparent",
          width: "100%",
        }
      }
    },
    MuiStack: {
      styleOverrides: {
        root: {
          alignItems: "center",
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "30px",
          boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
          margin: "20px 10px 20px 10px",
          width: "170vh",
          gap: "3vh",
          mt: "2",
        },
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "0.975rem",
          fontFamily: "'Omnes-Medium', sans-serif",
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        text: {
          margin: "0",
        },
        root: {
          letterSpacing: "0.7px",
          margin: "0.6em",
          padding: "0.6em 2em",
          borderRadius: "5px",
          textTransform: "none",
          position: "relative",
          userSelect: "none",
          touchAction: "manipulation",
          minWidth: "125px",
        },
        containedPrimary: {
          backgroundColor: "#000",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#222",
          },
          "&:active": {
            color: "#fff",
          },
          position: "relative",
          "&::before": {
            content: '""',
            background:
              "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
            position: "absolute",
            top: "-2px",
            left: "-2px",
            backgroundSize: "500%",
            zIndex: "-5",
            filter: "blur(6px)",
            width: "calc(100% + 4px)",
            height: "calc(100% + 4px)",
            animation: `${glowingAnimation} 20s linear infinite`,
            transition: "opacity 0.3s ease-in-out",
            borderRadius: "10px",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "#222",
            left: 0,
            top: 0,
            borderRadius: "10px",
            zIndex: "-1",
          },
        },
        containedSecondary: {
          "&:hover": {
            background: "#222",
          },
        },
        containedInfo: {
          backgroundColor: "#CCCCCC",
          fontFamily: "Omnes-SemiBold, sans-serif",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#BBBBBB",
          },
          "&:active": {
            backgroundColor: "#DDDDDD",
          },
        },
        contained: {
          background: "#000",
          color: "#fff",
          "&:hover": {
            background: "#ccc",
          },
        },
      }
    }
  }
});

export default theme;
