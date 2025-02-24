
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import theme from "./theme/theme";
import globalStyles from "./theme/globalStyles";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <Login />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
