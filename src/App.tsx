import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"
import Header from "./components/Header";
import theme from "./theme/theme";
import globalStyles from "./theme/globalStyles";
import {  BrowserRouter, } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import { Box } from "@mui/material";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}

      <AuthProvider>
        <BrowserRouter>
          <Box sx={{
            display: "flex",
            flexDirection: "column", 
            minHeight: "100vh"
          }}>
            <Header />

            <Box sx={{ flex: 1 }}>
              <AppRoutes />
            </Box>
            
            <Footer />
          </Box>
      
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
