import React from 'react';
import { Modal, Button,Form,Input,Select } from 'antd';
import { FormWrapper } from '../../../AntTables/AntTables.styles';

const AddEmployeeView = () => {
return (
    
      <FormWrapper >
    <Form name="basic">
    <Form.Item  
    label="Tên nhân viên"
    name="name"
    rules={[{ required: true, message: 'Please input your username!' }]}
    >
    <Input />
  </Form.Item>
  <Form.Item
    label="Email nhân viên"
    name="price"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input  />
  </Form.Item>
  <Form.Item
    label="Vị trí"
    name="role"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Select
          placeholder="Select a option and change input text above"
         
          allowClear
    >
          <Option value="male">Nhân viên bán hàng</Option>
          <Option value="female">Nhân viên bán hàng</Option>
          
    </Select>
  </Form.Item>
 

  </Form>
    
  </FormWrapper>
    
  );
};
export default AddEmployeeView;