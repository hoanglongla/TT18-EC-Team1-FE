import { Col, Row, Button } from "antd";
import React from "react";

// import { useEffect } from "react";
// import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SignInForm from "./SignInForm";
import SignInWrapper from "./SignIn.style";
import DemoLogo from "@hotel/assets/images/logo_transparent.png";
import Logo from "@iso/ui/Logo/Logo";
import signInImage from "@hotel/assets/images/login_page_background.png";

// import { useForms } from "react-hook-form";

const SignIn = () => {
  return (
    <SignInWrapper>
      <Row className=" h-100">
        <Col xs={10} className="h-100">
          <div className="logo">
            <Logo withLink linkTo="/" src={DemoLogo} title="Hotel Logo" />
          </div>
          <div style={{ marginTop: "10%" }}>
            <SignInForm />
          </div>
        </Col>
        <Col
          xs={14}
          className="bg-secondary h-100"
          style={{
            backgroundImage: `url(${signInImage})`,
            backgroundPosition: "center center",
            height: "100vh",
            backgroundSize: "cover",
          }}
        ></Col>
      </Row>
    </SignInWrapper>
  );
};

export default SignIn;
