import { IconButton, Tooltip } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { FC } from "react";

interface CollapseButtonProps {
  onClick: () => void;
}

const CollapseButton: FC<CollapseButtonProps> = ({ onClick }) => {
  return (
    <Tooltip title="Collapse" arrow>
      <IconButton onClick={onClick}>
        <ExpandLessIcon />
      </IconButton>
    </Tooltip>
  );
};

export default CollapseButton;
