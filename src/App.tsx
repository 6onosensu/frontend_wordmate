
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"
import Header from "./components/Header";
import theme from "./theme/theme";
import globalStyles from "./theme/globalStyles";
import {  BrowserRouter, } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}

      <AuthProvider>
        <BrowserRouter>
          <Header />
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
