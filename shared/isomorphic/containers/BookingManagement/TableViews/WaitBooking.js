import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import invoiceActions from '@iso/redux/invoice/actions';
import TableWrapper from "../BookingManagement.style"
import { Button } from 'antd';
import { ViewWrapper } from '../BookingManagement.style';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import _ from 'lodash';
import CardWrapper, { Box, StatusTag } from '../../Invoice/Invoice.styles';
import Scrollbars from '@iso/components/utility/customScrollBar';
import IntlMessages from '../../../components/utility/intlMessages';
import { Modal } from 'antd';
import { PageHeader } from 'antd';
const { initData, deleteInvoice } = invoiceActions;
export default function Invoices() {
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
  const [selected, setSelected] = React.useState([]);
  const { initialInvoices, invoices } = useSelector(state => state.Invoices);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  React.useEffect(() => {
    if (!initialInvoices) {
      dispatch(initData());
    }
  }, [dispatch, initialInvoices]);

  const columns = [
    {
      title: 'Mã dịch vụ',
      dataIndex: 'number',
      key: 'number',
      width: "10%"  ,
      
    },
    {
      title: 'Tên dịch vụ',
      dataIndex: 'billFrom',
      key: 'price',
      width: "15%" ,
      ellipsis:true
    },
    {
      title: 'Ngày làm',
      dataIndex: 'orderDate',
      key: 'price_discount',
      width: "7%" ,
      
    },
    {
      title: 'Tên KH',
      dataIndex: 'billFrom',
      key: 'price_discount',
      width: "10%" ,
      
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
        return <StatusTag className="pending">Đang chờ</StatusTag>;
      },
    },
    {
      title: '',
      dataIndex: 'view',
      rowKey: 'view',
      width: '20%',
      render: (text, invoice) => (
        <div className="isoInvoiceBtnView">
          <Link to={`/dashboard/booking_management/confirm/${invoice.id}`}>
            <Button color="primary" className="invoiceViewBtn">
              Xác nhận
            </Button>
          </Link>{' '}
          
          <Button
            className="invoiceDltBtn"
            // icon="delete"
            onClick={showModalDelete}
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
                  
                  dataSource={invoices}
                  columns={columns}
                  pagination={false}
                  className="invoiceListTable"
                />
              
            </div>
          )}
       <Modal
            title="Xác nhận"
            visible={visibleDeleteModal}
            onOk={handleOkDeleteModal}
            onCancel={handleCancelDeleteModal}
            okText="Xác nhận"
            cancelText="Hủy"
            okType="danger"
          >
            Đồng ý bỏ lịch hẹn này?
      </Modal>
    
    </ViewWrapper>
  );
}
