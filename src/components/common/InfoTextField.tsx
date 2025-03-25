import { IconButton, InputAdornment, TextField, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { ChangeEvent, FC } from "react";

interface InfoTextFieldProps {
  label: string;
  type?: string;
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement>
  ) => void;
  title: string;
  autoComplete?: string;
}

const InfoTextField: FC<InfoTextFieldProps> = ({ 
  label,
  type = "text",
  value,
  onChange,
  title,
  autoComplete = "",
 }) => {
  return (
    <TextField 
      label={label}
      type={type}
      value={value} 
      onChange={onChange}
      fullWidth 
      margin="normal"
      autoComplete={autoComplete}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip 
                title={title} 
                arrow
                placement="bottom-end"
              >
                <IconButton 
                  tabIndex={-1} 
                  disableRipple
                >
                  <InfoOutlinedIcon />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }
      }}
    />
  )
}

export default InfoTextField;
