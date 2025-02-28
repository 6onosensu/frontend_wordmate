import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
/*
import { useFetch } from "../../../hooks/useFetch";
import { useAuth } from "../../../hooks/useAuth";
import { fetchWithAuth } from "../../../services/apiService";

interface LearningStats {
  toLearn: number;
  toRepeat: number;
  learned: number;
}
*/
const LearningStatictics = () => {
  /*
  const { token } = useAuth();

  ////const fetchStats = () => fetchWithAuth<LearningStats>("/learning/stats", token!);
  const { data: stats, loading, error } = useFetch(fetchStats);

  if (loading) return <CircularProgress color="primary" />;
  if (error) return <Typography color="error">{error}</Typography>;*/
  return (
    <Box sx={{ textAlign: "center", minWidth: "300px", }}>
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