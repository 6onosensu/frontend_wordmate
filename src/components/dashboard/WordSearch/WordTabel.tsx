import { FC } from "react";
import { 
  Stack, Table, TableBody, 
  TableCell, TableContainer, 
  TableHead, TableRow, Typography, 
} from "@mui/material";
import addIcon from "../../../assets/add.svg";
import SvgButton from "../../SvgButton";

interface Definition {
  definition: string;
  example?: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

interface WordTableProps {
  meanings: Meaning[];
  onAddDefinition?: (definition: string) => void;
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
                    {def.definition} {def.example && `(${def.example})`}
                  </Typography>
                </TableCell>

                <TableCell>
                  {meaning.synonyms.length > 0 ? (
                      <Stack spacing={1}>
                        {meaning.synonyms.map((syn: string, i: number) => (
                          <Typography key={i} variant="body2">{syn}</Typography>
                        ))}
                      </Stack>
                    ) : "—"}
                </TableCell>
                
                <TableCell>
                  {meaning.antonyms.length > 0 ? (
                      <Stack spacing={1}>
                        {meaning.antonyms.map((ant: string, i: number) => (
                          <Typography key={i} variant="body2">{ant}</Typography>
                        ))}
                      </Stack>
                    ) : "—"}
                </TableCell>
                <TableCell>
                  <SvgButton
                    iconSrc={addIcon}
                    altText="Add to List"
                    onClick={() => onAddDefinition?.(def.definition)}
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
