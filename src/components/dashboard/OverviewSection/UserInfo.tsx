import { Avatar, Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";

interface User {
  name: string;
  picture?: string | ArrayBuffer;
  countryName?: string;
  number?: string;
  email?: string;
}

const UserInfo = () => {
  const { token } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;

      try {
        const response = await fetch("http://localhost:3000/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch user data");

        const data: User = await response.json();
        setUser(data);
        if (data.picture) {
          if (typeof data.picture === "string" && data.picture.startsWith("data:image")) {
            setImageSrc(data.picture);
          } else if (typeof data.picture === "string") {
            setImageSrc(data.picture);
          } else {
            const buffer = new Uint8Array(data.picture as ArrayBuffer);
            const base64String = btoa(String.fromCharCode(...buffer));
            setImageSrc(`data:image/png;base64,${base64String}`);
          }
        } else {
          setImageSrc("/default-avatar.png");
        }
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ display: "flex", gap: 2,  }}>
      <Avatar src={imageSrc || "/default-avatar.png"} sx={{ width: 64, height: 64, marginTop: "10px" }} />
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