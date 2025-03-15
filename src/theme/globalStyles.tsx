import { GlobalStyles } from "@mui/material";

const globalStyles = (
  <GlobalStyles
    styles={{
      "body": {
        display: "flex",
        flexDirection: "column", 
        minHeight: "100vh",
      },
      ".container-primary": {
        alignItems: "center",  
        flexDirection: "column",
      },
      ".container-secondary": {
        alignItems: "top",  
        flexDirection: "row",
      },
      ".nowrap-style": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1vh",
        whiteSpace: "nowrap", 
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      ".box-column": {
        display: "flex", 
        flexDirection: "column", 
        alignItems: "flex-start", 
        justifyContent: "space-between",
        position: "relative",
        marginBottom: "0",
        paddingBottom: "0",
      },
      "@keyframes blinkEffect": {
        "0%": { boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)" },
        "25%": { boxShadow: "0 0 20px rgb(113, 113, 113)" },
        "50%": { boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)" },
        "75%": { boxShadow: "0 0 20px rgb(163, 163, 163)" },
        "100%": { boxShadow: "0 0 0px rgba(0, 0, 0, 0)" },
      },
      ".highlight": {
        animation: "blinkEffect 3s ease-in-out",
      },
    }}
  />
);

export default globalStyles;