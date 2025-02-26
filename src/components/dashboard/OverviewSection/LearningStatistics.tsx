import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

const LearningStatictics = () => {
  return (
    <Box sx={{ textAlign: "center", maxWidth: "300px", }}>
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
            <TableCell>20</TableCell>
            <TableCell>15</TableCell>
            <TableCell>50</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}
export default LearningStatictics;