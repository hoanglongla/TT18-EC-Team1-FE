import React, { Component, useContext } from "react";
import { SignInFormWrapper } from "./SignIn.style";
import { Formik } from "formik";
// import * as EmailValidation from "email-validator";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../../context/AuthProvider";

// const handleLogin = (values) => {
//   api
//     .get(
//     )
//     .then((res) => {
//       console.log(res.data);
//     });
// };

const formStyle = {
  border: "1px solid gray",
  marginTop: "10px",
  height: "6vh",
  borderRadius: "3px",
  width: "100%",
};

const loginButtonStyle = {
  height: "6vh",
  borderRadius: "3px",
  backgroundColor: "#0C8A8F",
  textColor: "white",
  marginTop: "14px",
};

const SignInForm = () => {
  const { signIn, loggedIn } = useContext(AuthContext);
  if (loggedIn) return <Redirect to={{ pathname: "/" }} />;

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      //call api here
      onSubmit={(values, { setSubmitting }) => {
        // handleLogin(values);
        signIn(values);
        localStorage.setItem("data", JSON.stringify(values));
        setTimeout(() => {
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string()
          .required()
          .min(4, "password is too short"),
        //   .matches(),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <SignInFormWrapper>
            <form onSubmit={handleSubmit}>
              <input
                style={formStyle}
                name="username"
                placeholder="Username"
                type="text"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.username && touched.username && "error"}
              />
              {errors.username && touched.username && (
                <div className="input-feedback">{errors.username}</div>
              )}
              <input
                style={formStyle}
                name="password"
                placeholder="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
              <button
                style={loginButtonStyle}
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>
            </form>
          </SignInFormWrapper>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
