<<<<<<< HEAD
import { Button } from "antd";
import React, { Component } from "react";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Row from "@iso/ui/Antd/Grid/Row";
import Col from "@iso/ui/Antd/Grid/Col";
import Divider from "@iso/ui/Antd/Divider/Divider";
import Button from "@iso/ui/Antd/Button/Button";
import Logo from "@iso/ui/Logo/Logo";
import SignInForm from "./SignInForm";
import { REGISTRATION_PAGE } from "../../settings/constant";
import SignInWrapper, {
  Title,
  TitleInfo,
  Text,
  SignInFormWrapper,
  SignInBannerWrapper,
} from "./SignIn.style";

import signInImage from "@hotel/assets/images/login-page-bg.jpg";
import DemoLogo from "@hotel/assets/images/logo-with-text.svg";
>>>>>>> 49a50fe490ad0a884c1e044ed56d7d6503cccf32

const SignIn = () => {
  return (
<<<<<<< HEAD
    <div>
      <h1>Hello world</h1>
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="user" type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control placeholder="user" type="password" />
        </Form.Group>
      </Form>
      <Button>Login</Button>
    </div>
=======
    <SignInWrapper>
      <SignInFormWrapper>
        <Logo withLink linkTo="/" src={DemoLogo} title="Hotel Logo" />
        <Title>Welcome Back</Title>
        <TitleInfo>Please Log in to your account</TitleInfo>
        <SignInForm />
        <Divider>Or Log in With </Divider>
        <Row gutter={16}>
          <Col span={12}>
            <Button
              loading={state.facebookBtnLoading}
              className="facebook-btn"
              type="primary"
              style={{ width: "100%", marginBottom: 16 }}
              size="large"
              onClick={facebookAuthAction}
            >
              Facebook
            </Button>
          </Col>
          <Col span={12}>
            <Button
              loading={state.githubBtnLoading}
              className="github-btn"
              type="primary"
              style={{ width: "100%", marginBottom: 16 }}
              size="large"
              onClick={githubAuthAction}
            >
              Github
            </Button>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginBottom: "37px" }}>
          <Col span={12}>
            <Button
              loading={state.firebaseBtnLoading}
              className="firebase-btn"
              type="primary"
              style={{ width: "100%", marginBottom: 16 }}
              size="large"
              onClick={firebaseAuthAction}
            >
              Firebase
            </Button>
          </Col>
          <Col span={12}>
            <Button
              loading={state.googleBtnLoading}
              className="google-btn"
              type="primary"
              style={{ width: "100%", marginBottom: 16 }}
              size="large"
              onClick={googleAuthAction}
            >
              Google+
            </Button>
          </Col>
        </Row>
        <Text>
          Don't Have an Account?{" "}
          <Link to={REGISTRATION_PAGE}>Registration</Link>
        </Text>
      </SignInFormWrapper>

      <SignInBannerWrapper>
        <div
          style={{
            backgroundImage: `url(${signInImage})`,
            backgroundPosition: "center center",
            height: "100vh",
            backgroundSize: "cover",
          }}
        />
      </SignInBannerWrapper>
    </SignInWrapper>
>>>>>>> 49a50fe490ad0a884c1e044ed56d7d6503cccf32
  );
};

export default SignIn;
