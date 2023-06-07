import React from "react";
import "./LoginForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import yuppassword from "yup-password";

const LoginForm = () => {
  yuppassword(yup);
  const formvalidationSchema = yup.object().shape({
    username: yup
      .string()
      .required("please enter your username")
      .min(6, "min 6 character required"),
    email: yup
      .string()
      .required("Please Enter Your Email")
      .email("please Enter valid Email"),

    mobileNo: yup
      .string()
      .length(10)
      .minNumbers(10)
      .required("Please Enter Your Mobile Number "),

    password: yup
      .string()
      .min(8)
      .max(16)
      .required("Please Enter Your Password ")
      .minLowercase(1, "Min 1 Lowercase requried")
      .minUppercase(1, "Min 1 Uppercase requried")
      .minNumbers(1, "Min 1 Digit is requried")
      .minSymbols(1, "Min Special Chracter is Requried"),
    confirmpassword: yup
      .string()
      .required("Please Enter Your confirm password ")
      .oneOf([yup.ref("password")], "password Must Match"),
  });
  return (
    <div className="formContainer">
      <div className="formHeading">
        <h1>Login Form</h1>
      </div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          mobileNo: "",
          password: "",
          confirmpassword: "",
        }}
        validationSchema={formvalidationSchema}
        onSubmit={(value, action) => {
          console.log(value);
          action.resetForm(); //after submit form reset the all values
          alert("congratulations Your Form has been Successfully Submitted");
        }}
      >
        <Form className="loginForm">
          <Field type="text" placeholder="Enter Your Name" name="username" />
          <p>
            <ErrorMessage name="username" />
          </p>

          <Field type="email" placeholder="Enter Your Email" name="email" />
          <p>
            <ErrorMessage name="email" />
          </p>

          <Field
            type="number"
            placeholder="Enter Your Mobile Number"
            name="mobileNo"
          />
          <p>
            <ErrorMessage name="mobileNo" />
          </p>

          <Field
            type="password"
            placeholder="Enter Your Password"
            name="password"
          />
          <p>
            <ErrorMessage name="password" />
          </p>

          <Field
            type="password"
            placeholder="Confirm Your Password"
            name="confirmpassword"
          />
          <p>
            <ErrorMessage name="confirmpassword" />
          </p>

          <div className="btn">
            <Field type="submit" value="submit" />
            <Field type="reset" value="Reset" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
