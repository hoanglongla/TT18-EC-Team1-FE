import React, { useState } from "react";
import { Link } from "react-router-dom";
import Row from "@iso/ui/Antd/Grid/Row";
import Col from "@iso/ui/Antd/Grid/Col";
import Divider from "@iso/ui/Antd/Divider/Divider";
import Button from "@iso/ui/Antd/Button/Button";
import Logo from "@iso/ui/Logo/Logo";
import SignUpForm from "./SignUpForm";
import signUpImage from "@hotel/assets/images/login-page-bg.jpg";
// import DemoLogo from '@hotel/assets/images/logo-with-text.svg';
import DemoLogo from "@hotel/assets/images/logo_transparent.png";
import Modal from "react-bootstrap/Modal";
import { HOME_PAGE } from "../../settings/constant";
// import Button from "react-bootstrap/Button";

import SignUpWrapper, {
  Title,
  TitleInfo,
  Text,
  SignUpFormWrapper,
  SignUpBannerWrapper,
} from "./SignUp.style";

import { LOGIN_PAGE } from "../../settings/constant";
import { reduce } from "lodash";

export default function SignUp() {
  const [state, setState] = useState({
    facebookBtnLoading: false,
    githubBtnLoading: false,
    firebaseBtnLoading: false,
    googleBtnLoading: false,
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const facebookAuthAction = () => {
    setState({ facebookBtnLoading: true });
  };

  const githubAuthAction = () => {
    setState({ githubBtnLoading: true });
  };

  const firebaseAuthAction = () => {
    setState({ firebaseBtnLoading: true });
  };

  const googleAuthAction = () => {
    setState({ googleBtnLoading: true });
  };

  return (
    <SignUpWrapper>
      <SignUpFormWrapper>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "35%" }}>
            <Logo withLink linkTo="/" src={DemoLogo} title="Hotel Logo" />
          </div>
        </Row>
        <Title>Welcome To Beauty Hand</Title>
        <TitleInfo>Please Register for your account</TitleInfo>
        <SignUpForm onShowModal={handleShow} />
        {/* get render in isomorphic\shared\hotel\components\SignUp */}
        <Divider>Or Register Up With </Divider>
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
          Already Have an Account! <Link to={LOGIN_PAGE}>Login</Link>
        </Text>
      </SignUpFormWrapper>

      <SignUpBannerWrapper>
        <div
          style={{
            backgroundImage: `url(${signUpImage})`,
            backgroundPosition: "center center",
            height: "100vh",
            backgroundSize: "cover",
          }}
        />
      </SignUpBannerWrapper>

      {/* <Button onClick={handleShow}>Modal</Button> */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ marginTop: "25vh" }}
      >
        {/* <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header> */}
        <Modal.Body>Sign Up success !!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to={HOME_PAGE}>
            <Button variant="primary">Okay</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </SignUpWrapper>
  );
}
