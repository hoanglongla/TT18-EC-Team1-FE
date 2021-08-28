import React , { useState , useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Component } from 'react';
import TableWrapper from '../CustomerTable.styles';
import { Button } from 'antd';
import categories from "../../category"
import { Drawer,Descriptions,Badge , Modal} from 'antd';
import { Link ,useRouteMatch} from 'react-router-dom';
import _ from 'lodash';
import { API_URL } from '../../../../config/url/url';

export default function() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState();
  const [email, setEmail]= useState();
  const [address,setAddress] = useState();
  const [form] = Form.useForm();
  const invoices = useSelector(state => state.Invoices);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const { invoiceId } = useParams();
  const { initialInvoices, currentInvoice, enableEditView } = invoices;
  const [visibleInfo, setVisibleInfo] = React.useState(false);
  function getCustomer() {
    axios
      .get(`${API_URL}/g/user?is_customer=1`)
      .then((response) => {
        if(response.data.status == true ){
        const total_pages = response.data.data.meta["last_page"];
        console.log(total_pages);
        let page = 1;
        while(page <= total_pages){
          axios.get(`${API_URL}/admin/user?is_customer=1&page=${page}`, {
              
            })
            .then((res) => {
               
                setData(old => [...old, ...res.data.data.data]);
            }
          );
          page++;
        }
        }
        //const branch = response.data.data.data;
        //setData(branch);
      });
  }
  useEffect(()=>{
    getCustomer();


  },[])

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
      title: 'Tên',
      dataIndex: 'username',
      key: 'name',
      width: "20%"  ,
      
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: "20%" ,
      ellipsis:true
    },
    {
      title: 'Số đơn hàng',
      dataIndex: 'email',
      key: 'email',
      width: "20%" ,
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
              
              <Link to={`/customer_management/${record.name}`}>
              <Button icon="search" shape="circle" style={{backgroundColor: "#008CBA" ,marginRight:"5px"}} /> 
              </Link>
              
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
   <TableWrapper dataSource={data} columns={columns}   />
    <Modal
    title="Thêm thể loại"
    visible={visible}
    confirmLoading={confirmLoading}
    onOk={handleOk}
    onCancel={handleCancel}
    okText="Thêm"
    cancelText="Hủy"
    
    >
      

    </Modal>
    </>
  );
}
