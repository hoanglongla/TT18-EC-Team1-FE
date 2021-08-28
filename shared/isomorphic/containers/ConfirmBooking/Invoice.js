import React from "react";
import moment from "moment";
import InvoiceAddress from "@iso/components/Invoice/Address";

import PageHeader from "../../components/utility/pageHeader";
import { Select } from "antd";
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
      <div className="OrderInfo">
        <div className="LeftSideContent">
          <h3 className="Title">Mã lịch hẹn</h3>
          <span className="InvoiceNumber">{currentInvoice.number}</span>
        </div>
        <div className="RightSideContent">
          <p>
            <span className="orderStatusSpan">Tình trạng lịch hẹn: </span>
            <span className="orderStatus">Đang chờ</span>
          </p>
          <p>
            <span className="orderDateSpan">Ngày đặt: </span>
            <span className="orderDate">
              {moment(new Date(currentInvoice.orderDate)).format(
                "MMMM Do YYYY"
              )}
            </span>
          </p>
          <p>
            <span className="orderDateSpan">Ngày hẹn: </span>
            <span className="orderDate">
              {moment(new Date(currentInvoice.orderDate)).format(
                "MMMM Do YYYY"
              )}
            </span>
          </p>
          <p>
            <span className="orderDateSpan">Thời gian từ: </span>
            <span className="orderDate">9:00 - 10:00</span>
          </p>
        </div>
      </div>
      <div className="BillingInformation">
        <div className="LeftSideContent">
          <h3 className="Title">Người đặt</h3>

          <div>
            <p className="NameEmail">
              <span className="Name">Nguyen Minh Quang</span>
              <span className="Email" style={{ whiteSpace: "pre-line" }}>
                nmq@gmail.com
              </span>
            </p>
          </div>
        </div>
        <div className="RightSideContent">
          <h3 className="Title">Chi nhánh</h3>

          <InvoiceAddress companyAddress={currentInvoice.billToAddress} />
          <h3 className="Title" style={{ marginTop: "10px" }}>
            Người phục vụ
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
        </div>
      </div>
      {/* <div className="InvoiceTable">
        <PageHeader>Các dịch vụ được đặt</PageHeader>
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
      </div> */}
    </div>
  );
}
