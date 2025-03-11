import { FC } from "react";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";
import WordHeader from "./WordHeader";
import WordTable from "./WordTabel";
import { useWordSearch } from "@/hooks/useWordSearch";

const WordSearch: FC = () => {
  const { word, setWord, data, error, loading, handleSearch, handleAddDefinition } = useWordSearch();

  return (
    <Container className="container-primary" id="searchword">
      <Paper elevation={0}>
        <Typography variant="h2"  sx={{
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

        <Button variant="contained" color="primary" onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
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
