import React, { Component, useState } from "react";
import InputBox from "./InputBox";

import "bootstrap/dist/css/bootstrap.min.css";

import { BillingFormWrapper } from "./Payment.style";
import { Label } from "@hotel/components/Review/RendarReviewForm.style";
// import { Col } from "antd";
import { Row, Col } from "react-bootstrap";

const BillingForm = (props) => {
  return (
    <BillingFormWrapper>
      {/* {console.log(props.checkoutData)} */}
      <h5 className={""}>Billing detail</h5>

      <Row>
        <Col>
          <InputBox label="FirstName" onInput={props.onInput} important />
        </Col>
        <Col>
          <InputBox label="LastName" onInput={props.onInput} important />
        </Col>
      </Row>

      {/* <Row>
        <Col>
          <InputBox label="E-mail address" onInput={props.onInput} important />
        </Col>
        <Col>
          <InputBox label="Phone Number" onInput={props.onInput} important />
        </Col>
      </Row> */}

      <Row>
        <Col>
          <InputBox label="Country" onInput={props.onInput} important />
        </Col>
        <Col>
          <InputBox label="City" onInput={props.onInput} important />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputBox label="District" onInput={props.onInput} important />
        </Col>
        <Col>
          <InputBox label="Ward" onInput={props.onInput} />
        </Col>
      </Row>

      <InputBox
        label="Address"
        onInput={props.onInput}
        important
        addressNotice
      />

      {/* <label className="mt-3">
        <input
          name="isGoing"
          type="checkbox"
          className="mr-1"
          // checked={this.state.isGoing}
          // onChange={this.handleInputChange}
        />
        Create account?
      </label> */}
    </BillingFormWrapper>
  );
};

export default BillingForm;
