import { Box, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useWords } from "@/context/WordContext";
import { stages } from "@/utils/data/stages";

const LearningStatistics = () => {
  const { words, loading } = useWords();
  const cellStyle = { textAlign: "center", paddingLeft: 0 };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h5">Learning Statistics</Typography>
      <Table>
        <TableHead>
          <TableRow>
            {stages.map((stage) => (
              <TableCell key={stage.key} sx={cellStyle}>{stage.key}</TableCell>
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
              {stages.map((stage) => (
                <TableCell key={stage.key} sx={cellStyle}>
                  {words?.[stage.key]?.length ?? 0}
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