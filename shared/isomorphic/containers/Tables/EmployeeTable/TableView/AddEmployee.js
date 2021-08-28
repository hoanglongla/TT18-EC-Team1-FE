import React from 'react';
import TableWrapper from '../../AntTables/AntTables.styles'
import services from '../../services';
import { Table } from 'antd';
import { TabPane } from '@iso/components/uielements/tabs';
import { Tag } from 'antd';
import { Button } from 'antd';
import { backgroundColor, color, marginRight } from 'styled-system';
import { FormWrapper,ViewWrapper } from '../../AntTables/AntTables.styles';
import { Form,Input,Checkbox ,Select} from 'antd';
import product_employee from '../../product_employee';
export default function() {
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
  <Button type="danger"   style={{ marginBottom: '1%' ,marginRight:"5px",marginTop:"20px",float:"right"  }}>
    Hủy
  </Button>
  <Button  type="primary" style={{ marginBottom: '1%' ,marginRight:"5px",marginTop:"20px",float:"right"  }}>
    Thêm
  </Button>

  </Form>
    
  </FormWrapper>)
}