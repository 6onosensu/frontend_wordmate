import { Avatar, Box, CircularProgress, Typography } from "@mui/material";
import { useAuth } from "../../../hooks/useAuth";
import { useFetch } from "../../../hooks/useFetch";
import { fetchUserData } from "../../../services/apiService";
import { useCallback } from "react";

interface User {
  name: string;
  pictureUrl?: string;
  countryName?: string;
  number?: string;
  email?: string;
}

const UserInfo = () => {
  const { token } = useAuth();
  
  const fetchUser = useCallback(() => fetchUserData(token!), [token]);

  const { data: user, loading, error } = useFetch<User>(fetchUser);

  if (loading) return <CircularProgress color="primary" />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ display: "flex", gap: 2,  }}>
      <Avatar 
        src={user?.pictureUrl || "/default-avatar.png"} 
        sx={{ width: 74, height: 74, marginTop: "10px" }} 
      />
      <Box>
        <Typography variant="h6">{user?.name || "Unknown User"}</Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {user?.email || "Not specified"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Country: {user?.countryName || "Not specified"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Number: {user?.number || "Not specified"}
        </Typography>
      </Box>
    </Box>
  )
}

export default UserInfo;