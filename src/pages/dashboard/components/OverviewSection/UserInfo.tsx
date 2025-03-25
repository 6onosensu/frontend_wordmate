import { Avatar, Box, CircularProgress, Typography } from "@mui/material";
import { useUser } from "@/context/UserContext";

const UserInfo = () => {
  const { user } = useUser();
  
  if (!user) return <CircularProgress color="primary" />;
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
        <Typography>
          {user?.email || "Not specified"}
        </Typography>
        <Typography>
          {user?.countryName || ""}
        </Typography>
        <Typography>
          {user?.number || ""}
        </Typography>
      </Box>
    </Box>
  )
}

export default UserInfo;