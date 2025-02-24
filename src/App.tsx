
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./pages/Login";
import Header from "./components/Header";
import theme from "./theme/theme";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Login />
    </ThemeProvider>
  )
}

export default App
