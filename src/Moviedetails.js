import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import './Moviedetails.css';
// import {movieList} from './staticdata.js';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { API } from "./global";

function Moviedetails(props) {

    const navigate = useNavigate();


  const { movieId } = useParams();
//   console.log(useParams());
  
  // const movieData = movieList[movieId];
//   console.log(movieData);

const [movie, setMovie] = useState({});

  const getmovie = ()=>{
    fetch(`${API}/movies/${movieId}`)
    .then((data)=>data.json())
    .then((result)=>{setMovie(result)

    })
  }

  useEffect(()=> getmovie(),[])

  return (
    <>
    <div className="moviedetails">
      <iframe 
      width="100%" 
      height="500" 
      src={movie.trailer}
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      <div className="moviedetails-block">
        <h1>{movie.name}</h1>
      <p className="summary">
       {movie.summary}
      </p>
      <Button onClick={()=>navigate(-1)} variant="outlined"><ArrowBackIosIcon />Back</Button>
      </div>
      </div>
    </>
  );
}

export default Moviedetails;
