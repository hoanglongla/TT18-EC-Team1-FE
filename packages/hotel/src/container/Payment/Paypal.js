import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../settings/constant";

const loginedUser = JSON.parse(localStorage.getItem("loginedUser"));

const Paypal = (props) => {
  const { products, onShowModal } = props;
  const paypal = useRef();
  const [hasData, setHasData] = useState(false);

  const handlePayment = () => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          let tmp = 0;
          products.forEach((product) => {
            tmp += product.price * product.quantity;
          });
          // console.log("cartitem: ", tmp);
          return actions.order.create({
            intent: "CAPTURE",
            // purchase_units: tmp,
            purchase_units: [
              {
                description: `order_id: ${
                  JSON.parse(localStorage.getItem("current_order_info")).id
                }`,
                amount: {
                  currency_code: "USD",
                  value: `${tmp}.00`,
                  breakdown: {
                    item_total: { value: `${tmp}.00`, currency_code: "USD" },
                  },
                },
                items: products.map((product) => {
                  return {
                    name: product.name,
                    unit_amount: {
                      value: product.price,
                      currency_code: "USD",
                    },
                    quantity: product.quantity,
                  };
                }),
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          //get current orderid
          let order_id = JSON.parse(localStorage.getItem("current_order_info"))
            .id;
          const Paypal_res = await actions.order.capture();
          console.log("Paypal_res: ", Paypal_res);

          localStorage.setItem("Paypal_res", JSON.stringify(Paypal_res));

          let orderForm = await axios.get(`${API_URL}/c/order/${order_id}`, {
            headers: {
              Authorization: `Bearer ${loginedUser.access_token}`,
            },
          });
          orderForm = orderForm.data.data;
          console.log("orderForm: ", orderForm);
          // update order attribute
          orderForm.status = 1;
          orderForm.is_paid = true;
          orderForm.note = JSON.stringify(Paypal_res);

          await axios
            .post(`${API_URL}/c/order/${order_id}/update`, orderForm, {
              headers: {
                Authorization: `Bearer ${loginedUser.access_token}`,
                "Access-Control-Allow-Methods":
                  "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Access-Control-Allow-Origin": "*",
              },
            })
            .then((res) => {
              if (res.data.status) {
                console.log("update res: ", res);
                let orderInfor = res.data.data;
                localStorage.setItem(
                  "current_order_info",
                  JSON.stringify(orderInfor)
                );
                localStorage.setItem("items_in_cart", JSON.stringify([]));
                onShowModal();
              }
            });
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  };

  useEffect(() => {
    if (products.length > 0 && !hasData) {
      setHasData(true);
      handlePayment();
    }
  });

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

export default Paypal;
