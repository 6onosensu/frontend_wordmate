import { FC, useState } from "react";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";
import WordHeader from "./WordHeader";
import WordTable from "./WordTabel";

const WordSearch: FC = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

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
 
  return (
    <Container className="container-primary">
      <Paper elevation={0}>
        <Typography variant="h4" gutterBottom>Word Search</Typography>

        <TextField
          label="Enter a word"
          variant="outlined"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          sx={{  width: "80vh"}}
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
            <WordTable meanings={data.meanings} />
          </>
        )}
      </Box>
    </Container>
  );
};

export default WordSearch;
