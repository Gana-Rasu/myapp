import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addmovie.css";
// import {movieList} from './staticdata.js';

import {useFormik} from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  poster : yup.string().required(),
  name : yup.string().required(),
  rating : yup.string().required(),
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
    validationSchema : formValidationSchema,
    onSubmit: (newMovie)=>{
      console.log(newMovie);
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
    fetch(`https://62ac315ebd0e5d29af1cc1c8.mockapi.io/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json" },
    }).then(() => navigate("/app"));
  };

  return (
    <>
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
        />
        {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
        <TextField
          // onChange={(event) => setPoster(event.target.value)}
          label="Poster"
          name="poster"
          variant="standard"
          value={formik.values.poster}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.poster && formik.errors.poster ? formik.errors.poster : ""}
        <TextField
          // onChange={(event) => setRating(event.target.value)}
          label="Rating"
          name="rating"
          variant="standard"
          value={formik.values.rating}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""}
        <TextField
          // onChange={(event) => setSummary(event.target.value)}
          label="summary"
          name="summary"
          variant="standard"
          value={formik.values.summary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.summary && formik.errors.summary ? formik.errors.summary : ""}

        <TextField
          // onChange={(event) => setTrailer(event.target.value)}
          label="Trailer"
          name="trailer"
          variant="standard"
          value={formik.values.trailer}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : ""}
    </form>
        <Button type="submit" variant="outlined" className="myButton">
          ADD MOVIE
        </Button>
  
    </div>
    </>
  );
}

export default Addmovie;
