import { Box } from "@mui/material"
import { Stage } from "./Stage"
import { WordProvider } from "@/context/WordContext"

export const LearningStages = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <WordProvider status="To Explore">
        <Stage stage="To Explore" title="Explore!" />
      </WordProvider>

      <WordProvider status="To Refresh">
        <Stage stage="To Refresh" title="Refresh!" />
      </WordProvider>

      <WordProvider status="Retained">
        <Stage stage="Retained" title="Review!" />
      </WordProvider>
    </Box>
  )
}