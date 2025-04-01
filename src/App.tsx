import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"
import Header from "@/components/common/Header";
import theme from "@/theme/theme";
import globalStyles from "@/theme/globalStyles";
import {  BrowserRouter, } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import AppRoutes from "@/routes/AppRoutes";
import Footer from "@/components/common/Footer";
import { Box } from "@mui/material";
import { WordProvider } from "./context/WordContext";
import { SnackbarProvider } from "./context/SnackbarContext";
import { RandomWordsProvider } from "./context/RandomWordsContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      
      <BrowserRouter>
        <SnackbarProvider>
          <AuthProvider>
            <WordProvider>
              <RandomWordsProvider>
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
              </RandomWordsProvider>
            </WordProvider>
          </AuthProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
