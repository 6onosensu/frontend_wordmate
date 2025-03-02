import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material"
import { FC } from "react"
import SvgButton from "../../SvgButton";
import soundIcon from "../../../assets/sound.svg";

interface Word {
  word: string;
  audio?: string;
  definition: string;
}

interface UserWordTableProps {
  data: Word[];
}

export const UserWordTable: FC<UserWordTableProps> = ({ data }) => {
  
  return (
    <TableContainer sx={{ mt: 3 }}>
      <Table>
        <TableBody>
          {data.map((word, index) => (
            <TableRow key={index}>
              <TableCell>{word.word}</TableCell>
              <TableCell>{word.definition}</TableCell>
              <TableCell>
                {word.audio && <SvgButton iconSrc={soundIcon} altText="Play Sound" />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}