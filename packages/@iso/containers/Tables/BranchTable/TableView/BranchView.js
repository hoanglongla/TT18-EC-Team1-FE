import React from 'react';
import TableWrapper from '../AntTables.styles';
import { Link } from 'react-router-dom';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import services from '../../services';
import { Table } from 'antd';
import { TabPane } from '@iso/components/uielements/tabs';
import { Tag } from 'antd';
import { Button } from 'antd';
import { backgroundColor, color, marginRight } from 'styled-system';
import { FormWrapper,ViewWrapper } from '../AntTables.styles';
import { Form,Input,Checkbox } from 'antd';

import { Modal } from 'antd';
export default function() {
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
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
      width: "10%"  ,
      
    },
    {
      title: 'Điện thoại',
      dataIndex: 'price',
      key: 'price',
      width: "10%" ,
      ellipsis:true
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'price_discount',
      key: 'price_discount',
      width: "20%" ,
      
    },

    {
      title: '',
      dataIndex: 'action',
      width: '25%',
      render: (_, record) => (
        <>
          {record.name === 'initial' && <Button icon="plus" shape="circle" />}
          {record.name !== 'initial' && (
            <>
            
            <Link to={`/dashboard/employee_management`}>
            <Button type="primary"  style={{marginRight:"5px",height:"auto",width:"150px",whiteSpace:"normal",wordWrap: "break-word"}} >
                Xem nhân viên hiện có   
            </Button>
            </Link>
            <Link to="/dashboard/table_ant">
            <Button type="primary"  style={{marginRight:"5px",height:"auto",width:"150px",whiteSpace:"normal",wordWrap: "break-word"}} >
                Xem các dịch vụ hiện có
            </Button>
            </Link>
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
   
    <TableWrapper dataSource={services.data.data} columns={columns}   />
    </ViewWrapper>
    <Modal
        title="Thêm dịch vụ"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Thêm"
        cancelText="Hủy">
        
      </Modal>
    </>
  );
}