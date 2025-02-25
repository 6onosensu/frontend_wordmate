import { Button, ButtonProps } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { FC, ReactNode } from "react";

const glowingAnimation = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`;

interface CustomButtonProps extends Omit<ButtonProps, "variant"> {
  customVariant: "primary" | "secondary" | "submit";
  children: ReactNode;
}

const CustomButton = styled(Button)<ButtonProps>(() => ({
  fontFamily: 'Omnes-Medium, sans-serif',
  margin: '0.6em',
  padding: '0.6em 2em',
  border: 'none',
  outline: 'none',
  color: '#fff',
  background: '#000',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 0,
  borderRadius: '5px',
  userSelect: 'none',
  touchAction: 'manipulation',
}));

const MyButton: FC<CustomButtonProps> = ({ customVariant, children, ...props }) => {
  return (
    <CustomButton
      {...props}
      className={customVariant}
      sx={{
        '&.primary': {
          position: 'relative',
          '&::before': {
            content: '""',
            background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            backgroundSize: '400%',
            zIndex: '-1',
            filter: 'blur(5px)',
            width: 'calc(100% + 4px)',
            height: 'calc(100% + 4px)',
            animation: `${glowingAnimation} 20s linear infinite`,
            transition: 'opacity 0.3s ease-in-out',
            borderRadius: '10px',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: '#222',
            left: 0,
            top: 0,
            borderRadius: '10px',
            zIndex: '-1',
          },
        },
        '&.secondary:hover': {
          background: '#222',
        },
        '&.submit': {
          background: '#ddd',
          color: '#111',
          '&:hover': {
            background: '#ccc',
          },
        },
      }}
    >
      {children}
    </CustomButton>
  );
};

export default MyButton;
