import { Button } from "antd";
import React, { Component } from "react";
import ItemsBox from "./ItemsBox";
import { OrderInfoWrapper } from "./Payment.style";
import Paypal from "./Paypal";

const OrderInfo = (props) => {
  const { products, order, onShowModal } = props;

  const handleSum = () => {
    let sum = 0;
    products.map((item) => (sum += item.price * item.quantity));
    // console.log(sum);
    return sum;
  };

  return (
    <OrderInfoWrapper>
      <div className="d-flex">
        <h5>Your items</h5>
        <h5 className="ml-auto" style={{ marginLeft: "auto" }}>
          Total
        </h5>
      </div>

      <ItemsBox items={products} />

      <div className="d-flex mt-2">
        <h5>Total</h5>
        <h5 className="ml-auto" style={{ marginLeft: "auto" }}>
          {handleSum()}
        </h5>
      </div>

      {/* <Button className="w-100" type="primary">
        Paypal
      </Button> */}
      {/* {console.log("Outer products ", products)} */}
      <Paypal products={products} order={order} onShowModal={onShowModal} />
    </OrderInfoWrapper>
  );
};

export default OrderInfo;
