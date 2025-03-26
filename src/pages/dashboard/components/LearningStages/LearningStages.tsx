import { Box } from "@mui/material"
import { Stage } from "./Stage"
import { stages } from "@/utils/stages"

export const LearningStages = () => {
  return (
    <Box display="flex">
      {stages.map(({ key, title }) => (
        <Stage key={key} stage={key} title={title} />
      ))}
    </Box>
  )
}