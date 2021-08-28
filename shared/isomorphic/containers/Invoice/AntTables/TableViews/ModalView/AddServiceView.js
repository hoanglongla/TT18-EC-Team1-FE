import React from 'react';
import { Modal, Button,Form,Input,Select,Checkbox } from 'antd';
import { FormWrapper } from '../../../AntTables/AntTables.styles';

const AddServiceView = () => {
return (
    
    <FormWrapper >
    <Form name="basic" layout="vertical" hideRequiredMark>
    <Form.Item  
    label="Tên dịch vụ"
    name="name"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input />
  </Form.Item>
  <Form.Item
    label="Giá"
    name="price"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input  />
  </Form.Item>
  <Form.Item
    label="Giá ưu đãi"
    name="price_discount"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input  />
  </Form.Item>
  <Form.Item
    label="Mô tả"
    name="description"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input style={{height : '200px'}} />
  </Form.Item>
  <Form.Item
    label="Hình ảnh"
    name="picture"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input  />
  </Form.Item>
  <Form.Item
    label="Thời gian thực hiện"
    name="time_estimate"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input />
  </Form.Item>
  <Form.Item
    label="Booking online"
    name="bookonline"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input />
  </Form.Item>
  <Form.Item
    label="Dành cho"
    name="sex_type"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Checkbox
        
      >
        Nam
    </Checkbox>
    <Checkbox
        
      >
        Nữ
      </Checkbox>
  </Form.Item>
  
  </Form>
    
  </FormWrapper>
    
  );
};
export default AddServiceView;