import React from "react";

import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  Drawer,
  Descriptions,
  Modal,
  Radio,
  Form,
  Input,
  Button,
  Popconfirm,
} from "antd";
import { API_URL } from "../../../../config/url/url";
import axios from "axios";
const { TextArea } = Input;
const DrawerBranch = (props) => {
  const [form] = Form.useForm();

  //const [url,setUrl] = useState(update_url);
  const [data, setData] = useState({});
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [editing, setEditing] = useState(false);
  const edit = () => {
    setEditing(!editing);
  };

  const USER_TOKEN = localStorage.getItem("token");
  const AuthStr = "Bearer ".concat(USER_TOKEN);
  function GetOneBranch(id_number) {
    return axios
      .get(
        `${API_URL}/admin/tail/${id_number}`,

        {
          headers: {
            Authorization: AuthStr,
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        const branch = res.data.data;
        setData(branch);
      });
  }
  useEffect(() => {
    GetOneBranch(props.id);
  }, [props.id]);

  async function UpdateBranch(id_number) {
    return axios
      .post(
        `${API_URL}/admin/tail/${id_number}/update`,
        {
          name: name,
          phone: phone,
          address: address,
        },
        {
          headers: {
            Authorization: AuthStr,
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => res.data.status);
  }
  const handleUpdate = async () => {
    const statusUpdate = await UpdateBranch(props.id);

    if (statusUpdate == true) {
      form.resetFields();
      GetOneBranch(props.id);

      setEditing(!editing);
    }
  };
  return (
    <>
      {editing == false ? (
        <>
          <Button
            type="primary"
            onClick={edit}
            className="mateAddInvoiceBtn"
            style={{ marginBottom: "20px" }}
          >
            Chỉnh sửa
          </Button>

          <Descriptions title="" layout="vertical" bordered>
            <Descriptions.Item label="Tên chi nhanh" span={12}>
              {data.name}
            </Descriptions.Item>

            <Descriptions.Item label="Phone" span={1}>
              {data.phone}
            </Descriptions.Item>
            <Descriptions.Item label="Vị trí" span={2}>
              {data.address}
            </Descriptions.Item>
          </Descriptions>
        </>
      ) : (
        <>
          <Button
            type="primary"
            onClick={handleUpdate}
            className="mateAddInvoiceBtn"
            style={{ marginBottom: "20px", marginRight: "20px" }}
          >
            Lưu
          </Button>
          <Button
            onClick={edit}
            className="mateAddInvoiceBtn"
            style={{ marginBottom: "20px" }}
          >
            Hủy
          </Button>

          <Form form={form}>
            <Descriptions title="" layout="vertical" bordered>
              <Descriptions.Item label="Tên chi nhánh" span={12}>
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input
                    defaultValue={data.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
              </Descriptions.Item>

              <Descriptions.Item label="Số điện thoại">
                <Form.Item
                  name="Phone"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input
                    defaultValue={data.phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Item>
              </Descriptions.Item>
              <Descriptions.Item label="Địa chỉ">
                <Form.Item
                  name="Address"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input
                    defaultValue={data.address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Item>
              </Descriptions.Item>
            </Descriptions>
          </Form>
        </>
      )}
    </>
  );
};
export default DrawerBranch;
