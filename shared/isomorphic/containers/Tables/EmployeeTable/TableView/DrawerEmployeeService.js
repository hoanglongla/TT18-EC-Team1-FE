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
import services_1 from "../../services";
import axios from "axios";
const {TextArea} =Input;
const DrawerEmployee = (props) => {
 
  

  //const [url,setUrl] = useState(update_url);
  const [data, setData] = useState({});
  const [username,setUsername] = useState();
  const [email,setEmail] = useState();
  const [editing, setEditing] = useState(false);
  const edit = () => {
    setEditing(!editing);
  };
  
  const USER_TOKEN = localStorage.getItem("token");
  const AuthStr = "Bearer ".concat(USER_TOKEN);
  
  
  
  async function UpdateEmployee (id_number) {
    return axios.post(`${API_URL}/sub_admin/staff/${id_number}/update`,
    {
        "name" : `${name}`,
        "note" : "HAy"
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
    const statusUpdate = await UpdateCategory(props.employee.id);

    if (statusUpdate == true) {
       
      const a = await getOneCategory(id_category);
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
            <Descriptions.Item label="Tên tài khoản" span={12}>
              {props.employee.username}
            </Descriptions.Item>
            

            <Descriptions.Item label="Email" span={2}>
              {props.employee.email}
            </Descriptions.Item>
            {props.employee.role == 3 ?(
            <Descriptions.Item label="Vị trí" span={1}>
                Nhân viên dịch vụ
              </Descriptions.Item>
            ) :(
            <Descriptions.Item label="Vị trí" span={1}>
              Nhân viên bán hàng
            </Descriptions.Item>
            )}
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
          
          <Descriptions title="" layout="vertical" bordered>
            <Descriptions.Item label="Tên tài khoản" span={12}>
              <Input
                defaultValue={props.employee.username}
                onChange={(e) => setName(e.target.value)}
              />
            </Descriptions.Item>
            

            <Descriptions.Item label="Email">
              <Input
                defaultValue={props.employee.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Descriptions.Item>
          </Descriptions>
        </>
      )}
    </>
  );
};
export default DrawerEmployee;