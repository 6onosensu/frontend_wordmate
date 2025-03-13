import { Box, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useWords } from "@/context/WordContext";
import { useEffect } from "react";

const stages = ["To Explore", "To Refresh", "Retained"];

const LearningStatistics = () => {
  const { words, loadWords, loading } = useWords();
  const cellStyle = { textAlign: "center", paddingLeft: 0 };

  useEffect(() => {
    loadWords();
  }, [words]); 

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h5">Learning Statistics</Typography>
      <Table>
        <TableHead>
          <TableRow>
            {stages.map((header) => (
              <TableCell key={header} sx={cellStyle}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={stages.length} sx={{ textAlign: "center", py: 2 }}>
                <CircularProgress size={24} />
              </TableCell>
            </TableRow>
          ) : (
            <TableRow>
              {stages.map((status) => (
                <TableCell key={status} sx={cellStyle}>
                  {words?.[status]?.length ?? 0}
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  )
}
export default LearningStatistics;