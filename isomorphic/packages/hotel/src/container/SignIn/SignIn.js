import { Button } from "antd";
import React, { Component } from "react";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const SignIn = () => {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    const api = "http://econail.localhost/api/sub_admin/staff?role=1";

    const fetchData = async () => {
      const result = await axios.get("https://econail.localhost/api/g/user");
      data.hits = result.data.data.data;
      console.log(data.hits);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Hello world</h1>
      {data.hits.map((item) => (
        <li key={item.id}>
          <a>{item.username}</a>
        </li>
      ))}
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="user" type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control placeholder="user" type="password" />
        </Form.Group>
      </Form>
      <Button>Login</Button>
    </div>
  );
};

export default SignIn;
