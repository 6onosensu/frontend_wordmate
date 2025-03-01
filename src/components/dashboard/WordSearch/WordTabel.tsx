import { FC } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, } from "@mui/material";
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

const WordTable: FC<WordTableProps> = () => {
  return (
    <TableContainer sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "21vh" }}>
              <Typography variant="h6">Part of Speech</Typography>
            </TableCell>
            <TableCell sx={{ width: "60vh" }}><Typography variant="h6">Definitions</Typography></TableCell>
            <TableCell><Typography variant="h6">Synonyms</Typography></TableCell>
            <TableCell><Typography variant="h6">Antonyms</Typography></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow >
            <TableCell>

            </TableCell>
            <TableCell>
              
            </TableCell>
            <TableCell>
              
            </TableCell>
            
            <TableCell>
              
            </TableCell>
            <TableCell>
              <SvgButton
                iconSrc={addIcon}
                altText="Add to List"
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WordTable;
