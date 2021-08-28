import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { API_URL } from "../settings/constant";

export const AuthContext = React.createContext();

const fakeUserData = {
  id: 1,
  name: "Jhon Doe",
  avatar: "",
  roles: ["USER", "ADMIN"],
};

/**
 * We have used Fake JWT token from "jwt.io"
 * This is a sample token to show auth is working
 * Your token will come from your server when user successfully loggedIn.
 */

const fakeToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoidGFyZXEgam9iYXllcmUiLCJyb2xlcyI6ImFkbWluIn0.k74_B-zeWket405dIAt018mnQFMh_6_BTFpjB77HtRQ";

const addItem = (key, value = "") => {
  /**
   *  Using the local storage code....
   */
  // if (key) localStorage.setItem(key, value);

  /**
   *  Using the Cookies code...
   */
  if (key) Cookies.set(key, value, { expires: 7 });
};

const clearItem = (key) => {
  /**
   *  Using the local storage code....
   */
  // localStorage.removeItem(key);

  /**
   *  Using the Cookies code...
   */
  Cookies.remove(key);
};

const isValidToken = () => {
  /**
   *  Using the local storage code....
   */
  // const token = localStorage.getItem('token');

  /**
   *  Using the Cookies code...
   */
  const token = Cookies.get("token");
  // JWT decode & check token validity & expiration.
  if (token) return true;
  return false;
};

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(isValidToken());
  // const [loggedOut, setLoggedOut] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  //Api call here
  const [API, setAPI] = useState(null);

  const signIn = (params) => {
    /**
     * Make post request here to authenticate with fetch
     * if returns true then change the state
     */

    // const API_URL = "http://econail.localhost/api";
    axios
      .get(
        `${API_URL}/login?username=${params.username}&password=${params.password}`
      )
      .then((res) => {
        console.log("Signin check: ", res.data);
        if (res.data.status === true) {
          setUser(res.data.data.user_record);
          setToken(res.data.data.access_token);
          addItem("token", res.data.data.access_token);

          localStorage.setItem("loginedUser", JSON.stringify(res.data.data));

          setLoggedIn(true);
        } else setLoggedIn(false);
      });
    //********************** */
    // console.log(params, "sign in form Props");

    // setUser(fakeUserData);
    //   setToken(fakeToken);
    //   addItem("token", fakeToken);
    //   setLoggedIn(false);
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

  /**
   * For 3rd-party Authentication [e.g. Autho0, firebase, AWS etc]
   *
   */
  const tokenAuth = (token, user = {}) => {
    setUser(user);
    setToken(token);
    addItem("token", token);
    setLoggedIn(true);
  };

  const forgetPass = (params) => {
    console.log(params, "forget password form Props");
  };
  const changePass = (params) => {
    console.log(params, "change password form Props");
  };

  const logOut = () => {
    setUser(null);
    setToken(null);
    clearItem("token");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logOut,
        signIn,
        signUp,
        forgetPass,
        changePass,
        tokenAuth,
        user,
        token,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
