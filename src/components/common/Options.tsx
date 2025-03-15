import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "@/services/authService";
import { useVisibility } from "@/context/VisibilityContext";

const Options = () => {
  const { setIsSettingsVisible, setIsEditUserVisible } = useVisibility(); 
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };


  const optionsList = [
    { label: "Edit User", action: () => setIsEditUserVisible(prev => !prev)},
    { label: "Settings", action: () => setIsSettingsVisible(prev => !prev)},
    { label: "Logout", action: handleLogout},
  ];

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
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