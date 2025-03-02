import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material"
import { FC } from "react"
import SvgButton from "../../SvgButton";
import soundIcon from "../../../assets/sound.svg";

interface wordMeaning {
  word: string;
  audio?: string;
  definition: string;
}

interface UserWordTableProps {
  data?: wordMeaning[];
}

export const UserWordTable: FC<UserWordTableProps> = ({ data }) => {
  
  return (
    <TableContainer sx={{ mt: 3 }}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              Word
            </TableCell>
            <TableCell>
              Definition
            </TableCell>
            <TableCell>
              <SvgButton
                iconSrc={soundIcon}
                altText="Play Sound"
              >
              </SvgButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}