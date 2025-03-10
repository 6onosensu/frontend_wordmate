import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import { FC } from "react"
import SvgButton from "@/components/SvgButton";
import soundIcon from "@/assets/sound.svg";
import { FormattedWord } from "@/types/wordType";

interface UserWordTableProps {
  data: FormattedWord[];
}

export const UserWordTable: FC<UserWordTableProps> = ({ data }) => {
  return (
    <TableContainer sx={{ mt: 3 }}>
      {data.length === 0 ? (
        <Typography variant="h6" align="center">No words to display!</Typography>
      ) : (
        <Table>
          <TableBody>
            {data.map((wordData, index) => (
              <TableRow key={index}>
                <TableCell>{wordData.word}</TableCell> 
                <TableCell>{wordData.definition}</TableCell>
                <TableCell>
                  {wordData.audio && <SvgButton iconSrc={soundIcon} altText="Play Sound" />}
                </TableCell>
              </TableRow>
            ))};
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}