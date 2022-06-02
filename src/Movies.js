import React from "react";

import "./Movies.css";

function Movies(props) {
  return (
    
      <div className="movie">
 
    <img className="image" src={props.poster} alt="" />
        <div className="block">
          <h1>{props.name}</h1>
          <p className="rating">⭐{props.rating}</p>
        </div>
        <p className="summary">{props.summary}</p>
    </div> 

  );
}

export default Movies;

