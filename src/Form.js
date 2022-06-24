import React from "react";
import {useFormik} from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
    email : yup.string().min(5).required(),
    password : yup.string().min(8,"need a bigger password").max(12).required().matches("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"),
})

function Form() {
  const formik = useFormik({
    initialValues: { email: "gana", password: "" },
    onSubmit: (values)=>{console.log(values)},
    validationSchema : formValidationSchema,
  });
  return (
    <>
        <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {/* user touched the form and moves away */}
        {formik.touched.email && formik.errors.email ? formik.errors.email : ""}

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? formik.errors.password : ""}

        <button type="submit" >submit</button>
        </form>
    </>
  );
}

export default Form;
