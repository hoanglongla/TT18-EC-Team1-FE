import React, { useState, useEffect } from "react";
import DetailWrapper from "./UserOrders.style";
import axios from "axios";
import { API_URL, ORDER_DETAIL_PAGE } from "../../settings/constant";
import { Link } from "react-router-dom";
import { Tag, Table } from "antd";
const Detail = () => {
  const [orders, setOrders] = useState([]);
  // const [columns, setColumns] = useState([]);
  const [rowData, setRowData] = useState([]);

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
          console.log("orders: ", res.data.data.data);
          setOrders(res.data.data.data);

          //add to table
          let items = res.data.data.data;
          items = items
            .filter((item) => item.note.length > 30)
            .map((item, index) => {
              let note = JSON.parse(item.note);
              console.log("note: ", note);
              return {
                key: index,
                id: item.id,
                date: item.created_at.slice(0, 19),
                total: note.purchase_units[0].amount.value + " USD",
                status: item.status,
                delivery_status: item.delivery_status,
              };
            });
          setRowData(items);
        }
      });
  }, []);

  const handleOrder = (id) => {
    localStorage.setItem("current_user_order_id", id);
  };

  const columns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "id",
      key: "id",
      render: (id) => {
        return (
          <Link to={ORDER_DETAIL_PAGE}>
            <a onClick={() => handleOrder(id)}>{id}</a>
          </Link>
        );
      },
    },
    {
      title: "Ngày mua",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Tổng tiền",
      dataIndex: "total",
      key: "total",
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

  const data = [
    {
      key: "1",
      id: 1,
      date: "2021-09-11",
      total: 3000,
      status: 0,
    },
    {
      key: "2",
      id: 2,
      date: "2021-07-12",
      total: 5000,
      status: 1,
    },
  ];

  return (
    <DetailWrapper>
      {/* <ul>
        {orders.map((order, index) => (
          <Link to={ORDER_DETAIL_PAGE}>
            <li onClick={() => handleOrder(order.id)} key={index}>
              {index + 1}. {String(order.created_at).slice(0, 19)}
            </li>
          </Link>
        ))}
      </ul> */}
      <Table columns={columns} dataSource={rowData} />
    </DetailWrapper>
  );
};

export default Detail;
