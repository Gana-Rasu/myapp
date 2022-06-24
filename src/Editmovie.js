import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import "./Addmovie.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import {movieList} from './staticdata.js';

function Editmovie() {

    const {id} = useParams();
    // console.log(id);

    const [movie, setMovie] = useState(null);

  const getmovie = ()=>{
    fetch(`https://62ac315ebd0e5d29af1cc1c8.mockapi.io/movies/${id}`)
    .then((data)=>data.json())
    .then((result)=>{setMovie(result)
    })
  }

  useEffect(()=> getmovie(),[]);

  

  return  movie ? <Editmovieform movie={movie}/> : "Loading.." ;

  
}

export default Editmovie;


function Editmovieform({movie}){

    const [poster, setPoster] = useState(movie.poster);
    const [name, setName] = useState(movie.name);
    const [rating, setRating] = useState(movie.rating);
    const [summary, setSummary] = useState(movie.summary);
    const [trailer, setTrailer] = useState(movie.trailer);
  
    const navigate = useNavigate()

    const editMovie = () => {
        const updateMovie = {
          poster: poster,
          name: name,
          rating: rating,
          summary: summary,
          trailer: trailer,
        };
        console.log(updateMovie);
        // setMovieData([...movieData,newMovie])
        fetch(`https://62ac315ebd0e5d29af1cc1c8.mockapi.io/movies/${movie.id}`, {
          method: "PUT",
          body: JSON.stringify(updateMovie),
          headers: { "Content-Type": "application/json" },
        }).then(() => navigate("/app"));
      };

    return (
        <div className="addmovieblock">
        <div className="inputdetails">
            <TextField
            value={name}
              onChange={(event) => setName(event.target.value)}
              label="Name"
              variant="standard"
            />
            <TextField
              value={poster}
              onChange={(event) => setPoster(event.target.value)}
              label="Poster"
              variant="standard"
            />
            <TextField
            value={rating}
              onChange={(event) => setRating(event.target.value)}
              label="Rating"
              variant="standard"
            />
            <TextField
            value={summary}
              onChange={(event) => setSummary(event.target.value)}
              label="summary"
              variant="standard"
            />
    
            <TextField
              value={trailer}
              onChange={(event) => setTrailer(event.target.value)}
              label="Trailer"
              variant="standard"
            />
        </div>
    
            <div className="buttons">
            <Button color="success" variant="outlined" className="myButton" onClick={()=>navigate(-1)}>
            <ArrowBackIosIcon />BACK
            </Button>
    
            <Button color="success" variant="outlined" className="myButton" onClick={editMovie}>
              EDIT MOVIE
            </Button>
            </div>
        </div>
    )
}