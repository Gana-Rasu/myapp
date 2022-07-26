import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import App from "./App";
import Notfound from "./Notfound";
import Moviedetails from "./Moviedetails";
import Addmovie from "./Addmovie";
import Tictactoe from "./Tictactoe";
import Editmovie from "./Editmovie";
import Form from "./Form";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Mainpage from "./Mainpage";
import { IconButton } from "@mui/material";

function Home() {
  const navigate = useNavigate();

  const [mode, setMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light'
    }
  });

  return (
    <div className="Header">
      <ThemeProvider theme={theme}>
        <Paper elevation={5} style={{ minHeight: "100vh" }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                <Button onClick={() => navigate("/")} variant="inherit">
                  HOME
                </Button>
                <Button onClick={() => navigate("/app")} variant="inherit">
                  MOVIES PAGE
                </Button>
                <Button onClick={() => navigate("/addmovie")} variant="inherit">
                  ADD MOVIE
                </Button>
                <Button
                  onClick={() => navigate("/tictactoe")}
                  variant="inherit"
                >
                  TIC TAC TOE
                </Button>
                {/* <Button
                style={{marginLeft : "auto"}}
                  startIcon={
                    mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                  }
                  onclick={() => setMode(mode === "light" ? "dark" : "light")}
                  variant="inherit"
                >
                  {mode === "light" ? "dark" : "light"} MODE
                </Button> */}
                <IconButton
      onClick={()=>mode? setMode(false) : setMode(true)}
      color="inherit"
      sx={{marginLeft:"auto"}}
      >
        {mode? <Brightness7Icon />:<Brightness4Icon /> }
      </IconButton>
              </Typography>
            </Toolbar>
          </AppBar>
          <div>
            {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/app">Movies Page</Link>
          </li>

          <li>
            <Link to="/addmovie">Add movie</Link>
          </li>
        </ul> */}
            <Routes>
              <Route path="/" element={<Mainpage/>} />
              {/* id is from the Movies.js file */}
              <Route path="/Movies/:movieId" element={<Moviedetails />} />
              <Route path="/app" element={<App />} />
              <Route path="/addmovie" element={<Addmovie/>} />
              <Route path="/tictactoe" element={<Tictactoe />} />
              <Route path="/movies/edit/:id" element={<Editmovie/>} />
              <Route path="/form" element={<Form/>} />
              <Route path="/404" element={<Notfound />} />
              <Route path="*" element={<Navigate replace to={"/404"} />} />
            </Routes>
          </div>
        </Paper>
      </ThemeProvider>

    </div>
  );
}

export default Home;
