import { FC, useState } from "react";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";
import WordHeader from "./WordHeader";
import WordTable from "./WordTabel";

const WordSearch: FC = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [savedDefinitions, setSavedDefinitions] = useState<string[]>([]);

  const handleSearch = async () => {
    if (!word) return;
    setError(null);
    setData(null);

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) {
        throw new Error("Word not found");
      }
      const result = await response.json();
      setData(result[0]);
    } catch (err) {
      setError("Word not found, try another one.");
    }
  };
 
  const handleAddDefinition = (definition: string) => {
    setSavedDefinitions((prev) => [...prev, definition]);
    console.log(`Added definition: ${definition}`);
  };

  return (
    <Container className="container-primary">
      <Paper elevation={0}>
        <Typography variant="h4"  sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          minWidth: '200px',
          display: 'block',
        }} >Word Search</Typography>

        <TextField
          label="Enter a word"
          variant="outlined"
          fullWidth
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />

        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Paper>
      <Box>
        {error && <Typography color="error">{error}</Typography>}
        {data && (
          <>
            <WordHeader data={data} />
            <WordTable meanings={data.meanings} onAddDefinition={handleAddDefinition}/>
          </>
        )}
      </Box>
    </Container>
  );
};

export default WordSearch;
