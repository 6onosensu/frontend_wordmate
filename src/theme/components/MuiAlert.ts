import glowingAnimation from "@/theme/GlowingAnimation";
import colors from "../colors";

const MuiAlert = {
  styleOverrides: {
    root: ({ ownerState }: { 
      ownerState: { 
        severity?: "success" | "error" | "warning" | "info" 
      } 
    }) => ({
      color: colors.primary,
      backgroundColor: colors.secondary,
      position: "relative",
      border: "1px solid #000",
      transition: "background 0.5s ease-in-out, box-shadow 0.5s ease-in-out",

      "&::before": {
        content: '""',
        background: (() => {
          switch (ownerState.severity) {
            case "success":
              return "linear-gradient(45deg, rgb(34, 139, 34), rgb(60, 179, 113), rgb(46, 204, 113), rgb(144, 238, 144), rgb(34, 139, 34))";
            case "error":
              return "linear-gradient(45deg, rgb(255, 0, 0), rgb(255, 98, 98), rgb(251, 168, 168),  rgb(255, 86, 86), rgb(255, 0, 0))";
            case "warning":
              return "linear-gradient(45deg, rgb(184, 134, 11), rgb(255, 165, 0), rgb(255, 215, 0), rgb(255, 200, 50), rgb(184, 134, 11))";
            case "info":
            default:
              return "linear-gradient(45deg, rgb(0, 0, 139), rgb(70, 130, 180), rgb(30, 144, 255), rgb(100, 149, 237), rgb(0, 0, 139))";
          }
        })(),
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
        left: 0,
        top: 0,
        zIndex: "-1",
        backgroundColor: "inherit",
        borderRadius: "5px",
      },
    }),
  },
};

export default MuiAlert;