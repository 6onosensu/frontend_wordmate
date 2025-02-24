import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(() => ({
  fontFamily: "Omnes-Bold, sans-serif",
  padding: "0.8em 3em",
  border: "none",
  outline: "none",
  color: "#fff",
  background: "#000",
  cursor: "pointer",
  position: "relative",
  zIndex: 0,
  fontSize: "16px",
  borderRadius: "5px",
  userSelect: "none",
  touchAction: "manipulation",
  transition: "background 0.3s ease-in-out",

  "&:hover": {
    background: "#222",
  },

  "&.primary": {
    position: "relative",
    "&::before": {
      content: '""',
      background: `linear-gradient(45deg,
        #ff0000, #ff7300, #fffb00, 
        #48ff00, #00ffd5, #002bff, 
        #7a00ff, #ff00c8, #ff0000)`,
      position: "absolute",
      top: "-2px",
      left: "-2px",
      width: "calc(100% + 4px)",
      height: "calc(100% + 4px)",
      zIndex: "-1",
      filter: "blur(5px)",
      borderRadius: "10px",
      backgroundSize: "400%",
      animation: "glowing-button-85 20s linear infinite",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "#222",
      left: 0,
      top: 0,
      zIndex: "-1",
      borderRadius: "10px",
    },
  },

  "&.secondary:hover": {
    background: "#222",
  },

  "&.submit": {
    background: "#ddd",
    color: "#111",
  },
  "&.submit:hover": {
    background: "#ccc",
  },

  "@keyframes glowing-button-85": {
    "0%": { backgroundPosition: "0 0" },
    "50%": { backgroundPosition: "400% 0" },
    "100%": { backgroundPosition: "0 0" },
  },
}));

export default CustomButton;
