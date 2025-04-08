const MuiCard = {
  styleOverrides: {
    root: {
      margin: "5vh",
      gap: "20px",
      padding: "10vh",
      cursor: "pointer",
      transition: "0.3s",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      
      "&:hover": {
        backgroundColor: "#f5f5f5" 
      },
      "&.MuiPaper-outlined": {
        minHeight: "10rem",
        width: "100%",
        margin: 0,
        padding: "2rem",
        textAlign: "center",
      },
    }
  }
}

export default MuiCard;