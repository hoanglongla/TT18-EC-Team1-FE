import React from 'react';
import { Modal, Button,Form,Input,Select,Checkbox } from 'antd';
import { FormWrapper } from '../../../AntTables/AntTables.styles';

const AddServiceCategoryView = () => {
return (
    <FormWrapper >
        <Form name="basic">
        <Form.Item
        label="Tên dịch vụ"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ghi chú"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input style={{height : '200px'}} />
      </Form.Item>
      

        
        </Form>
 
      </FormWrapper>
    
  );
};
export default AddServiceCategoryView;