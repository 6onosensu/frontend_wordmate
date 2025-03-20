import { Avatar, Box, CircularProgress, Typography } from "@mui/material";
import { useAuth } from "@/context/AuthContext";
import { useFetch } from "@/hooks/useFetch";
import { fetchUserData } from "@/services/apiService";
import { useCallback } from "react";

interface User {
  name: string;
  pictureUrl?: string;
  countryName?: string;
  number?: string;
  email?: string;
}

const size = {
  fontSize: "0.85rem",
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
        sx={{ width: 74, height: 74, marginTop: "1vh" }} 
      />
      <Box>
        <Typography variant="h6">
          {user?.name || "Unknown User"}
        </Typography>
        <Typography 
          variant="body1" 
          sx={size} 
          color="text.secondary"
        >
          Email: {user?.email || "Not specified"}
        </Typography>
        <Typography 
          variant="body1" 
          sx={size} 
          color="text.secondary"
        >
          Country: {user?.countryName || ""}
        </Typography>
        <Typography 
          variant="body1" 
          sx={size} 
          color="text.secondary"
        >
          Number: {user?.number || ""}
        </Typography>
      </Box>
    </Box>
  )
}

export default UserInfo;