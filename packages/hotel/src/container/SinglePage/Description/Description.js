import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Element } from "react-scroll";
import Rating from "@iso/ui/Rating/Rating";
import Heading from "@iso/ui/Heading/Heading";
import Text from "@iso/ui/Text/Text";
import Button from "@iso/ui/Antd/Button/Button";
import DescriptionWrapper from "./Description.style";
import { RatingMeta, TextButton, Cost, Amount } from "../SinglePageView.style";
import AmountBar from "../AmountBar/AmountBar";
import FormActionArea from "../Reservation/Reservation.style";
import axios from "axios";

const Description = ({
  title,
  location,
  content,
  rating,
  ratingCount,
  titleStyle,
  productPrice,
  discount,
  amount,
}) => {
  const [choosenAmount, setChoosenAmount] = useState({
    amount: 0,
  });
  const handleAmountIncrease = useCallback((choosenAmount) => {
    setChoosenAmount({ amount: choosenAmount + 1 });
    // console.log("increase");
  }, []);
  const handleAmountDecrease = useCallback((choosenAmount) => {
    if (choosenAmount > 0) setChoosenAmount({ amount: choosenAmount - 1 });
    // console.log("decrease");
  }, []);
  const handleAddToCart = useCallback(() => {
    if (choosenAmount.amount > 0) {
      let current_product_id = localStorage.getItem("current_product_id");
      let itemsInCart = JSON.parse(localStorage.getItem("items_in_cart"));
      if (itemsInCart === null) itemsInCart = [];
      itemsInCart = itemsInCart.filter((item) => {
        return item.id !== current_product_id;
      });
      itemsInCart.push({
        id: `${current_product_id}`,
        amount: choosenAmount.amount,
      });
      localStorage.setItem("items_in_cart", JSON.stringify(itemsInCart));
    }
  });
  return (
    <Element name="overview" className="overview">
      <DescriptionWrapper>
        <Heading as="h2" content={title} {...titleStyle} />
        <RatingMeta>
          <Rating rating={rating} ratingCount={ratingCount} amount={amount} type="bulk" />
        </RatingMeta>
        {discount !=0 || discount !=null ?(
          <Cost>{productPrice} VNĐ</Cost>
        ):(
          <span>
          <Cost style={{textDecoration:"line-through",fontSize:"20px",color:"grey"}} >{productPrice} VNĐ</Cost>
          <Cost>{discount} VNĐ</Cost>
          </span>
         
        )}
        
        <Amount>
          Số lượng:{" "}
          <AmountBar
            amount={choosenAmount.amount}
            onIncrease={handleAmountIncrease}
            onDecrease={handleAmountDecrease}
          />{" "}
        </Amount>
      </DescriptionWrapper>
      <FormActionArea>
        <button onClick={handleAddToCart} htmlType="submit" type="primary">
          Thêm vào giỏ hàng
        </button>
      </FormActionArea>
    </Element>
  );
};

Description.propTypes = {
  titleStyle: PropTypes.object,
  locationMetaStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

Description.defaultProps = {
  titleStyle: {
    color: "#2C2C2C",
    fontSize: ["17px", "20px", "25px"],
    lineHeight: ["1.15", "1.2", "1.36"],
    mb: "4px",
  },
  locationMetaStyle: {
    fontSize: "13px",
    fontWeight: "400",
    color: "#909090",
  },
  contentStyle: {
    fontSize: "15px",
    fontWeight: "400",
    color: "#2C2C2C",
    lineHeight: "1.6",
  },
};

export default Description;
