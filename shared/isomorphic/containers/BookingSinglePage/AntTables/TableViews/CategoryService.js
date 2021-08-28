import React , { useState }from 'react';
import { Component } from 'react';
import TableWrapper from '../AntTables.styles';
import { Button } from 'antd';
import categories from "../../category"
import { Drawer,Descriptions,Badge , Modal} from 'antd';

import { backgroundColor, color, marginRight } from 'styled-system';
import AddServiceCategoryView from './ModalView/AddServiceCategoryView';
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
      title: 'Tên thể loại',
      dataIndex: 'name',
      key: 'name',
      width: "30%"  ,
      
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
      key: 'note',
      width: "30%" ,
      ellipsis:true
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
              <Button icon="search" shape="circle" style={{backgroundColor: "#008CBA" ,marginRight:"5px"}} />
              
              <Button icon="edit" shape="circle" style={{backgroundColor: "#4CAF50" ,marginRight:"5px"}} />
              <Button icon="delete" shape="circle" type="danger" />
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
    
    <Button type="primary" onClick={showModal} style={{ marginBottom: '3%' }}>
        Thêm thể loại mới +
    </Button>
   <TableWrapper dataSource={categories.data.data} columns={columns}   />
    <Modal
    title="Thêm thể loại"
    visible={visible}
    confirmLoading={confirmLoading}
    onOk={handleOk}
    onCancel={handleCancel}
    okText="Thêm"
    cancelText="Hủy"
    
    >
      <AddServiceCategoryView/>

    </Modal>
    </>
  );
}
