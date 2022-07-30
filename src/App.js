import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Movies from "./Movies";
import "./App.css";
// import TextField from "@mui/material/TextField";
// import {movieList} from './staticdata.js';
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { API } from "./global";
// import axios from "axios";

function App() {
  const [movieData, setMovieData] = useState([]);

  const getmovies = () => {
    fetch(`${API}/movies`)
      .then((data) => data.json())
      .then((result) => { 
        setMovieData(result);
      });
  };

  useEffect(() => getmovies(), []);

  const deletemovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getmovies());
  };

  // const [poster, setPoster] = useState("");
  // const [name, setName] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");

  const navigate = useNavigate();

  return (
    <>
      {/* <div className="inputdetails">
        <TextField
          onChange={(event) => setName(event.target.value)}
          label="Name"
          variant="standard"
        />
        <TextField
          onChange={(event) => setPoster(event.target.value)}
          label="Poster"
          variant="standard"
        />
        <TextField
          onChange={(event) => setRating(event.target.value)}
          label="Rating"
          variant="standard"
        />
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          label="summary"
          variant="standard"
        />

        <Button
          variant="contained"
          className="myButton"
          onClick={() => {
            const newMovie = {
              poster: poster,
              name: name,
              rating: rating,
              summary: summary,
            };
            console.log(newMovie);
            setMovieData([...movieData, newMovie]);
          }}
        >
          ADD MOVIE
        </Button>
      </div> */}

      <div className="grid">
        {movieData.map((movie, index) => {
          return (
            <Movies
              //  _id is used to cnnect with the heroku and mongo db id instead of local id
              id={movie._id}
              key={movie._id}
              poster={movie.poster}
              name={movie.name}
              rating={movie.rating}
              summary={movie.summary}
              trailer={movie.trailer}
              deleteButton={
                <IconButton
                  style={{ marginLeft: "auto" }}
                  color="error"
                  onClick={() => {
                    deletemovie(movie._id);
                  }}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              }
              editButton={
                <IconButton
                  onClick={() => navigate(`/movies/edit/${movie._id}`)}
                  aria-label="edit"
                >
                  <EditIcon />
                </IconButton>
              }
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
