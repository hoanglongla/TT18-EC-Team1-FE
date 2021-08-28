import React from "react"

import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";


import { Drawer, Descriptions, Modal, Radio,Form,Input,Button,Popconfirm } from "antd";
import services_1 from "../../services";
import axios from "axios";
import { API_URL } from "../../../../config/url/url";
const DrawerService=(props)=>{
    const id_string=props.service.id;
    const [data, setData] = useState({});
    const [editing, setEditing] = useState(false);
    const edit=()=>{
       setEditing(!editing)
    }
    
    const USER_TOKEN = localStorage.getItem("token");
  const AuthStr = "Bearer ".concat(USER_TOKEN);
  const [name, setName] = useState();
  const [price , setPrice] = useState();
  const [price_discount,setPriceDiscount]=useState();
  const [description,setDescription]=useState();
  const [stock,setStock]=useState();
  const [picture,setPicture]=useState();
  const [timeEstimate,setTimeEstimate]=useState();
  const [book_online, setBookOnline] = React.useState(true);
  const [value, setValue] = React.useState(1);
  function getOneService(id_number) {
  
    //const id =  id_number.toString();
     axios
      .get(`${API_URL}/admin/service/${id_number}`, {
        headers: {
          Authorization: AuthStr,
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        const service = response.data.data;
        setData(service);
      });
  }
  useEffect(()=> {
    const fetchData = async () => {
          const a = await getOneService(id_string);
    
        };
        fetchData()
  }, [id_string]);
  async function UpdateService(serviceID) {  
    return axios.post(`${API_URL}/admin/service/${serviceID}/update`,
    {
        "name" : name,
        "price" : parseInt(`${price}`),  
        "price_discount" : parseInt(`${price_discount}`),
        "description" : `${description}`, 
        "stock" :parseInt(`${stock}`), 
        "picture" : null,
        "time_estimate": parseInt(`${timeEstimate}`),
        "can_book_online" : props.service.book_online,
        "sex_type" : props.service.sex_type,
        "services_categories_id" : 1
    },
    { headers: { Authorization: AuthStr,'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS','Access-Control-Allow-Origin' : '*' }})
    .then(res=>res.data.status);

  }
  const handleUpdate = async () =>{
      const statusUpdate = await UpdateService(props.service.id);
      if(statusUpdate == true){
        setEditing(!editing)
      }
  };
    return(
        <>
        
        {editing == false ? (
        <>
        <Button type="primary" onClick={edit} className="mateAddInvoiceBtn" style={{marginBottom:'20px'}}>
              Chỉnh sửa
        </Button>
        <Descriptions title="" layout="vertical" bordered>
            
          <Descriptions.Item label="Tên dịch vụ" span={12}>
          {props.service.name}
          </Descriptions.Item>
          <Descriptions.Item label="Giá" span={1}>
            {data.price}
          </Descriptions.Item>
          <Descriptions.Item label="Giá ưu đãi" span={1}>
            {data.price_discount}
          </Descriptions.Item>
          <Descriptions.Item label="Dành cho" span={1}>
            {data.sex_type}
          </Descriptions.Item>
          <Descriptions.Item label="Đặt online" span={1}>
          {data.can_book_online}
          </Descriptions.Item>
          <Descriptions.Item label="Số lượng" span={1}>{data.stock}</Descriptions.Item>
          <Descriptions.Item label="Thời gian" span={1}>{data.time_estimate}</Descriptions.Item>
          <Descriptions.Item label="Mô tả">
            {data.description}
          </Descriptions.Item>
        </Descriptions></>):(
            <>
            <Button type="primary" onClick={handleUpdate} className="mateAddInvoiceBtn" style={{marginBottom:'20px',marginRight:'20px'}}>
              Lưu
        </Button>
        <Button onClick={edit} className="mateAddInvoiceBtn" style={{marginBottom:'20px'}}>
              Hủy
        </Button>
        <Descriptions title="" layout="vertical" bordered>
          <Descriptions.Item label="Tên dịch vụ" span={12}>
            <Input defaultValue={props.service.name} onChange={(e) => setName(e.target.value)} />
          </Descriptions.Item>
          <Descriptions.Item label="Giá" span={1}>
          <Input defaultValue={data.price} onChange={(e) => setPrice(e.target.value)} />
          </Descriptions.Item>
          <Descriptions.Item label="Giá ưu đãi" span={1}>
          <Input defaultValue={data.price_discount} onChange={(e) => setPriceDiscount(e.target.value)} />
          </Descriptions.Item>
          <Descriptions.Item label="Dành cho" span={1}>
          <Input defaultValue={data.sex_type} onChange={(e) => set(e.target.value)} />
          </Descriptions.Item>
          <Descriptions.Item label="Đặt online" span={1}>
          <Input defaultValue={data.can_book_online} />
          </Descriptions.Item>
          <Descriptions.Item label="Số lượng" span={1}> <Input defaultValue={data.stock} onChange={(e) => setStock(e.target.value)} /></Descriptions.Item>
          <Descriptions.Item label="Thời gian" span={1}><Input defaultValue={data.timeEstimate} onChange={(e) => setTimeEstimate(e.target.value)}/></Descriptions.Item>
          <Descriptions.Item label="Mô tả">
          <Input defaultValue={data.description} onChange={(e) => setDescription(e.target.value)} ></Input>
          </Descriptions.Item>
        </Descriptions></>)}
     </>
    )
}
export default DrawerService;