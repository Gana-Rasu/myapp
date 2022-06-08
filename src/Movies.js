import React from "react";
import { useState } from "react";

import "./Movies.css";

function Movies(props) {
  // films with rating higher than 8.5 is set to green using conditional styling
  const styles = {
    color: props.rating > 8.5 ? "green" : "red",
  };

  // const [toggle,setToggle] = useState(true)

  // to chnage the like and dislike values
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div className="movie">
      <img className="image" src={props.poster} alt="" />
      <div className="block">
        <h1>{props.name}</h1>
        <p style={styles} className="rating">
          ⭐{props.rating}
        </p>
      </div>
      <p className="summary">{props.summary}</p>

      <div className="like">
        <button onClick={() => setLike(like + 1)}>👍 {like} </button>
        <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
      </div>
    </div>
  );
}

export default Movies;


// toggle logic
/* <button onClick={()=>setToggle(!toggle)}>Toggle summary</button>
        {toggle ? <p  className="summary">{props.summary}</p> : null} */
