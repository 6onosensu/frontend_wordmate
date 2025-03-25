import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { fetchUserData } from "@/services/apiService";
import { useAuth } from "./AuthContext";
import { User } from "@/types/wordType";
import { useSnackbar } from "./SnackbarContext";

interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
  refreshUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { token } = useAuth();
  const { showSnackbar } = useSnackbar();
  const [user, setUser] = useState<User | null>(null);

  const refreshUser = async () => {
    if (!token) return;

    try {
      const data = await fetchUserData(token);
      setUser(data);
    } catch (error: any) {
      showSnackbar(error.message || "Failed to fetch user data", "error");
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, refreshUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
};
