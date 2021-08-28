import React from 'react';
import TableWrapper from '../AntTables.styles';
import services from '../../../Tables/services';

import { FormWrapper,ViewWrapper } from '../AntTables.styles';
import { StatusTag } from '../../../Invoice/Invoice.styles';
import { Drawer,Descriptions,Badge ,Modal,Col,Row,Form,Input,Checkbox} from 'antd';
import { Button } from 'antd';
export default function SimpleView(props){
    const {order} = props;
    const columns = [
      {
        title: 'Mã đơn hàng',
        dataIndex: 'id',
        key: '',
        width: "10%"  ,
        
      },
      {
        title: 'Trạng thái giao hàng',
        dataIndex: 'delivery_status',
        rowKey: 'deliveryStatus',
        width: '13%',
        render: (text) => {
          let className;
          let t = '';
          if (text === 0 ) {
            className = 'pending';
            t="Chưa giao"
          } else if (
            text === 1
          ) {
            className = 'delivered';
            t="Đã giao"
          } 
          return <StatusTag className={className}>{t}</StatusTag>;
        },
      },
      {
        title: 'Trang thái',
        dataIndex: 'status',
        rowKey: 'billFrom',
        width: '15%',
        render: status => {
          let className;
          let text='';
          if (status === 0) {
            className = 'shipped';
            text="Chưa giải quyết"
          } else if(status ===1) {
            className = 'delivered';
            text = 'Đã thanh toán';
          }else if(status ===2) {
            className = 'shipped';
            text = 'Chưa thanh toán';
          }
          
          return <StatusTag className={className}>{text}</StatusTag>;
        },
      },  
      {
        title: '',
        dataIndex: 'action',
        width: '15%',
        render: (_, record) => (
          <>
            {record.name === 'initial' && <Button icon="plus" shape="circle" />}
            {record.name !== 'initial' && (
              <>
              <Button
                key={`a-${record.name}`}
                // onClick={() => {
                //   showDrawerInfo();
                //   state.category_service = record;
                // }}
                type="primary"
            shape="round"
            style={{marginRight: "10px",border:'none'}}
              >
                Chi tiết
              </Button>

              <Button  shape="circle" type="danger" ><i className="ion-android-delete" /></Button>
              </>
            )}
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
      <TableWrapper dataSource={order} columns={columns}   />
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

