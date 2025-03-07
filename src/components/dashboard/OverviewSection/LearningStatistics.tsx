import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useWords } from "@/context/WordContext";

const LearningStatictics = () => {
  const { words, } = useWords();

  return (
    <Box sx={{ textAlign: "center"}}>
      <Typography variant="h5">Learning Statistics</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>To Learn</TableCell>
            <TableCell>To Repeat</TableCell>
            <TableCell>Learned</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{words["to learn"]?.length || 0}</TableCell>
            <TableCell>{words["to repeat"]?.length || 0}</TableCell>
            <TableCell>{words["learned"]?.length || 0}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}
export default LearningStatictics;