import React, { useContext } from "react";
import { Formik } from "formik";
import { Redirect } from "react-router-dom";
import RenderSignInForm from "@hotel/components/SignIn/RenderSignInForm";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthProvider";
import { FORGET_PASSWORD_PAGE, API_URL } from "../../settings/constant";
import axios from "axios";
const initialValues = {
  username: "",
  password: "",
  rememberMe: false,
};
const getLoginValidationSchema = () => {
  return Yup.object().shape({
    username: Yup.string().required("Username is Required!"),
    password: Yup.string()
      .min(3, "Password has to be longer than 6 characters!")
      .max(20, "Too Long!")
      .required("Password is required!"),
  });
};

export default () => {
  const { signIn, loggedIn } = useContext(AuthContext);
  if (loggedIn) return <Redirect to={{ pathname: "/" }} />;
  const handleSubmit = (formProps) => {
    const { username, password } = formProps;
    axios
      .get(`${API_URL}/login?username=${username}&password=${password}`)
      .then((res) => {
        let json_response_data = res.data;
        let { data, status } = json_response_data;
        let access_token = data.access_token;
        let user = data.user_record;
        console.log(data);
        if (status === true) {
          console.log("Login success");
          signIn({ access_token, user });
        } else {
          alert("Wrong username or password");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      render={(props) => (
        <RenderSignInForm
          {...props}
          forgetPasswordLink={FORGET_PASSWORD_PAGE}
        />
      )}
      validationSchema={getLoginValidationSchema}
    />
  );
};
