import { Avatar, Box, Typography } from "@mui/material";

const UserInfo = () => {
  return (
    <Box sx={{ display: "flex", gap: 1, }}>
    <Avatar src="/path/to/avatar.jpg" sx={{ width: 64, height: 64 }} />
    <Box>
      <Typography variant="h6">Dasha Suhhanova</Typography>
      <Typography variant="body2" color="text.secondary">
        Learning: English
      </Typography>
    </Box>
  </Box>
  )
}

export default UserInfo;