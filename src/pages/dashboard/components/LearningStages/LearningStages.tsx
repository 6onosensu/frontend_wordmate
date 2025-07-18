import { Box } from "@mui/material"
import { Stage } from "./Stage"
import { stages } from "@/utils/data/stages";

export const LearningStages = () => {
  return (
    <Box 
      display="flex" 
      gap={1} 
      alignItems="start"
      justifyContent="center"
      width="100%"
      flexWrap="nowrap"
    >
      {stages.map(({ key, title }) => (
        <Stage key={key} stageKey={key} title={title} />
      ))}
    </Box>
  );
};
