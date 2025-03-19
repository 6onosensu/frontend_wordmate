import colors from "../colors";
import glowingAnimation from "@/theme/GlowingAnimation";

const MuiButton = {
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
      backgroundColor: colors.primary,
      color: colors.secondary,
      "&:hover": {
        backgroundColor: "#222",
      },
      "&:active": {
        color: colors.secondary,
      },
      position: "relative",
      "&::before": {
        content: '""',
        background: colors.glow,
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
      color: colors.secondary,
      "&:hover": {
        backgroundColor: "#BBBBBB",
      },
      "&:active": {
        backgroundColor: colors.info,
      },
    },
    contained: {
      background: colors.primary,
      color: colors.secondary,
      "&:hover": {
        background: "#ccc",
      },
    },
  }
}

export default MuiButton;
