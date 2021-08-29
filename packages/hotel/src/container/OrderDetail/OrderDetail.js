import React, { useState, useEffect } from "react";
import OrderDetailWrapper from "./OrderDetail.style";
import axios from "axios";
import { API_URL } from "../../settings/constant";
import { Tag, Table, Button } from "antd";
import { Link } from "react-router-dom";

const OrderDetail = () => {
  const [order, setOrder] = useState({});
  const [orderInfo, setOrderInfo] = useState({});
  const [products, setProducts] = useState([]);
  const [totalProductsCost, setTotalProductsCost] = useState("");

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

          console.log("tmp", tmp);
          setOrder(tmp);

          //set order's general info
          let note = JSON.parse(tmp.note);
          // console.log("total: ", note.purchase_units[0].amount.value);
          let item = {
            key: 1,
            id: tmp.id,
            date: tmp.created_at.slice(0, 19),
            status: tmp.status,
            delivery_status: tmp.delivery_status,
          };
          setOrderInfo(item);

          //set order items info
          let tmp_products = note.purchase_units[0].items;
          tmp_products = tmp_products.map((item) => {
            return {
              name: item.name,
              quantity: item.quantity,
              price: item.unit_amount.value + " USD",
            };
          });
          setTotalProductsCost(note.purchase_units[0].amount.value + " USD");
          setProducts(tmp_products);
        }
      });
  }, []);

  const infoColumns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "id",
      key: "id",
      render: (id) => <a>{id}</a>,
    },
    {
      title: "Ngày mua",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let str = "";
        let color = "";
        switch (status) {
          case 0:
            str = "Tạo";
            color = "grey";

            break;
          case 1:
            str = "Đã thanh toán";
            color = "green";

            break;
          case 2:
            str = "Chưa thanh toán";
            color = "grey";

            break;
          case 3:
            str = "Hủy";
            color = "red";
            break;
          case 4:
            str = "Yêu cầu hoàn tiền";
            color = "yellow";
            break;
          case 5:
            str = "Đã hoàn tiền";
            color = "blue";
            break;
        }
        return <Tag color={color}>{str}</Tag>;
      },
    },

    {
      title: "Trạng thái giao hàng",
      dataIndex: "delivery_status",
      key: "delivery_status",
      render: (deli_stat) => {
        let str = "";
        switch (deli_stat) {
          case 0:
            str = "Chưa giao";
            break;
          case 1:
            str = "Đã giao";
            break;
        }
        let color = deli_stat === 0 ? "grey" : "green";
        return <Tag color={color}>{str}</Tag>;
      },
    },
  ];

  const productsColumns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
  ];

  const handleCancelOrder = () => {
    let orderID = localStorage.getItem("current_user_order_id");
    let loginedUser = JSON.parse(localStorage.getItem("loginedUser"));

    axios
      .post(
        `${API_URL}/c/order/${orderID}/update`,
        { status: 3 },
        {
          headers: {
            Authorization: `Bearer ${loginedUser.access_token}`,
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        console.log("update order status", res);
        if (res.status) {
        }
      });
    let tmpOrderinfo = { ...orderInfo };
    tmpOrderinfo.status = 3;
    setOrderInfo(tmpOrderinfo);
  };

  return (
    <OrderDetailWrapper>
      <Table
        columns={infoColumns}
        dataSource={[orderInfo]}
        pagination={false}
      />
      <Table
        columns={productsColumns}
        dataSource={products}
        pagination={false}
        footer={() => `Total: ${totalProductsCost}`}
      />

      {/* prettier-ignore */}
      {orderInfo.status != 3 && (
        <Button onClick={handleCancelOrder}>Hủy đơn hàng</Button>
      )}
    </OrderDetailWrapper>
  );
};

export default OrderDetail;
