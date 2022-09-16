import React, { useState, useEffect } from "react";
import { IEmp } from "./interface";
import "./empdetails.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  desgn: "",
  exp: 0,
  id: 0,
};

const validationSchema = Yup.object({
  name: Yup.string().required("This field is Required"),
  desgn: Yup.string().required("This field is Required"),
  exp: Yup.number().required("This field is Required"),
});

const EmpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values , {resetForm}) => {
      console.log("Form data", values);

      axios
        .post("https://62fb40bbabd610251c040f32.mockapi.io/Employee", values)
        .then((response: any) => {
          console.log(response, "2");
        })
        .catch((err: number | string) => {
          console.log(err);
        });
      resetForm();
    },
    validationSchema,
  });

  return (
    <>
      <div className="body">
        <div className="header">
          <h1>Add Employee</h1>
        </div>{" "}
        <form onSubmit={formik.handleSubmit}>
          <div className="form">
            <label> Enter Name : </label>
            <input
              type="text"
              name="name"
              placeholder="Please enter name ..... "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error" style={{ color: "red" }}>
                {formik.errors.name}
              </div>
            ) : null}
            <label> Enter Designation :</label>
            <input
              type="text"
              name="desgn"
              placeholder="Ex:Clerk..... "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.desgn}
            />
            {formik.touched.desgn && formik.errors.desgn ? (
              <div className="error" style={{ color: "red" }}>
                {formik.errors.desgn}
              </div>
            ) : null}
            <label> Enter Experience :</label>
            <input
              type="text"
              name="exp"
              placeholder="Please enter years of experience ..... "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.exp}
            />
            {formik.touched.exp && formik.errors.exp ? (
              <div className="error" style={{ color: "red" }}>
                {formik.errors.exp}
              </div>
            ) : null}
            <button type="submit">Add Employee</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmpForm;
function resetForm(arg0: { values: string }) {
  throw new Error("Function not implemented.");
}
