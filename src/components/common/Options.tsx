import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "@/services/authService";



const Options = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const optionsList = [
    { label: "Edit User", action: () => console.log("Editing profile")},
    { label: "Settings", action: () => console.log("Opening settings")},
    { label: "Logout", action: handleLogout},
  ];

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "1vh" }}>
      {!showOptions && (
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => setShowOptions(true)}
        >
          Options
        </Button>
      )}
      {showOptions && (
        <>
          <Tooltip title="Hide Options" arrow>
            <IconButton onClick={() => setShowOptions(false)}>
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
          {optionsList.map((option, index) => (
            <Button
              key={index} 
              variant="contained" 
              color="info"
              onClick={option.action}
            >
              {option.label}
            </Button>
          ))}
        </>
      )}
    </Box>
  )
}
export default Options;