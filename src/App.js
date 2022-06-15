import React from 'react';
import { useState } from 'react';
import Movies from './Movies';
import "./App.css";
import TextField from '@mui/material/TextField';
import {movieList} from './staticdata.js';
import Button from '@mui/material/Button';
import Home from './Home';
import Addmovie from './Addmovie';

function App() {
 
const [movieData,setMovieData] = useState(movieList);
const [poster,setPoster] = useState("");
const [name,setName] = useState("");
const [rating,setRating] = useState("");
const [summary,setSummary] = useState("");


  return (
    <>
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
      console.log(newMovie)
      setMovieData([...movieData,newMovie])
    }} >ADD MOVIE</Button>
    </div>
    
    <div className='grid'>
   {movieData.map((movie,index)=>{
    //  the id is sent as a prop so each movie can have a seperate page for it's detail so a specific id is required
   return <Movies id={index} key={index} poster={movie.poster} name={movie.name} rating={movie.rating} summary={movie.summary} trailer={movie.trailer}/>
   }
     
   )}
    </div>
    
    </>
  );
}

export default App;

