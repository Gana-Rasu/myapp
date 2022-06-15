import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./Home.css";
import App from "./App";
import Notfound from "./Notfound";
import Moviedetails from "./Moviedetails";
import Addmovie from "./Addmovie";
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Home() {

  const navigate = useNavigate();
  return (
    <>

<AppBar position="static">
        <Toolbar>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 2 }}>
          <Button onClick={()=>navigate("/")} variant="inherit">HOME</Button>
          <Button onClick={()=>navigate("/app")}  variant="inherit">MOVIES PAGE</Button>
          <Button onClick={()=>navigate("/addmovie")} variant="inherit">ADD MOVIE</Button>
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
        {/* <h1>WELCOME TO THE APP</h1> */}
        <Routes>
          <Route path="/" />
          {/* id is from the Movies.js file */}
          <Route path="/Movies/:movieId" element={<Moviedetails />} />
          <Route path="/app" element={<App />} />
          <Route path="/addmovie" element={<Addmovie/>}/>
          <Route path="/404" element={<Notfound />} />
        <Route path="*" element={<Navigate replace to={"/404"} />} />
        </Routes>
      </div>
    </>
  );
}

export default Home;
