import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import { FC } from "react"
import SvgButton from "@/components/common/SvgButton";
import soundIcon from "@/assets/sound.svg";
import { FormattedWord } from "@/types/wordType";
import { playAudio } from "@/utils/audioUtils";

interface UserWordTableProps {
  data: FormattedWord[];
}

export const UserWordTable: FC<UserWordTableProps> = ({ data }) => {
  const displayedWords = data.slice(0, 10);
  const hasMore = data.length > 10;

  return (
    <TableContainer sx={{ mt: 3 }}>
      {data.length === 0 ? (
        <Typography variant="body2" align="center">No words to display!</Typography>
      ) : (
        <Table>
          <TableBody>
            {displayedWords.map((wordData, index) => (
              <TableRow key={index}>
                <TableCell>{wordData.word}</TableCell> 
                <TableCell>{wordData.definition}</TableCell>
                <TableCell>
                  {wordData.audio && 
                    <SvgButton 
                      iconSrc={soundIcon}
                      altText="Play Sound"
                      onClick={() => playAudio(wordData.audio)}
                    />
                  }
                </TableCell>
              </TableRow>
            ))}
            {hasMore && (
              <TableRow>
                <TableCell colSpan={3} align="center">. . .</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  )
}