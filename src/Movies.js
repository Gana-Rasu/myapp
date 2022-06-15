import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
// import Stack from '@mui/material/Stack';
// import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from "@mui/icons-material/Info";
import "./Movies.css";
import Badge from "@mui/material/Badge";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function Movies(props) {
  // films with rating higher than 8.5 is set to green using conditional styling
  const styles = {
    color: props.rating > 8.5 ? "green" : "red",
  };

  // const [toggle,setToggle] = useState(true)

  // to chnage the like and dislike values
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const navigate = useNavigate();

  return (
    <div className="movie">
      <img className="image" src={props.poster} alt="" />
      <div className="block">
        <h1>{props.name}</h1>
        <p style={styles} className="rating">
          ⭐{props.rating}
        </p>
      </div>
      {/* <button onClick={()=>setToggle(!toggle)}>Toggle summary</button>
        {toggle ? <p  className="summary">{props.summary}</p> : null}  */}
      <p className="summary">{props.summary}</p>
      <div className="footerblock">
        <div className="like">

          {/* <button onClick={() => setLike(like + 1)}>👍 {like} </button> */}
        <IconButton
          color="primary"
          aria-label="movie-details"
          onClick={() => setLike(like + 1)}
        >
          <Badge badgeContent={like} color="primary">
          👍 
          </Badge> 
          
        </IconButton>


       {/* <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button> */}
          <IconButton
          color="primary"
          aria-label="movie-details"
          onClick={() => setDislike(dislike + 1)}
        >
          <Badge badgeContent={dislike} color="error">
          👎
          </Badge> 
        </IconButton>
        
        </div>
        {/* the id is passed as a prop from the app.js file */}
        {/* material ui */}
        <IconButton
          color="error"
          aria-label="movie-details"
          onClick={() => navigate(`/Movies/${props.id}`)}
        >
          <InfoIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Movies;

// toggle logic
/* <button onClick={()=>setToggle(!toggle)}>Toggle summary</button>
        {toggle ? <p  className="summary">{props.summary}</p> : null} */
