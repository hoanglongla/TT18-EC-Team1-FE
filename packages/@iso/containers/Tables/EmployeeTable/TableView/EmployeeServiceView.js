import React from 'react';
import TableWrapper from '../../AntTables/AntTables.styles'

import { Button } from 'antd';
import { backgroundColor, color, marginRight } from 'styled-system';
import { FormWrapper,ViewWrapper } from '../../AntTables/AntTables.styles';
import { Drawer,Descriptions,Badge , Modal,Tag} from 'antd';

import service_employee from '../../service_employee';
import AddEmployeeView from './ModalView/AddEmployeeView';

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
      title: 'Tên nhân viên',
      dataIndex: 'username',
      key: 'name',
      width: "20%"  ,
      
    },
    {
      title: 'Tài khoản nhân viên',
      dataIndex: 'email',
      key: 'price',
      width: "20%" ,
      ellipsis:true
    },
    
    {
      title: 'Vị trí',
      dataIndex: 'role',
      key: 'description',
      width: "20%" ,
      ellipsis:true,
      
     
      
    },
    {
      title: 'Tình trạng',
      
      key: 'status',
      width: "20%" ,
      render:() =>{
        return(
          <Tag color="green" key="Đang làm">
            Đang làm 
            </Tag>
        )

      }
    },
    
    {
      title: '',
      dataIndex: 'action',
      width: '10%',
      render: (_, record) => (
        <>
          {record.name === 'initial' && <Button icon="plus" shape="circle" />}
          {record.name !== 'initial' && (
            <>
            <Button icon="search" onClick={showDrawerInfo} shape="circle" style={{backgroundColor: "#008CBA" ,marginRight:"5px"}} />
              <Drawer
              title="Thông tin nhân viên"
              width={720}
              visible={visibleInfo}
              onClose={handleCancelDrwerInfo} 
             
              bodyStyle={{ paddingBottom: 80 }}
              >
                <Descriptions title="" layout="vertical" bordered>
                <Descriptions.Item label="Tên">{record.username}</Descriptions.Item>
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
    <ViewWrapper>
    <Button type="primary"  onClick={showModal} style={{ marginBottom: '3%' }}>
        Thêm nhân viên mới +
    </Button>
    <TableWrapper dataSource={service_employee.data.data} columns={columns}   />
    </ViewWrapper>
    
    <Modal
        title="Thêm nhân viên"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Thêm"
        cancelText="Hủy"
    >
      
      </Modal>
    </>
  );
}