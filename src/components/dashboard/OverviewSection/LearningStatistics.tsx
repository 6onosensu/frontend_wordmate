import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useWords } from "@/context/WordContext";

const LearningStatistics = () => {
  const { words, } = useWords();
  const cellStyle = { 
    textAlign: "center", 
    paddingLeft: 0 
  };
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h5">Learning Statistics</Typography>
      <Table>
        <TableHead>
          <TableRow>
            {["To Explore", "To Refresh", "Retained"].map((header) => (
              <TableCell key={header} sx={cellStyle}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {["To Explore", "To Refresh", "Retained"].map((status) => (
              <TableCell key={status} sx={cellStyle}>
                {words[status]?.length || 0}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}
export default LearningStatistics;