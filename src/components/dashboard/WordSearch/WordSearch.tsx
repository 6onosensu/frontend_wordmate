import { FC, useState } from "react";
import { Container, TextField, Button, Typography, List, ListItem, Box } from "@mui/material";

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
    <Container maxWidth="xl">
      <Box sx={{ mt: 2, display: "flex", flexDirection: "column", alignItems: "center", width: "40vh"}}>
        <Typography variant="h4" gutterBottom>Word Search</Typography>

        <TextField
          label="Enter a word"
          variant="outlined"
          fullWidth
          value={word}
          onChange={(e) => setWord(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button variant="contained" color="primary" onClick={handleSearch} >
          Search
        </Button>
      </Box>
      
      <Box sx={{ minWwidth: "200vh", textAlign: "left", mt: 2,}}>
        {error && <Typography color="error">{error}</Typography>}
        {!data && (
          <Container sx={{ textAlign: "left", mt: 2,}}>
            <Typography variant="h4" gutterBottom>Here would be an adding word</Typography>
          </Container>
        )}
        {data && (
          <Container sx={{ textAlign: "left", mt: 2,}}>
            <Typography variant="h5">{data.word} <i>({data.phonetic || "—"})</i></Typography>

            {data.phonetics?.map((p: any, index: number) => 
              p.audio && <audio key={index} controls src={p.audio} style={{ marginLeft: "10px" }} />
            )}

            <List>
              {data.meanings.map((meaning: any, idx: number) => (
                <ListItem key={idx}>
                  <Typography variant="body1">
                    <strong>{meaning.partOfSpeech}:</strong> {meaning.definitions[0].definition}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Container>
        )}
      </Box>
    </Container>
  );
};

export default WordSearch;
