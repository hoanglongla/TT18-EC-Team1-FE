import React from 'react';
import TableWrapper from '../../AntTables/AntTables.styles'

import { Button } from 'antd';
import DrawerDetailService from './Drawer';
import { backgroundColor, color, marginRight } from 'styled-system';
import { FormWrapper,ViewWrapper } from '../../AntTables/AntTables.styles';
import { Drawer,Descriptions,Badge , Modal} from 'antd';
import services_1 from '../../services';
import service_employee from '../../service_employee';

import AddEmployeeView from '../../EmployeeTable/TableView/ModalView/AddEmployeeView';

export default function() {
  
  const [visibleInfo, setVisibleInfo] = React.useState(false);
  const showDrawerInfo =()=>{
    setVisibleInfo(true);
  };
  const handleCancelDrwerInfo = () => {
    setVisibleInfo(false);
  };
  const [visibleDeleteModal, setVisibleDeleteModal] = React.useState(false);
  const showModalDelete = () => {
    setVisibleDeleteModal(true);
  };

  const handleOkDeleteModal = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisibleDeleteModal(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancelDeleteModal = () => {
    console.log('Clicked cancel button');
    setVisibleDeleteModal(false);
  };
  //
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };
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
      title: 'Action',
      dataIndex: 'action',
      width: '10%',
      render: (text,record) => (
        
          
            <>
            
            <Button key={`a-${record.name}`} icon="search" onClick={showDrawerInfo} shape="circle" style={{backgroundColor: "#008CBA" ,marginRight:"5px"}} />
              
              
            <Button icon="delete" onClick={showModalDelete} shape="circle" type="danger" />
            <Modal
                title="Xác nhận"
               
                visible={visibleDeleteModal}
                onOk={handleOkDeleteModal}
                onCancel={handleCancelDeleteModal}
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
    <ViewWrapper>
    <Button type="primary"  onClick={showModal} style={{ marginBottom: '3%' }}>
        Thêm dịch vụ mới +
    </Button>
    <TableWrapper dataSource={services_1.data.data} columns={columns}   />
    </ViewWrapper>
    <Drawer
              closable={false}
              title="Thông tin  dịch vụ"
              width={720}
              visible={visibleInfo}
              onClose={handleCancelDrwerInfo} 
              
              bodyStyle={{ paddingBottom: 80 }}
              >
                <Descriptions title="" layout="vertical" bordered>
                <Descriptions.Item label="Tên dịch vụ" span={12}></Descriptions.Item>
                <Descriptions.Item label="Giá" span={1}></Descriptions.Item>
                <Descriptions.Item label="Giá ưu đãi" span={1}></Descriptions.Item>
                <Descriptions.Item label="Dành cho" span={1}></Descriptions.Item>
                <Descriptions.Item label="Đặt online" span={1}>
                 
                </Descriptions.Item>
                <Descriptions.Item label="Tình trạng" span={3}>
                  <Badge status="processing" text="Còn trống" />
                </Descriptions.Item>
                <Descriptions.Item label="Mô tả">
                  
                </Descriptions.Item>
              </Descriptions>

              </Drawer>
    <Modal
        title="Thêm nhân viên"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Thêm"
        cancelText="Hủy"
    >
      <AddEmployeeView/>
      </Modal>
    </>
  );
}