import { Button, } from "@mui/material"
import { FC, useCallback, useEffect, useState } from "react";
import { ChangeProps } from "../EditUserSection";
import { fetchUserData } from "@/services/apiService";
import { useAuth } from "@/context/AuthContext";
import { useFetch } from "@/hooks/useFetch";
import { User } from "@/types/wordType";
import { useSnackbar } from "@/context/SnackbarContext";
import { updateUserProfile } from "@/services/authService";
import InfoTextField from "@/components/common/InfoTextField";
import { useUser } from "@/context/UserContext";

const ChangeEmail: FC<ChangeProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const { token } = useAuth();
  const { showSnackbar } = useSnackbar();
  const { refreshUser } = useUser();

  const authToken = token || "";
  
  const fetchUser = useCallback(() => fetchUserData(token!), [token]);
  const { data: user, loading } = useFetch<User>(fetchUser);
  
  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
    }
  }, [user]);

  const handleChangeEmail = async () => {
    if (!email || email === user?.email) {
      showSnackbar("Please enter a new email address!", "warning");
      return;
    }

    try {
      const res = await updateUserProfile(authToken, { email });

      showSnackbar(
        res.message, 
        res.success ? "success" : "error"
      );

      if (res.success) {
        await refreshUser();
        onSuccess();
      }
    } catch (error: any) {
      showSnackbar(error.message || "Failed to update email!", "error");
    }
  };

  return (
    <>
      <InfoTextField
        label={"New Email"}
        type={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        title={"Email must be unique!"}
        autoComplete="email"
      />
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleChangeEmail}
        disabled={loading}
      >
        {loading ? "Loading..." : "Update Email"}
      </Button>
    </>
  )
}
export default ChangeEmail;