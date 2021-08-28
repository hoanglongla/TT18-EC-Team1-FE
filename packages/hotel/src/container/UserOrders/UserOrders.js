import React, { useState, useEffect } from "react";
import DetailWrapper from "./UserOrders.style";
import axios from "axios";
import { API_URL, ORDER_DETAIL_PAGE } from "../../settings/constant";
import { Link } from "react-router-dom";
const Detail = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let loginedUser = JSON.parse(localStorage.getItem("loginedUser"));
    axios
      .get(`${API_URL}/c/order?user_id=${loginedUser.user_record.id}`, {
        headers: {
          Authorization: `Bearer ${loginedUser.access_token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.status) {
          //   console.log(res.data.data.data);
          setOrders(res.data.data.data);
        }
      });
  }, []);

  const handleOrder = (id) => {
    localStorage.setItem("current_user_order_id", id);
  };

  return (
    <DetailWrapper>
      <ul>
        {orders.map((order, index) => (
          <Link to={ORDER_DETAIL_PAGE}>
            <li onClick={() => handleOrder(order.id)} key={index}>
              {index + 1}. {String(order.created_at).slice(0, 19)}
            </li>
          </Link>
        ))}
      </ul>
    </DetailWrapper>
  );
};

export default Detail;
