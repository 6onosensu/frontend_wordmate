import { Button, Container, Typography } from "@mui/material"
import { UserWordTable } from "./UserWordTable";

export const Stage = () => {

  const handleClick = () => {

  }

  return <Container maxWidth="xs" className=".container-primary">
    <Typography variant="h3">
    </Typography>
    <UserWordTable />
    <Button variant="contained" color="primary" onClick={handleClick}>

    </Button>
  </Container>
}