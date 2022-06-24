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
// import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

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
       <Card sx={{ maxWidth: 300,height : 'min-content' }} >

       <CardMedia
        component="img"
        height="100%"
        image={props.poster} 
        alt="poster"
      />
      <CardContent>
      <h1>{props.name}</h1>
      <div className="block">
        <p style={styles} className="rating">
          ⭐{props.rating}
        </p>
        <IconButton
          color="primary"
          aria-label="movie-details"
          onClick={() => navigate(`/Movies/${props.id}`)}
        >
          <InfoIcon />
        </IconButton>
      </div>
      {/* <button onClick={()=>setToggle(!toggle)}>Toggle summary</button>
        {toggle ? <p  className="summary">{props.summary}</p> : null}  */}
      <p className="summary">{props.summary}</p>


      </CardContent>
      <CardActions>
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

        {props.deleteButton}
        {props.editButton}
        
        </div>
        </CardActions>
        {/* the id is passed as a prop from the app.js file */}
        {/* material ui */}
        </Card>
    </div>
    
  );
}

export default Movies;

// toggle logic
 /* <button onClick={()=>setToggle(!toggle)}>Toggle summary</button>

        {toggle ? <p  className="summary">{props.summary}</p> : null}  */
