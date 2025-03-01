import { GlobalStyles } from "@mui/material";

const globalStyles = (
  <GlobalStyles
    styles={{
      "body": {
        paddingTop: 120,
      },
      ".container-primary": {
        alignItems: "center",  
        flexDirection: "column",
      },
      ".container-secondary": {
        alignItems: "top",  
        flexDirection: "row",
      },
      ".container-outlined": {
        border: "2px solid red",
      },
    }}
  />
);

export default globalStyles;