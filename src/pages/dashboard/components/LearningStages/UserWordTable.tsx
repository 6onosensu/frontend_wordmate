import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
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
    <Box sx={{ width: "100%", transition: "width 0.3s ease" }}>
      <TableContainer sx={{ mt: 3, overflow: "visible", maxHeight: "none" }}>
        <Table>
          <TableBody>
            {displayedWords.map((wordData, index) => (
              <TableRow key={index}>
                <TableCell sx={{ width: "25%" }}>{wordData.word}</TableCell> 
                <TableCell sx={{ width: "65%" }}>{wordData.definition}</TableCell>
                <TableCell sx={{ width: "10%" }}>
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
          </TableBody>
        </Table>
        {hasMore && (
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h3">. . .</Typography>
          </Box>
        )}
      </TableContainer>
    </Box>
  )
}