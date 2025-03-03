import { Box, Typography } from "@mui/material"

export const Welcome = () => {
  return (
    <Box sx={{ margin: "10px" }}>
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Typography variant="h4">Welcome to WordMate!</Typography>
        <Typography variant="body1">Please log in to access your account.</Typography>
      </Box>
    </Box>
  )
}