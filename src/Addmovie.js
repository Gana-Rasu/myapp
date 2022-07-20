import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addmovie.css";
// import {movieList} from './staticdata.js';

import {useFormik} from "formik";
import * as yup from "yup";
import { API } from "./global";


const movieValidationSchema = yup.object({
  poster : yup.string().required(),
  name : yup.string().required(),
  rating : yup.number().required(),
  summary : yup.string().required(),
  trailer : yup.string().required(),
})

function Addmovie() {
  // const [poster, setPoster] = useState("");
  // const [name, setName] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      poster:"",
      name: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema : movieValidationSchema,
    onSubmit: (newMovie)=>{
      console.log("onSubmit",newMovie);
      addmovie(newMovie);
    },
  });


  const addmovie = (newMovie) => {
    // const newMovie = {
    //   poster: poster,
    //   name: name,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer,
    // };
    // console.log(newMovie);
    // setMovieData([...movieData,newMovie])
    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json" },
    }).then(() => navigate("/app"))
    .catch((e) => console.log("ERROR"));
  };


  return (
    <div className="addmovieblock">
    <form onSubmit={formik.handleSubmit} className="inputdetails">
        <TextField
          // onChange={(event) => setName(event.target.value)}
          label="Name"
          name="name"
          variant="standard"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name}
          helperText= {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
          // helperText= {formik.touched.name && formik.errors.name } better short
        />
       
        <TextField
          // onChange={(event) => setPoster(event.target.value)}
          label="Poster"
          name="poster"
          variant="standard"
          value={formik.values.poster}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.poster && formik.errors.poster}
          helperText= {formik.touched.poster && formik.errors.poster ? formik.errors.poster : ""}
        />
   
        
        <TextField
          // onChange={(event) => setRating(event.target.value)}
          label="Rating"
          name="rating"
          variant="standard"
          value={formik.values.rating}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.rating && formik.errors.rating}
          helperText= {formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""}
        />
      
        <TextField
          // onChange={(event) => setSummary(event.target.value)}
          label="summary"
          name="summary"
          variant="standard"
          value={formik.values.summary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.summary && formik.errors.summary}
          helperText= {formik.touched.summary && formik.errors.summary ? formik.errors.summary : ""}
        />
      

        <TextField
          // onChange={(event) => setTrailer(event.target.value)}
          label="Trailer"
          name="trailer"
          variant="standard"
          value={formik.values.trailer}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.trailer && formik.errors.trailer}
          helperText= {formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : ""}
        />
        {formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : ""}

        <Button type="submit" variant="outlined"  className="myButton">
          ADD MOVIE
        </Button>
    </form>
        
  
    </div>
  );
}

export default Addmovie;


 