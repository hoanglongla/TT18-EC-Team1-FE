import React from 'react';
import TableWrapper from '../AntTables.styles';
import services from '../../services';

import { FormWrapper,ViewWrapper } from '../AntTables.styles';

import { Drawer,Descriptions,Badge ,Modal,Col,Row,Form,Input,Checkbox} from 'antd';
import { Button } from 'antd';
export default class SimpleView extends React.Component{
  state = { visible: false };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render(){
    const columns = [
      {
        title: 'Tên dịch vụ',
        dataIndex: 'name',
        key: 'name',
        width: "10%"  ,
        
      },
      {
        title: 'Giá',
        dataIndex: 'price',
        key: 'price',
        width: "10%" ,
        ellipsis:true
      },
      {
        title: 'Giá ưu đãi',
        dataIndex: 'price_discount',
        key: 'price_discount',
        width: "7%" ,
        
      },
      {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
        width: "20%" ,
        ellipsis:true,
        
       
        
      },
      {
        title: 'Hình ảnh',
        dataIndex: 'picture',
        key: 'picture',
        width: "10%" ,
          
      },
      {
        title: 'Thời gian thực hiện',
        dataIndex: 'time_estimate',
        key: 'time-estimate',
        width: "10%" ,
        
        
      },
      {
        title: 'Book online',
        dataIndex: 'can_book_online',
        key: 'address',
        width: "10%" ,
        ellipsis:true,
        render : bookonline=>{
          if (bookonline == 0){
            return(
            <td key={bookonline}>
                  Không
            </td>
            );
          }
          else{
            return(
              <td  key={bookonline}>
                  Có
            </td>
            );
          }
        }
      },
      {
         title: 'Dành cho',
         dataIndex: 'sex_type',
         key: 'sex_type',
         width: "10%" ,
         ellipsis:true,
         render : sextype=>{
          if (sextype == 1){
            return(
            <td >
                  Nữ
            </td>
            );
          }
          else{
            return(
              <td  >
                  Nam
            </td>
            );
          }
        }
      },
      {
        title: '',
        dataIndex: 'action',
        width: '10%',
        render: (_,record) => (
          
            
              <>
              <Button icon="search" onClick={this.showDrawer} shape="circle" style={{backgroundColor: "#008CBA" ,marginRight:"5px"}} />
                <Drawer
                title="Thông tin nhân viên"
                width={720}
                visible={this.state.visible}
                onClose={this.onClose} 
               
                bodyStyle={{ paddingBottom: 80 }}
                >
                  <Descriptions title="" layout="vertical" bordered>
                  <Descriptions.Item label="Tên">{record.name}</Descriptions.Item>
                  <Descriptions.Item label="Tài khoản">{record.email} </Descriptions.Item>
                  <Descriptions.Item label="Vị trí">Nhân viên bán hàng</Descriptions.Item>
                  <Descriptions.Item label="Thời gian làm việc">18:00:00 - 21:00:00</Descriptions.Item>
                  <Descriptions.Item label="Thời gian nghỉ" span={1}>
                    19:00:00-19:15:00
                  </Descriptions.Item>
                  <Descriptions.Item label="Tình trạng" span={3}>
                    <Badge status="processing" text="Đang làm việc" />
                  </Descriptions.Item>
                 
                </Descriptions>
  
                </Drawer>
              <Button icon="delete" shape="circle" type="danger" />
              <Modal
                  title="Xác nhận"
                 

                  okText="Xác nhận"
                  cancelText="Hủy"
                  okType="danger" >
                  Xóa nhân viên này?
              </Modal>
              </>
            
          
        )
      }
  
    ];
    const myColTitleStyle = {
      textOverflow: 'ellipsis',
      overflow: "hidden",
      whiteSpace: 'nowrap',
      
    };
    
    return (
      <>
      <ViewWrapper >
        
      <Button type="primary"   style={{ marginBottom: '3%' }}>
          Thêm dịch vụ mới +
      </Button>
      <TableWrapper dataSource={services.data.data} columns={columns}   />
      </ViewWrapper>
      <Drawer
            title="Create a new account"
            width={720}
            
            bodyStyle={{ paddingBottom: 80 }}
            footer={
              <div
                style={{
                  textAlign: 'right',
                }}
              >
                <Button  style={{ marginRight: 8 }}>
                  Cancel
                </Button>
                <Button  type="primary">
                  Submit
                </Button>
              </div>
            }
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={16}>
                  <Form.Item
                    name="name"
                    label="Tên"
                    rules={[{ required: true, message: 'Please enter user name' }]}
                  >
                    <Input placeholder="Please enter user name" />
                  </Form.Item>
                </Col>
                
              </Row>
              <Row gutter ={16}>
              <Col span={12}>
                  <Form.Item
                    name="price"
                    label="Giá"
                    rules={[{ required: true, message: 'Nhập giá' }]}
                  >
                    <Input
                      style={{ width: '100%' }}
                      
                      placeholder="Nhập giá"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="price_discount"
                    label="Giá ưu đãi"
                    rules={[{ required: true, message: 'Nhập giá' }]}
                  >
                    <Input
                      style={{ width: '100%' }}
                      
                      placeholder="Nhập giá"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter ={16}>
              <Col span={12}>
                  <Form.Item
                    name="image"
                    label="Hình ảnh (link)"
                    rules={[{ required: true, message: '' }]}
                  >
                    <Input
                      style={{ width: '100%' }}
                      
                      placeholder="Url"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="time_estimate"
                    label="Thời gian thực hiện"
                    rules={[{ required: true, message: 'Nhập thời gian thực hiện' }]}
                  >
                    <Input
                      style={{ width: '100%' }}
                      
                      placeholder="Nhập thời gian"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter ={16}>
              <Col span={12}>
                  <Form.Item
                    name="book"
                    label="Đăt online"
                    rules={[{ required: true, message: 'Nhập giá' }]}
                  >
                    <Checkbox>
                      Có
                    </Checkbox>
                    <Checkbox>
                      Không
                    </Checkbox>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="for"
                    label="Dành cho"
                    rules={[{ required: true, message: 'Nhập giá' }]}
                  >
                    <Checkbox>
                      Nam
                    </Checkbox>
                    <Checkbox>
                      Nữ
                    </Checkbox>
                  </Form.Item>
                </Col>
              </Row>
              
              
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="description"
                    label="Mô tả"
                    rules={[
                      {
                        required: true,
                        message: 'please enter url description',
                      },
                    ]}
                  >
                    <Input.TextArea rows={4} placeholder="Nhập mô tả của dịch vụ" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                <div
                style={{
                  textAlign: 'right',
                }}
              >
                <Button  style={{ marginRight: 8 }}>
                  Cancel
                </Button>
                <Button  type="primary">
                  Submit
                </Button>
              </div>
                </Col>
              </Row>
              
            </Form>
          </Drawer>
      </>
    );
  }
}
