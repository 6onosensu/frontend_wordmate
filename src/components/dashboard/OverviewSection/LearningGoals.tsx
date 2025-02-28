import { Box, Typography } from "@mui/material";

const LearningGoals = () => {
    
  return (
    <Box sx={{ minWidth: "500px", textAlign: "center",}}>
      <Typography variant="h5">Learning Goals</Typography>
      <Typography variant="body2" color="text.secondary">
        Keep going! You're making great progress. 🎯
      </Typography>
    </Box>

  )
}

export default LearningGoals;