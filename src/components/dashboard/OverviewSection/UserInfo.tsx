import { Avatar, Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";

interface User {
  name: string;
  pictureUrl?: string;
  countryName?: string;
  number?: string;
  email?: string;
}

const UserInfo = () => {
  const { token } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;

      try {
        const response = await fetch("http://localhost:3000/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data: User = await response.json();
        setUser(data);
        
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  if (loading) return <CircularProgress color="primary"/>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ display: "flex", gap: 2,  }}>
      <Avatar src={user?.pictureUrl || "/default-avatar.png"} sx={{ width: 74, height: 74, marginTop: "10px" }} />
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