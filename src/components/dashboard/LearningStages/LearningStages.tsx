import { Box } from "@mui/material"
import { Stage } from "./Stage"

export const LearningStages = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Stage stage="To Explore" title="Explore!"/>
      <Stage stage="To Refresh" title="Refresh!"/>
      <Stage stage="Retained" title="Review!"/>
    </Box>
  )
}