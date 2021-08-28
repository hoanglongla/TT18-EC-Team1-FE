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
const DrawerCategoryService = (props) => {
 
  const id_category = props.category.id;

  //const [url,setUrl] = useState(update_url);
  const [data, setData] = useState({});
 
  const [editing, setEditing] = useState(false);
  const edit = () => {
    setEditing(!editing);
  };

  const USER_TOKEN = localStorage.getItem("token");
  const AuthStr = "Bearer ".concat(USER_TOKEN);
  const [name, setName] = useState();
 
  const [description, setDescription] = useState();
  

  
  function getOneCategory(id_number) {
    //const id =  id_number.toString();
    axios
      .get(`${API_URL}/admin/service_category/${id_number}`, {
        headers: {
          Authorization: AuthStr,
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        const category = response.data.data;
        setData(category);
      });
  }
  useEffect(() => {
    const fetchData = async () => {
      const b = await getOneCategory(id_category);
    
    };
    fetchData();
  }, [id_category]);
  
  async function UpdateCategory (id_number) {
    return axios.post(`${API_URL}/admin/service_category/${id_number}/update`,
    {
        "name" : name,
        "note" : description,
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
    const statusUpdate = await UpdateCategory(props.category.id);

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
            <Descriptions.Item label="Tên loại sản phẩm" span={12}>
              {data.name}
            </Descriptions.Item>
            <Descriptions.Item label="Mô tả">
              {data.note}
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
          
          <Descriptions title="" layout="vertical" bordered>
            <Descriptions.Item label="Tên sản phẩm" span={12}>
              <Input
                defaultValue={data.name}
                onChange={(e) => setName(e.target.value)}
              />
            </Descriptions.Item>
            

            <Descriptions.Item label="Mô tả">
              <Input
                defaultValue={data.note}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Descriptions.Item>
          </Descriptions>
        </>
      )}
    </>
  );
};
export default DrawerCategoryService;