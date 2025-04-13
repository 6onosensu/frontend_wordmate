import { FC } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { DictionaryAPIResponse } from "@/types/dictionaryApiResponse";

interface DefinitionDetailsProps {
  meaning: DictionaryAPIResponse["meanings"][number];
  definition: DictionaryAPIResponse["meanings"][number]["definitions"][number];
}

const DefinitionDetails: FC<DefinitionDetailsProps> = ({ meaning, definition }) => {
  return (
    <Box sx={{ 
      p: 2, 
      bgcolor: "background.paper", 
      borderRadius: "8px" 
    }}>
      <Typography 
        variant="h6" 
        color="primary"
      >
        {meaning.partOfSpeech}
      </Typography>

      <Divider sx={{ my: 1 }} />

      <Typography>
        <strong>Definition: </strong> 
        {definition.definition}
      </Typography>

      {definition.example && (
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ mt: 1 }}
        >
          <strong>Example: </strong>
          "{definition.example}"
        </Typography>
      )}

      {definition.synonyms?.length > 0 && (
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ mt: 1 }}
        >
          <strong>Synonyms: </strong> 
          {definition.synonyms.join(", ")}
        </Typography>
      )}

      {definition.antonyms?.length > 0 && (
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ mt: 1 }}
        >
          <strong>Antonyms: </strong> 
          {definition.antonyms.join(", ")}
        </Typography>
      )}
    </Box>
  );
};

export default DefinitionDetails;
