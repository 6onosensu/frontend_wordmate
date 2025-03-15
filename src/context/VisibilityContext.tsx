import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface VisibilityContextType {
  isSettingsVisible: boolean;
  setIsSettingsVisible: Dispatch<SetStateAction<boolean>>;
  isEditUserVisible: boolean;
  setIsEditUserVisible: Dispatch<SetStateAction<boolean>>;
}

const VisibilityContext = createContext<VisibilityContextType | undefined>(undefined);

export const VisibilityProvider = ({ children }: { children: ReactNode }) => {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isEditUserVisible, setIsEditUserVisible] = useState(false);

  return (
    <VisibilityContext.Provider value={{ 
      isSettingsVisible, 
      setIsSettingsVisible, 
      isEditUserVisible, 
      setIsEditUserVisible 
    }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = () => {
  const context = useContext(VisibilityContext);
  if (!context) {
    throw new Error("useVisibility must be used within a VisibilityProvider");
  }
  return context;
};
