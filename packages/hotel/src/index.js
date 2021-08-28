import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./router";
import theme from "./themes/default.theme";
import GlobalStyles from "@hotel/assets/style/Global.style";
import AuthProvider from "./context/AuthProvider";
import "bootstrap/dist/css/bootstrap.min.css";

import Payment from "./container/Payment/Payment";
import SignIn from "./container/SignIn/SignIn";

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
        {/* <SignIn /> */}
      </BrowserRouter>
    </>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
