import React from "react";
import { IconButton, Box } from "@mui/material";

interface SvgButtonProps {
  iconSrc: string;
  altText: string;
  onClick?: () => void;
  zoom?: number; 
}

const SvgButton: React.FC<SvgButtonProps> = ({ iconSrc, altText, onClick, zoom = 1.5 }) => {
  return (
    <IconButton onClick={onClick}>
      <Box
        component="img"
        src={iconSrc}
        alt={altText}
        sx={{
          width: "24px",
          height: "24px",
          transform: `scale(${zoom})`,
          transformOrigin: "center",
        }}
      />
    </IconButton>
  );
};

export default SvgButton;
