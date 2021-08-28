import React, { Component } from "react";
import { ItemsBoxWrapper } from "./Payment.style";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../settings/constant";
import { SINGLE_POST_PAGE } from "../../settings/constant";

const handleClick = (id) => {
  localStorage.setItem("current_product_id", id);
};

const ItemsBox = (props) => {
  const { items } = props;
  return (
    <ItemsBoxWrapper>
      {items.map((item) => (
        <div
          key={item.id}
          className="d-flex mb-1"
          style={{
            borderBottom: "0.5px solid rgba(157, 161, 158, 0.9)",
            borderSpacing: "5px",
          }}
        >
          <img style={{ width: "30px", height: "30px" }} src={item.picture} />

          <Link to={`${SINGLE_POST_PAGE}/${item.id}`}>
            <span
              onClick={() => handleClick(item.id)}
              style={{ color: "grey", marginLeft: "4px" }}
            >
              {item.name} x {item.quantity}
            </span>
          </Link>

          <span style={{ marginLeft: "auto", color: "grey" }}>
            {item.price * item.quantity}
          </span>
        </div>
      ))}
    </ItemsBoxWrapper>
  );
};

export default ItemsBox;
