import React from "react";
import moment from "moment";
import InvoiceAddress from "@iso/components/Invoice/Address";
import { ViewTable } from "./InvoiceTable";
import PageHeader from "../../components/utility/pageHeader";
import { Divider, Descriptions, Card } from "antd";
export default function Invoice({ currentInvoice }) {
  return (
    <div className="PageContent" style={{ padding: "20" }}>
      <Divider style={{ fontSize: "20px" }}>Thông tin về dịch vụ</Divider>

      <div className="BillingInformation">
        <Card
          type="inner"
          title={`Mã lịch hẹn - ${currentInvoice.number}`}
          style={{ width: "30%",marginRight:'3%' }}
        >
          <p>
            <span className="orderStatusSpan">
              <b>Tình trạng đặt hẹn:</b>{" "}
            </span>
            <span className="orderStatus">Đang chờ</span>
          </p>
          <p>
            <span className="orderDateSpan">
              <b>Ngày đặt: </b>
            </span>
            <span className="orderDate">
              {moment(new Date(currentInvoice.orderDate)).format(
                "MMMM Do YYYY"
              )}
            </span>
          </p>
          <p>
            <span className="orderDateSpan">
              <b>Ngày hẹn:</b>{" "}
            </span>
            <span className="orderDate">
              {moment(new Date(currentInvoice.orderDate)).format(
                "MMMM Do YYYY"
              )}
            </span>
          </p>
        </Card>

        <Card type="inner" title="Khách hàng" style={{ width: "30%" }}>
          <InvoiceAddress
            companyName={currentInvoice.billFrom}
            companyAddress={currentInvoice.billFromAddress}
          />
        </Card>

        <Card type="inner" title="Phục vụ" style={{ width: "30%" }}>
          <h3 className="Title" style={{ marginTop: "10px" }}>
            Chi nhánh
          </h3>
          <InvoiceAddress
            companyName={currentInvoice.billFrom}
            companyAddress={currentInvoice.billFromAddress}
          />
          <h3 className="Title" style={{ marginTop: "10px" }}>
            Nhân viên phục vụ
          </h3>
          <InvoiceAddress companyName={currentInvoice.billTo} />
        </Card>
      </div>

      <div className="InvoiceTable">
        <PageHeader>Các dịch vụ được đặt</PageHeader>
        <ViewTable invoiceList={currentInvoice.invoiceList} />
        <Card
          title="Phương thức thanh toán"
          style={{ width: "40%", float: "left", marginTop: "20px" }}
        >
          <Descriptions>
            <Descriptions.Item label="Phương thức thanh toán" span={3}>
              Zhou Maomao
            </Descriptions.Item>
            <Descriptions.Item label="Thẻ" span={3}>
              Visa
            </Descriptions.Item>
            <Descriptions.Item label="Mã thẻ">
              Hangzhou, Zhejiang
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card
          title="Tổng tiền"
          style={{ width: "40%", float: "right", marginTop: "20px" }}
        >
          <p>
            Giá :{" "}
            <span>{`${currentInvoice.currency}${currentInvoice.subTotal}`}</span>
          </p>
          <p>
            Vat :{" "}
            <span>{`${currentInvoice.currency}${currentInvoice.vatPrice}`}</span>
          </p>
          <h3>
            Tổng giá :{" "}
            <span>{`${currentInvoice.currency}${currentInvoice.totalCost}`}</span>
          </h3>
        </Card>
      </div>
    </div>
  );
}
