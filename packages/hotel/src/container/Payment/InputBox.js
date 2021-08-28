import { FormGroup } from "@hotel/components/Review/RendarReviewForm.style";
import React, { Component, useEffect } from "react";

import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { InputBoxWrapper } from "./Payment.style.js";

const InputBox = (props) => {
  // useEffect(() => {
  //   updateInput = updateInput.bind(this);
  // }, []);
  return (
    <InputBoxWrapper>
      <Form>
        <Form.Group>
          <Form.Label style={{ textColor: "#000000" }}>
            {props.label}
            {props.important ? (
              <span style={{ color: "red" }} className="asterisk">
                *
              </span>
            ) : null}
          </Form.Label>
          <Form.Control
            type="text"
            onChange={(event) => props.onInput(event, props.label)}
          />
        </Form.Group>

        {props.addressNotice ? (
          <Form.Group className="mt-2">
            <Form.Control
              type="text"
              placeholder={"address notice(optional)"}
            />
          </Form.Group>
        ) : null}
      </Form>
    </InputBoxWrapper>
  );
};

export default InputBox;
