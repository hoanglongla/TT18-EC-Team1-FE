import React from "react";
import moment from "moment";
import InvoiceAddress from "@iso/components/Invoice/Address";
import { ViewTable } from "./InvoiceTable";
import PageHeader from "../../components/utility/pageHeader";
import { Select } from "antd";
import { Card } from "antd";
export default function Invoice({ currentInvoice }) {
  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }
  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  return (
    <div className="PageContent" style={{ padding: "20" }}>
      <div className="OrderInfo" >
        <Card title="Thông tin đơn hàng" type="inner"><h3 className="Title">Mã đơn hàng</h3>
          <span className="InvoiceNumber">{currentInvoice.number}</span>
          <p>
            <span className="orderStatusSpan">Tình trạng đơn hàng: </span>
            <span className="orderStatus">Đang chờ xác nhận</span>
          </p>
          <p>
            <span className="orderDateSpan">Ngày đặt: </span>
            <span className="orderDate">
              {moment(new Date(currentInvoice.orderDate)).format(
                "MMMM Do YYYY"
              )}
            </span>
          </p>
        </Card>
        <Card title="Khách hàng" type="inner">
        <div>
            <p className="NameEmail">
              <span className="Name">Nguyen Minh Quang</span>
              <span className="Email" style={{ whiteSpace: "pre-line" }}>
                nmq@gmail.com
              </span>
            </p>
          </div>
        </Card>
        <Card title="Giao hàng" type="inner">
        <h3 className="Title">Chi nhánh</h3>

<InvoiceAddress companyAddress={currentInvoice.billToAddress} />
<h3 className="Title" style={{ marginTop: "10px" }}>
  Nhân viên giao hàng
</h3>
<Select
  showSearch
  style={{ width: 200 }}
  placeholder="Select a person"
  optionFilterProp="children"
  onChange={onChange}
  onFocus={onFocus}
  onBlur={onBlur}
  onSearch={onSearch}
  filterOption={(input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }
>
  <Option value="jack">Jack</Option>
  <Option value="lucy">Lucy</Option>
  <Option value="tom">Tom</Option>
</Select>

        </Card>
        
        
      </div>
      <div className="InvoiceTable">
        <PageHeader>Chi tiết đơn hàng</PageHeader>
        <ViewTable invoiceList={currentInvoice.invoiceList} />
        <div className="TotalBill">
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
        </div>
      </div> 
    </div>
  );
}
