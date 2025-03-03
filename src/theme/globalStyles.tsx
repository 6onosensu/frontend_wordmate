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
      }
    }}
  />
);

export default globalStyles;