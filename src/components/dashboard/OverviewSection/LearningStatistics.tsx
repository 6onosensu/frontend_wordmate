import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useWords } from "@/context/WordContext";

const LearningStatistics = () => {
  const { words, } = useWords();

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h5">Learning Statistics</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>To Explore</TableCell>
            <TableCell>To Refresh</TableCell>
            <TableCell>Retained</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{words["To Explore"]?.length || 0}</TableCell>
            <TableCell>{words["To Refresh"]?.length || 0}</TableCell>
            <TableCell>{words["Retained"]?.length || 0}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}
export default LearningStatistics;