import { Divider } from "rc-menu";
import React, { Component, useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { HOME_PAGE, API_URL } from "../../settings/constant";

import BillingForm from "./BillingForm";
import OrderInfo from "./OrderInfo";

import PaymentWrapper from "./Payment.style";

import axios from "axios";

import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Payment = () => {
  const [checkoutData, setCheckoutData] = useState({});

  const [products, setProducts] = React.useState([]);
  // const API_URL = "http://econail.localhost/api";

  const getItem = async () => {
    let itemsInCart = JSON.parse(localStorage.getItem("items_in_cart"));
    let cart = Promise.all(
      await itemsInCart.map(async (item) => {
        let test = await axios.get(`${API_URL}/g/product/${item.id}`);
        test = test.data.data;
        test.quantity = item.amount;
        // console.log("testtt", test);
        return test;
      })
    );
    return cart;
  };

  React.useEffect(() => {
    const hi = async () => {
      let cart = await getItem();
      setProducts(cart);
    };
    hi();
  }, []);

  React.useEffect(() => {
    return setProducts([]);
  }, []);

  const updateInput = (event, lable) => {
    let tmpData = { ...checkoutData };
    tmpData[lable] = event.target.value;
    setCheckoutData(tmpData);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{
        position: "relative",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* {console.log(products)} */}
      <PaymentWrapper>
        <BillingForm
          className="bill"
          onInput={updateInput}
          checkoutData={checkoutData}
        />
        <OrderInfo products={products} onShowModal={handleShow} />

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
          <Modal.Body>Your order is on the way !!!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Link to={HOME_PAGE}>
              <Button variant="primary">Okay</Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </PaymentWrapper>
    </div>
  );
};

export default Payment;
