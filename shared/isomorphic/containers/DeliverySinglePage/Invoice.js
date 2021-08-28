import React from 'react';
import moment from 'moment';
import InvoiceAddress from '@iso/components/Invoice/Address';
import { ViewTable } from './InvoiceTable';
import PageHeader from '../../components/utility/pageHeader';
export default function Invoice(props) {

  let {data,username} =props;
  const columns = [
    {
      title: 'Mã sản phẩm',
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
      render: text => <span>{text}</span>,
    },
    {
      title: 'Trang thái',
      dataIndex: 'status',
      rowKey: 'billFrom',
      width: '10%',
      render: status => {
        let className;
        let text='';
        if (status === 0) {
          className = 'shipped';
          text="Chưa hoàn thành"
        } else {
          className = 'Đã hoàn thành';
        }
        
        return <StatusTag className={className}>Chưa hoàn thành</StatusTag>;
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
          className = 'delivered';
          t="Đã giao"
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
          <Link to={{pathname:`/dashboard/delivery_management/${invoice.id}`,state: { id_order: invoice.id }}}>
          
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
  return (
    <div className="PageContent" style={{ padding: '20' }}>
      <div className="OrderInfo">
        <div className="LeftSideContent">
          <h3 className="Title">Mã đơn hàng</h3>
          <span className="InvoiceNumber">{data.id}</span>
        </div>
        <div className="RightSideContent">
          <p>
            <span className="orderStatusSpan">Tình trạng đơn hàng: </span>
            <span className="orderStatus">{data.status === 0 ? ("Đang chờ giải quyết"):data.status === 1?("Đã thanh toán"):data.status===2?("Chưa thanh toán"):("Hủy")}</span>
          </p>
          <p>
            <span className="orderDateSpan">Ngày đặt: </span>
            <span className="orderDate">
              {moment(new Date(data.created_at)).format(
                'MMMM Do YYYY'
              )}
            </span>
          </p>
          <p>
            <span className="orderDateSpan">Tình trạng giao hàng: </span>
            <span className="orderDate">
              {data.delivery_status == 0 ?(
                "Chưa giao"
              ):("Đã giao")}
            </span>
          </p>
        </div>
      </div>
      <div className="BillingInformation">
        <div className="LeftSideContent">
          <h3 className="Title">Người đặt</h3>

          <InvoiceAddress
            companyAddress={username}
            
          />
          <h3 className="Title" style={{marginTop:"10px"}}>Địa chỉ</h3>
          <InvoiceAddress
          companyName={data.address}
          />
        </div>
        <div className="RightSideContent">
          <h3 className="Title">Chi nhánh</h3>

          <InvoiceAddress
            
            companyAddress={data.tail_id}
          />
          <h3 className="Title" style={{marginTop:"10px"}}>Người giao</h3>
          <InvoiceAddress
            companyName={data.tail_id}
            
          />
        </div>
        
      </div>
      <div className="InvoiceTable">
        <PageHeader>Chi tiết đơn hàng</PageHeader>
        <ViewTable invoiceList={data.order_product} />
        {/* <div className="TotalBill">
          <p>
            Giá :{' '}
            <span>{`${currentInvoice.currency}${currentInvoice.subTotal}`}</span>
          </p>
          <p>
            Vat :{' '}
            <span>{`${currentInvoice.currency}${currentInvoice.vatPrice}`}</span>
          </p>
          <h3>
            Tổng giá :{' '}
            <span>{`${currentInvoice.currency}${currentInvoice.totalCost}`}</span>
          </h3>
        </div> */}
      </div>
    </div>
  );
}