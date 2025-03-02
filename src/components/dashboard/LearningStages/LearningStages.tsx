import { Box } from "@mui/material"
import { Stage } from "./Stage"

export const LearningStages = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Stage stage="To Learn" title="Learn!"/>
      <Stage stage="To Repeat" title="Review!"/>
      <Stage stage="Learned" title="Recall!"/>
    </Box>
  )
}