import { Button, Stack, Typography, Container, Table, TableRow, TableCell, TableBody  } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { playAudio } from "@/utils/audioUtils";
import SvgButton from "@/components/common/SvgButton";
import Sound from "@/assets/sound.svg";
import { FormattedWord } from "@/types/wordType";
import { Fragment, useState } from "react";

const LearningPage = () => {
  const location = useLocation();
  const title = location.state?.title;
  const words: FormattedWord[] = location.state?.words || [];
  const navigate = useNavigate();
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <Stack>
      <Typography variant="h2">Review Your Words:</Typography>
      <Container className="container-primary">
        {words ? (
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
                          onClick={() => playAudio(word.audio)}
                        />
                      )}
                    </TableCell>
                  </TableRow>

                  {expandedRow === index && (
                    <TableRow>
                      <TableCell colSpan={4}>
                        {word.example && (
                          <Typography variant="body2">
                            <strong>Example:</strong> {word.example}
                          </Typography>
                        )}
                        {word.synonyms?.length ? (
                          <Typography variant="body2">
                            <strong>Synonyms:</strong> {word.synonyms.join(", ")}
                          </Typography>
                        ) : null}
                        {word.antonyms?.length ? (
                          <Typography variant="body2">
                            <strong>Antonyms:</strong> {word.antonyms.join(", ")}
                          </Typography>
                        ) : null}
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Typography variant="h5">Your word list is empty.</Typography>
        )}
      </Container>
      <Button
        variant="contained" 
        color="primary" 
        onClick={() => navigate("/FlashCardPage", { state: { words } })}
      >
        {title}
      </Button>
    </Stack>
  );
};

export default LearningPage;