import { Box, Button, Container, Stack } from "@mui/material"
import { Welcome } from "../components/Welcome"
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate();
  return (
    <Stack>
      <Container className="container-primary">
        <Welcome />
        <Box>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Stack>
  )
}