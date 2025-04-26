import { Button, Stack, Typography, Container, Table, TableRow, TableCell, TableBody  } from "@mui/material";
import { playAudio } from "@/utils/audioUtils";
import SvgButton from "@/components/common/SvgButton";
import Sound from "@/assets/sound.svg";
import { FormattedWord } from "@/types/wordType";
import { Fragment } from "react";
import { Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import useLearningPage from "@/hooks/useLearningPage";


const LearningPage = () => {
  const {
    words,
    title,
    expandedRow,
    handleRowClick,
    handleNavigate,
  } = useLearningPage();
  return (
    <Stack>
      <Typography variant="h2">Review Your Words:</Typography>
      <Container className="container-primary">
        {words.length > 0 ? (
          <Table>
            <TableBody>
              {words.slice(0, 10).map((word: FormattedWord, index: number) => (
                <Fragment key={index}>
                  <TableRow 
                    onClick={() => handleRowClick(index)} 
                    sx={{ cursor: "pointer", "&:hover": { backgroundColor: "#f5f5f5" } }}
                  >
                    <TableCell>
                      <Typography variant="h5">{word.word}</Typography>
                    </TableCell>
                    <TableCell sx={{ width: "5%" }}>
                      <Typography variant="body2">{word.partOfSpeech}</Typography>
                    </TableCell>
                    <TableCell sx={{ width: "75%" }}>
                      <Typography variant="body1">{word.definition}</Typography>
                    </TableCell>
                    <TableCell sx={{ width: "5%" }}>
                      {word.audio && (
                        <SvgButton 
                          iconSrc={Sound}
                          altText="Play Sound!"
                          onClick={(e) => {
                            e.stopPropagation(); 
                            playAudio(word.audio!);
                          }}
                        />
                      )}
                    </TableCell>
                  </TableRow>

                  {expandedRow === index && (
                    <TableRow>
                      <TableCell colSpan={4}>
                        {word.example && (
                          <Typography variant="body2">
                            <strong>Example: </strong> 
                            "{word.example}"
                          </Typography>
                        )}

                        {(word.synonyms ?? [])?.length > 0 && (
                          <Typography variant="body2">
                            <strong>Synonyms: </strong>
                            {(word.synonyms ?? []).map((syn, i) => (
                              <span key={i}>
                                {syn}
                                {i < (word.synonyms?.length ?? 0) - 1 ? ", " : ""}
                              </span>
                            ))}
                          </Typography>
                        )}

                        {(word.antonyms ?? [])?.length > 0 && (
                          <Typography variant="body2">
                            <strong>Antonyms: </strong> 
                            {(word.antonyms ?? []).map((ant, i) => (
                              <span key={i}>
                                {ant}
                                {i < (word.antonyms?.length ?? 0) - 1 ? ", " : ""}
                              </span>
                            ))}
                          </Typography>
                        )}
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
              ))}
            </TableBody>
          </Table>
        ) : ( 
          <Typography variant="h5">
            Your word list has 0 words!
            <MuiLink component={RouterLink} to="/dashboard#search">Add more here</MuiLink>
          </Typography>
        )}
      </Container>
      <Button
        variant="contained" 
        color="primary" 
        onClick={handleNavigate}
      >
        {words.length > 0 ? title : "Go Back"}
      </Button>
    </Stack>
  );
};

export default LearningPage;