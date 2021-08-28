import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import invoiceActions from '@iso/redux/invoice/actions';
import TableWrapper from "../DeliveryManagement.style"
import { Button } from 'antd';
import { ViewWrapper } from '../DeliveryManagement.style';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import _ from 'lodash';
import moment from 'moment';
import CardWrapper, { Box, StatusTag } from '../../Invoice/Invoice.styles';
import axios from 'axios';
import { API_URL } from '../../../config/url/url';
const { initData, deleteInvoice } = invoiceActions;
export default function Invoices() {
  const [selected, setSelected] = React.useState([]);
  const { initialInvoices, invoices } = useSelector(state => state.Invoices);
  const [data,setData]= useState([]);
  const USER_TOKEN = localStorage.getItem("token");
  const AuthStr = "Bearer ".concat(USER_TOKEN);
  const tailid = localStorage.getItem("tail_id");
  const dispatch = useDispatch();
  const match = useRouteMatch();
  function getOrder() {
    axios
      .get(`${API_URL}/sub_admin/order`,
      { headers: { Authorization: AuthStr,
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Origin' : '*' }})
      .then((response) => {
        if(response.data.status == true ){
        const total_pages = response.data.data.meta["last_page"];
        console.log(total_pages);
        let page = 1;
        while(page <= total_pages){
          axios.get(`${API_URL}/sub_admin/order?page=${page}`,
          { headers: { Authorization: AuthStr,'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS','Access-Control-Allow-Origin' : '*' }})
            .then((res) => {
                const order = res.data.data.data;
                const filteredProducts = order.filter(order => order.status===3)
                setData(old => [...old, ...filteredProducts]);
            }
          );
          page++;
        }
        }
        //const branch = response.data.data.data;
        //setData(branch);
      });
  }
  React.useEffect(() => {
    async function fetchData(){
      await getOrder();
    }
    fetchData();
  }, []);

  const columns = [
    {
      title: 'Mã đơn hàng',
      dataIndex: 'id',
      rowKey: 'number',
      width: '15%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Tên KH',
      dataIndex: 'user_id',
      rowKey: 'billFrom',
      width: '15%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Ngày đặt',
      dataIndex: 'created_at',
      rowKey: 'billFrom',
      width: '15%',
      render: text => <span>{moment(new Date(text)).format(
        'MMMM Do YYYY'
      )}</span>,
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
        else if(status ===3) {
          className = 'cancel';
          text = 'Hủy';
        }
        
        return <StatusTag className={className}>{text}</StatusTag>;
      },
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
          className = 'cancel';
          t="Hủy"
        } 
        return <StatusTag className={className}>{t}</StatusTag>;
      },
    },
    {
      title: '',
      dataIndex: 'view',
      rowKey: 'view',
      width: '20%',
      render: (text, invoice) => (
        <div className="isoInvoiceBtnView">
          <Link to={{pathname:`/dashboard/delivery_management/${invoice.id}`,state: { id_order: invoice.id,id_user:invoice.user_id,id_tail:invoice.tail_id }}}>
          
            <Button color="dashed" className="invoiceViewBtn">
              Xác nhận
            </Button>
          </Link>{' '}
          
          {' '}
          <Button
            className="invoiceDltBtn"
            // icon="delete"
            onClick={() => {
              notification('error', '1 invoice deleted');
              dispatch(deleteInvoice([invoice.key]));
              setSelected([]);
            }}
          >
            <i className="ion-android-delete" />
          </Button>
        </div>
      ),
    },
  ];
  
  // const { match, invoices, deleteInvoice } = this.props;
  
  return (
    <ViewWrapper>
       {invoices.length === 0 ? (
            <HelperText text="No Invoices" />
          ) : (
            <div className="isoInvoiceTable"> 
              
                <TableWrapper
                  
                  dataSource={data}
                  columns={columns}
                 
                  className="invoiceListTable"
                />
              
            </div>
          )}
       
    
    </ViewWrapper>
  );
}