import React, { Fragment, useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { FaHome, FaRegCalendarAlt } from "react-icons/fa";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// import Loader from "@hotel/components/Loader/Loader";
import { Select, DatePicker, Button, TimePicker } from "antd";
import axios from "axios";
import moment from "moment";
import MyModal from "./Modal";

import { API_URL } from "../../settings/constant";

import "antd/dist/antd.css";
import { Form } from "react-bootstrap";

import ServiceOrderWrapper, {
  Title,
  SubTitle,
  Component,
  styles,
  colourStyles,
} from "./ServiceOrder.style";

const { Option } = Select;

const timeFormat = {
  disabledSeconds: true,
  minuteStep: 30,
};

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const ServiceListing = () => {
  const [tails, setTails] = useState([]);
  const [service, setService] = useState({});
  const [bookingForm, setBookingForm] = useState({});

  var loginedUser = JSON.parse(localStorage.getItem("loginedUser"));

  useEffect(() => {
    axios.get(`${API_URL}/g/tail`).then((res) => {
      if (res.status) {
        // console.log(res.data.data.data);
        setTails(res.data.data.data);
      }
    });

    let current_service_id = JSON.parse(
      localStorage.getItem("current_service_id")
    );

    axios.get(`${API_URL}/g/service/${current_service_id}`).then((res) => {
      if (res.status) {
        // console.log(res.data);
        setService(res.data.data);
      }
    });
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = () => {
    let bookingInfo = { ...bookingForm };
    bookingInfo.user_id = loginedUser.user_record.id;
    bookingInfo.service_id = service.id;
    setBookingForm(bookingInfo);
    console.log(bookingInfo);
    axios
      .post(`${API_URL}/c/book_service`, bookingInfo, {
        headers: {
          Authorization: `Bearer ${loginedUser.access_token}`,
        },
      })
      .then((res) => {
        console.log("post api res: ", res);
        if (res.data.status) {
          setShow(true);
        }
      });
  };

  const handleTimeChange = (value, dateString) => {
    let tmp = { ...bookingForm };
    tmp.time_start = dateString;
    tmp.time_end = value;
    let joy = new Date(String(tmp.time_end._d));
    joy.setSeconds(joy.getSeconds() + service.time_estimate);
    tmp.time_end = `${formatDate(joy)} ${joy.toTimeString().split(" ")[0]}`;

    setBookingForm(tmp);
  };

  const handleTailChange = (value) => {
    let tmp = { ...bookingForm };
    tmp.tail_id = tails[value].id;
    setBookingForm(tmp);
  };

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }

  const onDateRender = (currentDate, today) => {
    console.log(currentDate, "---", today);
  };

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
      <ServiceOrderWrapper>
        <Title>THÔNG TIN ĐẶT LỊCH</Title>
        <Component>
          <SubTitle>Chọn Salon</SubTitle>
          {/* <Form.Item > */}
          <Select
            // labelInValue
            onChange={handleTailChange}
            style={styles}
            placeholder="Chọn Salon"
          >
            {tails.map((option, index) => (
              <Option key={index} value={index}>
                {option.name}
              </Option>
            ))}
          </Select>
          <SubTitle>Dịch vụ</SubTitle>
          {/* <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Sơn móng tay"
          /> */}
          <label>{service.name}</label>
        </Component>
        <Component>
          <SubTitle>Chọn thời gian</SubTitle>
          <DatePicker
            style={styles}
            disabledDate={disabledDate}
            showTime={<TimePicker disabledSeconds minuteStep={30} />}
            disabledSeconds
            minuteStep={30}
            onChange={handleTimeChange}
            // dateRender={onDateRender}
          />
        </Component>
        <button onClick={handleSubmit}>Hoàn tất</button>
      </ServiceOrderWrapper>
      <MyModal show={show} onClose={handleClose} />
      {/* <Button onClick={() => setShow(true)} show={show}>
        Show modal
      </Button> */}
    </div>
  );
};
export default ServiceListing;
