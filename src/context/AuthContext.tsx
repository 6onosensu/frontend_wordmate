import { createContext, useState, useEffect, ReactNode, useContext } from "react";

interface AuthContextType {
  token: string | null;
  login: (token: string, rememberMe: boolean) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") || sessionStorage.getItem("token")
  );

  useEffect(() => {
    const storedToken = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (storedToken !== token) setToken(storedToken);
  }, []);

  const login = (token: string, rememberMe: boolean) => {
    setToken(token);
    if (rememberMe) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
