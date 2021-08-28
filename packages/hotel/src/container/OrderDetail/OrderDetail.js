import React, { useState, useEffect } from "react";
import OrderDetailWrapper from "./OrderDetail.style";
import axios from "axios";
import { API_URL } from "../../settings/constant";

const OrderDetail = () => {
  const [order, setOrder] = useState({});

  useEffect(() => {
    let loginedUser = JSON.parse(localStorage.getItem("loginedUser"));
    axios
      .get(`${API_URL}/c/order?user_id=${loginedUser.user_record.id}`, {
        headers: {
          Authorization: `Bearer ${loginedUser.access_token}`,
        },
      })
      .then((res) => {
        // console.log(res);
        if (res.data.status) {
          let tmp = res.data.data.data;
          tmp = tmp.filter(
            (item) => item.id == localStorage.getItem("current_user_order_id")
          )[0];

          console.log(tmp);
          setOrder(tmp);
        }
      });
  }, []);

  return (
    <OrderDetailWrapper>
      <ul>
        {<li>id: {order.id}</li>}
        {<li>tail_id: {order.tail_id}</li>}
        {<li>status: {order.status}</li>}
        {<li>delivery_status: {order.delivery_status}</li>}
        {<li>created_at: {order.created_at}</li>}
      </ul>
    </OrderDetailWrapper>
  );
};

export default OrderDetail;
