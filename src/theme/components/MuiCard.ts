const MuiCard = {
  styleOverrides: {
    root: {
      margin: "5vh",
      padding: "10vh",
      cursor: "pointer",
      transition: "0.3s",
      "&:hover": { backgroundColor: "#f5f5f5" },
      display: "flex",
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center", 
    }
  }
}

const MuiCardContent = {
  styleOverrides: {
    root: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%", 
    }
  }
}
export default { MuiCard, MuiCardContent };