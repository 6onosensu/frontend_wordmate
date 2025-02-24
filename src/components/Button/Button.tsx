import React, { FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  variant?: "primary" | "secondary" | "submit";
  onClick? : React.MouseEventHandler<HTMLButtonElement>;
  canSubmit?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    variant = "primary",
    onClick,
    canSubmit = false,
  } = props;

  const className = `${styles.button} ${styles[variant]}`;

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (!canSubmit) {
      event.preventDefault();
    }

    if (onClick) {
      onClick(event);
    }
  };


  return (
    <button 
      className={className} 
      onClick={handleClick}
      type={canSubmit ? "submit" : "button"}
    >
      {children}
    </button>
  );
}

export default Button;