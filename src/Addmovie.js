import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {movieList} from './staticdata.js';

function Addmovie(){

    
const [movieData,setMovieData] = useState(movieList);
const [poster,setPoster] = useState("");
const [name,setName] = useState("");
const [rating,setRating] = useState("");
const [summary,setSummary] = useState("");
    return(<>

<div className='inputdetails'>
  
  <TextField onChange={(event) => setName(event.target.value)}  label="Name" variant="standard" />
  <TextField onChange={(event) => setPoster(event.target.value)}  label="Poster" variant="standard" />
  <TextField onChange={(event) => setRating(event.target.value)}  label="Rating" variant="standard" />
  <TextField onChange={(event) => setSummary(event.target.value)}  label="summary" variant="standard" />


  <Button variant="contained" className='myButton' onClick={()=>{
    const newMovie = {
      poster:poster,
      name:name,
      rating:rating,
      summary:summary
    };
    console.log(movieData)
    setMovieData([...movieData,newMovie])
  }} >ADD MOVIE</Button>
  </div>
  
    </>)
}

export default Addmovie;