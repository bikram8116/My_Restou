import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import PrivateRoute from "./pages/PrivateRoute";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CardActionArea } from "@mui/material";

const theme = createTheme({
  components: { MuiCardActionArea: { styleOverrides: { root: { "&:hover": { backgroundColor: "transparent", }, "&:focus": { outline: "none", }, }, }, }, },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />

            {/* Protected routes */}
            <Route path="/about" element={<PrivateRoute> <About /> </PrivateRoute>} />
            <Route path="/contact" element={<PrivateRoute> <Contact /> </PrivateRoute>} />
            <Route path="/menu" element={<PrivateRoute> <Menu /> </PrivateRoute>} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
