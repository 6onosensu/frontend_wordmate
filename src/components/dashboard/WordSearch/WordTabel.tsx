import { FC } from "react";
import { 
  Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, 
} from "@mui/material";
import addIcon from "@/assets/add.svg";
import SvgButton from "@/components/SvgButton";
import { DictionaryAPIResponse } from "@/types/wordType";

interface WordTableProps {
  meanings: DictionaryAPIResponse["meanings"];
  onAddDefinition?: (
    meaning: DictionaryAPIResponse["meanings"][number],
    definition: DictionaryAPIResponse["meanings"][number]["definitions"][number]
  ) => void;
}

const WordTable: FC<WordTableProps> = ({ meanings, onAddDefinition }) => {
  return (
    <TableContainer sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "21vh" }}>
              <Typography variant="h6">Part of Speech</Typography>
            </TableCell>
            <TableCell sx={{ width: "70vh" }}>
              <Typography variant="h6">Definitions</Typography>
              </TableCell>
            <TableCell><Typography variant="h6">Synonyms</Typography></TableCell>
            <TableCell><Typography variant="h6">Antonyms</Typography></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meanings.map((meaning, index) => (
            meaning.definitions.map((def, i) => (
              <TableRow key={`${index}-${i}`}>
                {i === 0 ? (
                  <TableCell rowSpan={meaning.definitions.length}>
                    {meaning.partOfSpeech}
                  </TableCell>
                ) : null}

                <TableCell>
                  <Typography variant="body2">
                    {def.definition}
                  </Typography>
                </TableCell>

                <TableCell>
                  {def.synonyms.length > 0 ? (
                    <Stack spacing={1}>
                      {def.synonyms.map((syn, i) => (
                        <Typography key={i} variant="body2">{syn}</Typography>
                      ))}
                    </Stack>
                  ) : "—"}
                </TableCell>
                
                <TableCell>
                  {def.antonyms.length > 0 ? (
                    <Stack spacing={1}>
                      {def.antonyms.map((ant, i) => (
                        <Typography key={i} variant="body2">{ant}</Typography>
                      ))}
                    </Stack>
                  ) : "—"}
                </TableCell>
                <TableCell>
                  <SvgButton
                    iconSrc={addIcon}
                    altText="Add to List"
                    onClick={() => onAddDefinition?.(meaning, def)}
                  />
                </TableCell>
              </TableRow>
            ))
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WordTable;
