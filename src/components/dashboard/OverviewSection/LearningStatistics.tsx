import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

const LearningStatictics = () => {
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
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}
export default LearningStatictics;