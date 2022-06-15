import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Moviedetails.css';
import {movieList} from './staticdata.js';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Moviedetails(props) {

    const navigate = useNavigate();

  const styles = {
    color: props.rating > 8.5 ? "green" : "red",
  };

  const { movieId } = useParams();
//   console.log(useParams());
  
  const movieData = movieList[movieId];
//   console.log(movieData);


  return (
    <>
      {/* this the movie page {movieId} */}

    <div className="moviedetails">
      <iframe 
      width="100%" 
      height="500" 
      src={movieData.trailer}
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      <div className="moviedetails-block">
        <h1>{movieData.name}</h1>
        <p style={styles}>⭐{movieData.rating}</p>
      </div>
      <p className="summary">
       {movieData.summary}
      </p>
      <Button onClick={()=>navigate(-1)} variant="outlined"><ArrowBackIosIcon />Back</Button>

      </div>
    </>
  );
}

export default Moviedetails;
