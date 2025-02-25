import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CustomButtonsProps extends ButtonProps {
  color?: "primary" | "secondary" | "error" | "success" | "warning" | "info";
}

const getTextColor = (backgroundColor: string) => {
  return backgroundColor === "#ffffff" ? "#000" : "#fff";
};

const getBorderColor = (backgroundColor: string, textColor: string) => {
  if (backgroundColor === "#000000") return "#000";
  if (backgroundColor === "#ffffff") return textColor;
  return backgroundColor; 
};

const CustomButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "color",
})<CustomButtonsProps>(({ theme, color }) => {
  const backgroundColor =
    color === "secondary" ? theme.palette.secondary.main :
    color === "error" ? theme.palette.error.main :
    color === "success" ? theme.palette.success.main :
    color === "warning" ? theme.palette.warning.main :
    color === "info" ? theme.palette.info.main :
    color === "primary" ? theme.palette.primary.main :
    "#000"; 
  const textColor = getTextColor(backgroundColor);
  const borderColor = getBorderColor(backgroundColor, textColor);

  return {
    fontFamily: "Omnes-Medium, sans-serif",
    padding: "0.8em 3em",
    border: `1px solid ${borderColor}`,
    outline: "none",
    cursor: "pointer",
    position: "relative",
    zIndex: 0,
    fontSize: "16px",
    borderRadius: "5px",
    userSelect: "none",
    touchAction: "manipulation",
    transition: "background 0.3s ease-in-out",
    background: backgroundColor,
    color: textColor,

    "&:hover": {
      background: theme.palette[color || "primary"].dark,
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

    "&.submit": {
      background: "#ddd",
      color: "#111",
      border: "1px solid #ddd"
    },
    "&.submit:hover": {
      background: "#ccc",
      border: "1px solid #ccc",
    },

    "@keyframes glowing-button-85": {
      "0%": { backgroundPosition: "0 0" },
      "50%": { backgroundPosition: "400% 0" },
      "100%": { backgroundPosition: "0 0" },
    },
  };
});

export default CustomButton;
