import { Alert, Snackbar } from "@mui/material"
import { FC } from "react";

interface CustomSnackbarProps {
  open: boolean;
  message: string;
  severity?: "success" | "error" | "warning" | "info";
  onClose?: () => void;
}

const CustomSnackbar: FC<CustomSnackbarProps> = ({ open, message, severity = "info", onClose }) => {
  return (
    <Snackbar 
      open={open} 
      autoHideDuration={300000} 
      onClose={onClose}
      anchorOrigin={{ 
        vertical: "bottom", 
        horizontal: "center" 
      }}
    >
      <Alert 
        onClose={onClose} 
        severity={severity} 
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}
export default CustomSnackbar;