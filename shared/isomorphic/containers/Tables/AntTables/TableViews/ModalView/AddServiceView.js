import React from 'react';
import { useState,useEffect } from 'react';
import { Modal, Button,Form,Input,Select,Checkbox,Radio } from 'antd';
import { FormWrapper } from '../../../AntTables/AntTables.styles';
const { TextArea } = Input;
const AddServiceView = () => {
  

  
  const [name, setName] = useState();
  const [price , setPrice] = useState();
  const [price_discount,setPriceDiscount]=useState();
  const [description,setDescription]=useState();
  const [stock,setStock]=useState();
  const [picture,setPicture]=useState();
  const [timeEstimate,setTimeEstimate]=useState();
  const [book_online, setBookOnline] = React.useState(1);
  const [value, setValue] = React.useState(1);
  const [data, setData] = useState([]);
  const USER_TOKEN=localStorage.getItem('token');
  const AuthStr = 'Bearer '.concat(USER_TOKEN); 
  
  async function AddService(){
    return axios.post('http://econail.localhost/api/admin/service',
    {
      "name" : {name},
      "price" : {price},  
    "price_discount" : {price_discount},
    "description" : {description}, 
    "stock" :{stock}, 
    "picture" : null,
    "time_estimate": {timeEstimate},
    "can_book_online" : true,
    "sex_type" : value,
    "services_categories_id" : 1
    },
    { headers: { Authorization: AuthStr,'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS','Access-Control-Allow-Origin' : '*' }},
    ).then(res=>res.data.status)
    
  }
  useEffect(() => {
    
    
    
  }, []);
  const handleSubmit = async e => {
    e.preventDefault();
    const statusAdd =  await AddService();
    if(statusAdd === true){
    history.push('/dashboard/table_ant');
    }
    else{
      history.push('/dashboard');
    }

  }


  const onChangeBookOnline = e => {
    console.log('radio checked', e.target.value);
    setBookOnline(e.target.value)
  };
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
return (
    
    <FormWrapper >
    <Form name="basic" layout="vertical" hideRequiredMark>
    <Form.Item  
    label="T??n d???ch v???"
    name="name"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input onChange={e=> setName(e.target.value)}/>
  </Form.Item>
  <Form.Item
    label="Gi??"
    name="price"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input  onChange={e=> setName(e.target.price)}/>
  </Form.Item>
  <Form.Item
    label="Gi?? ??u ????i"
    name="price_discount"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input  />
  </Form.Item>
  <Form.Item
    label="M?? t???"
    name="description"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <TextArea rows={4} onChange={e=> setDescription(e.target.value)} />
  </Form.Item>
  <Form.Item
    label="H??nh ???nh"
    name="picture"
    rules={[{ required: true, message: 'Please input your username!' }]}
    onChange={e=> setPicture(e.target.value)}
  >
    <Input  />
  </Form.Item>
  <Form.Item
    label="Th???i gian th???c hi???n"
    name="time_estimate"
    rules={[{ required: true, message: 'Please input your username!' }]}
    onChange={e=> setTimeEstimate(e.target.value)}
  >
    <Input />
  </Form.Item>
  <Form.Item
    label="C?? ?????t ???????c online"
    name="bookonline"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Radio.Group onChange={onChangeBookOnline} value={book_online}>
      <Radio value={1} onChange={e=> setTimeEstimate(e.target.value)}>C??</Radio>
      <Radio value={2}>Kh??ng</Radio>
      
    </Radio.Group>
  </Form.Item>
  <Form.Item
    label="D??nh cho"
    name="sex_type"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Nam</Radio>
      <Radio value={2}>N???</Radio>
      
    </Radio.Group>
  </Form.Item>
  <Form.Item >
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
            <Button htmlType="button" style={{ margin: '0 8px' }} onClick={handleSubmit}>
              Add User
            </Button>
          </Form.Item>
  
  </Form>
    
  </FormWrapper>
    
  );
};
export default AddServiceView;