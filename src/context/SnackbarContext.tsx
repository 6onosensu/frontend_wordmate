import CustomSnackbar from "@/components/common/CustomSnackbar";
import { createContext, useContext, useState, ReactNode } from "react";

interface SnackbarProps {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
}

interface SnackbarContextType {
  showSnackbar: (
    message: string, 
    severity: SnackbarProps["severity"]
  ) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbar, setSnackbar] = useState<SnackbarProps>({
    open: false,
    message: "",
    severity: "info",
  });

  const showSnackbar = (
    message: string, 
    severity: SnackbarProps["severity"]) => {
    setSnackbar({ open: true, message, severity });
    setTimeout(() => setSnackbar(
      (prev) => ({ ...prev, open: false })
    ), 2000);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <CustomSnackbar
        open={snackbar.open} 
        message={snackbar.message} 
        severity={snackbar.severity} 
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))} 
      />
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
