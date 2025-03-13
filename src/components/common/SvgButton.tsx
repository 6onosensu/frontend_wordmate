import { FC } from "react";
import { IconButton, Box } from "@mui/material";

interface SvgButtonProps {
  iconSrc: string;
  altText: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  zoom?: number; 
}

const SvgButton: FC<SvgButtonProps> = ({ iconSrc, altText, onClick, width = "24px", height = "24px", zoom = 1.5 }) => {
  return (
    <IconButton onClick={onClick}>
      <Box
        component="img"
        src={iconSrc}
        alt={altText}
        sx={{
          width: {width},
          height: {height},
          transform: `scale(${zoom})`,
          transformOrigin: "center",
          cursor: "pointer", 
        }}
      />
    </IconButton>
  );
};

export default SvgButton;
