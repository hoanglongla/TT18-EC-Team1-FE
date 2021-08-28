import React, { useContext } from "react";
import { Formik } from "formik";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";
import RenderSignUpForm from "@hotel/components/SignUp/RenderSignUpForm";
import { AuthContext } from "../../context/AuthProvider";
import MyRenderSignUpForm from "./MyRenderSignUpForm";
import { MyFormWrapper } from "./SignUp.style";
import axios from "axios";
import { API_URL } from "../../settings/constant";

const initialValues = {
  // email: "",
  username: "",
  // phoneNumber: "",
  password: "",
  confirmPassword: "",
  // termsAndConditions: false,
  // rememberMe: false,
};

const formStyle = {
  border: "1px solid gray",
  marginTop: "10px",
  height: "6vh",
  borderRadius: "3px",
};

const loginButtonStyle = {
  height: "6vh",
  borderRadius: "3px",
  backgroundColor: "#0C8A8F",
  textColor: "white",
  marginTop: "14px",
};

const getRegisterValidationSchema = () => {
  return Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Username is Required!"),
    // email: Yup.string()
    //   .email("Invalid email")
    //   .required("Email is Required!"),
    password: Yup.string()
      .min(6, "Password has to be longer than 6 characters!")
      .max(20, "Too Long!")
      .required("Password is required!"),
    // phoneNumber: Yup.string()
    //   .min(10, "Too short!")
    //   .max(11, "Too long!")
    //   .required("Phone number is require!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords are not the same!")
      .required("Password confirmation is required"),
    // termsAndConditions: Yup.bool()
    //   .test(
    //     "consent",
    //     "You have to agree with our Terms and Conditions!",
    //     (value) => value === true
    //   )
    //   .required("You have to agree with our Terms and Conditions!"),
  });
};

const signUp = async (params) => {
  // const API_URL = "http://econail.localhost/api";
  let checkLogined = false;

  let res = await axios.post(`${API_URL}/g/create_customer`, {
    username: params.username,
    email: `${params.username}@abc.com`,
    password: params.password,
    fullname: "Khách hàng",
    phone: "0123456789",
  });

  console.log("SignUp check: ", res);

  console.log("signup status1: ", res.data.status);
  if (res.data.status) {
    console.log("signup status2: ", res.data.status);
    checkLogined = true;
  }

  console.log("checklogined: ", checkLogined);
  return checkLogined;
  // setUser(fakeUserData);
  // setToken(fakeToken);
  // addItem("token", fakeToken);
  // setLoggedIn(false);
};

export default ({ onShowModal }) => {
  // const { signUp, loggedIn1 } = useContext(AuthContext);
  const { signIn, loggedIn } = useContext(AuthContext);
  // if (loggedIn) return <Redirect to={{ pathname: "/" }} />;
  // if (loggedIn) return <Redirect to={{ pathname: "/" }} />;
  const handleSubmit = (values, { setSubmitting }) => {
    signUp(values).then((tmp) => {
      if (tmp) {
        signIn(values);
        onShowModal();
      }
    });

    // console.log(values);
    setTimeout(() => {
      setSubmitting(false);
    }, 500);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={getRegisterValidationSchema}
      render={MyRenderSignUpForm}
    />
  );
};
