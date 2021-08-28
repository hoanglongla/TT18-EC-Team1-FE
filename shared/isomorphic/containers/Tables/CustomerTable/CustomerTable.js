import React from 'react';
import { Link } from 'react-router-dom';

import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import notification from '@iso/components/Notification';
import HelperText from '@iso/components/utility/helper-text';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import PageHeader from '@iso/components/utility/pageHeader';
import IntlMessages from '@iso/components/utility/intlMessages';
import Scrollbars from '@iso/components/utility/customScrollBar';
import Button from '@iso/components/uielements/button';
import invoiceActions from '@iso/redux/invoice/actions';
import CardWrapper, { Box, StatusTag } from '../../Invoice/Invoice.styles';
import TableWrapper from "../AntTables/AntTables.styles"
import {Modal} from 'antd';
import axios from 'axios';
const { initData, deleteInvoice } = invoiceActions;
export default function Invoices() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState();
  const [email, setEmail]= useState();

  const [customer,setCustomer] = useState({
    customer_id : null,
    customer_name: null
  }) 

  const match = useRouteMatch();
  function getCustomer() {
    axios
      .get(`${API_URL}/g/user?is_customer=1`)
      .then((response) => {
        if(response.data.status == true ){
        const total_pages = response.data.data.meta["last_page"];
        console.log(total_pages);
        let page = 1;
        while(page <= total_pages){
          axios.get(`${API_URL}/g/user?is_customer=1&page=${page}`)
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

  useEffect( ()=>{
   async function fetchData() {
     
      // You can await here
      await getCustomer();
      // ...
    }
   fetchData(); 
   
  },[])

  const [visibleDeleteModal, setVisibleDeleteModal] = React.useState(false);
  const showModalDelete = () => {
    setVisibleDeleteModal(true);
  };
  const handleCancelDeleteModal = () => {
    console.log("Clicked cancel button");
    setVisibleDeleteModal(false);
  };
  //Delete 
  async function DeleleBranch() {  
    return axios.get(`http://econail.localhost/api/admin/tail/${branch.branch_id}/delete`,
    { headers: { Authorization: AuthStr,'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS','Access-Control-Allow-Origin' : '*' }})
    .then(res=>res.data.status);

  }
  const handleOkDeleteModal = async () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    const statusDelete = await DeleleBranch(branch.branch_id);
    if(statusDelete==true){

      setTimeout(() => {
        setData([]);  
        setVisibleDeleteModal(false);
        setConfirmLoading(false);
        getBranch();
        
        
        
      }, 2000);
    }
  };

  
  const columns = [
    {
      title: 'Tên',
      dataIndex: 'username',
      rowKey: 'number',
      width: '15%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      rowKey: 'billFrom',
      width: '25%',
      render: text => <span>{text}</span>,
    },
    
    {
      title: 'Status',
      dataIndex: 'orderStatus',
      rowKey: 'orderStatus',
      width: '13%',
      render: (text, orderStatus) => {
        let className;
        if (text === 'shipped' || text === 'Shipped' || text === 'SHIPPED') {
          className = 'shipped';
        } else if (
          text === 'delivered' ||
          text === 'Delivered' ||
          text === 'DELIVERED'
        ) {
          className = 'delivered';
        } else if (
          text === 'pending' ||
          text === 'Pending' ||
          text === 'PENDING'
        ) {
          className = 'pending';
        }
        return <StatusTag className={className}>online</StatusTag>;
      },
    },
    {
      title: '',
      dataIndex: 'view',
      rowKey: 'view',
      width: '10%',
      render: (text, invoice) => (
        <div className="isoInvoiceBtnView">
          <Link to={{pathname:`${match.path}/${invoice.id}`, state: { id_customer: invoice.id }}}>
            <Button color="primary" className="invoiceViewBtn">
              Xem
            </Button>
          </Link>
          <Button
            className="invoiceDltBtn"
            // icon="delete"
            onClick={() => {
              showModalDelete();
              customer.customer_id = invoice.id;
             customer.customer_name = invoice.username;
            }}
          >
            <i className="ion-android-delete" />
          </Button>
        </div>
      ),
    },
  ];
  const getnewInvoiceId = () => new Date().getTime();
  // const { match, invoices, deleteInvoice } = this.props;
  
  return (
    <LayoutWrapper>
      <PageHeader>
        <IntlMessages id="Tài khoản khách hàng" />
      </PageHeader>
      <Box>
        <div className="isoInvoiceTableBtn">
          
        </div>

        <CardWrapper title="Invoices">
          {data.length === 0 ? (
            <HelperText text="Loading...." />
          ) : (
            <div className="isoInvoiceTable">
              <Scrollbars
                style={{ width: '100%', height: 'calc(100vh - 70px)' }}
              >
                <TableWrapper
                  
                  dataSource={data}
                  columns={columns}
                  pagination={false}
                  className="invoiceListTable"
                />
              </Scrollbars>
            </div>
          )}
        </CardWrapper>
      </Box>
      <Modal
              title="Xác nhận"
              visible={visibleDeleteModal}
              onOk={handleOkDeleteModal}
              onCancel={handleCancelDeleteModal}
              okText="Xác nhận"
              cancelText="Hủy"
              okType="danger"
            >
              <p>Xóa khách hàng này {customer.customer_name}</p>
        </Modal>
    </LayoutWrapper>
  );
}

