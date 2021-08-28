import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from "moment";
import { EditTable } from "@iso/components/Invoice/InvoiceTable";
import OrderStatus from "@iso/components/Invoice/OrderStatus";
import notification from "@iso/components/Notification";
import Button from "@iso/components/uielements/button";
import { Textarea } from "@iso/components/uielements/input";
import DatePicker from "@iso/components/uielements/datePicker";
import Box from "@iso/components/utility/box";
import { Input } from "antd";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import InvoicePageWrapper from "./SingleInvoice.styles";
import { ViewTable } from "./InvoiceTable";
import invoiceActions from "@iso/redux/invoice/actions";
import { Select } from "antd";
import InvoiceAddress from '@iso/components/Invoice/Address';
import { API_URL } from "../../config/url/url";
const { Option } = Select;
const{TextArea} =Input;
const { updateInvoice, editInvoice } = invoiceActions;
const updateValues = (invoice) => {
  const { invoiceList } = invoice;
  let subTotal = 0;
  invoiceList.forEach((item, index) => {
    const price = item.costs * item.qty;
    invoice.invoiceList[index].price = price;
    invoice.invoiceList[index].key = index + 1;
    subTotal += price;
  });
  invoice.subTotal = subTotal;
  invoice.vatPrice = Math.floor(invoice.vatRate * subTotal * 0.01);
  invoice.totalCost = invoice.vatPrice + subTotal;
  return invoice;
};
const checkInvoice = (invoice) => {
  const emptyKeys = [
    "number",
    "billTo",
    "billToAddress",
    "billFrom",
    "billFromAddress",
    "currency",
  ];
  const emptyKeysErrors = [
    "Invoice Number",
    "Bill To",
    "Bill To Address",
    "Bill From",
    "Bill From Address",
    "Currency",
  ];
  for (let i = 0; i < emptyKeys.length; i++) {
    if (!invoice[emptyKeys[i]]) {
      return `Please fill in ${emptyKeysErrors[i]}`;
    }
  }
  for (let i = 0; i < invoice.invoiceList.length; i++) {
    if (!invoice.invoiceList[i].itemName) {
      return `Please fill in item name of ${i + 1} item`;
    }
    if (invoice.invoiceList[i].costs === 0) {
      return `cost of ${i + 1} item should be positive`;
    }
    if (invoice.invoiceList[i].qty === 0) {
      return `quantity of ${i + 1} item should be positive`;
    }
  }
  return "";
};

export default function(props) {
  const USER_TOKEN = localStorage.getItem("token");
  const AuthStr = "Bearer ".concat(USER_TOKEN);
  const dispatch = useDispatch();
  const {
    editableInvoice,
    isNewInvoice,
    redirectPath,
    toggleView,
    order,
    username,
  } = props;
  const onSave = () => {
    const error = checkInvoice(editableInvoice);
    if (error) {
      notification("error", error);
    } else {
      const successMessage = isNewInvoice
        ? "A new Invoice added"
        : "Invoice Updated";
      notification("success", successMessage);
      dispatch(updateInvoice(editableInvoice));
    }
  };
  function updateOrder(id){
    return axios.post(`${API_URL}/sub_admin/order/${id}/update`,
    {
        "status" : order_status,
        "delivery_status":delivery_status,
        "address":address
    },
    { headers: { Authorization: AuthStr,'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS','Access-Control-Allow-Origin' : '*' }})
    .then(res=>res.data.status);

  
  }
  const handleUpdate = async () =>{
    const statusUpdate = await updateOrder(order.id);
    if(statusUpdate == true){
      
    }
};
  const [order_status,setOrderStatus] = useState(order.status);
  const [delivery_status,setDeliveryStatus] = useState(order.delivery_status);
  const [address,setAddress] = useState(order.address)
  function handleChange(value) {
    setOrderStatus(value)
  }
  function handleChange(value) {
    setOrderStatus(value)
  }
  function handleChangeDelivery(value) {
    setDeliveryStatus(value)
  }
  return (
    <LayoutWrapper>
      <Box>
        <InvoicePageWrapper className="editView">
          <div className="PageHeader">
            

            <Button type="primary" onClick={handleUpdate} className="saveBtn">
              <span>Save</span>
            </Button>
          </div>
          <div className="PageContent">
            <div className="OrderInfo">
              <div className="LeftSideContent">
                <h3 className="Title">Invoice Info</h3>
                <span className="InvoiceNumber">{order.id}</span>
              </div>
              <div className="RightSideContent">
                <div className="RightSideStatus">
                  <span className="RightSideStatusSpan">Order Status: </span>
                  <Select defaultValue={order.status} style={{ width: 200,marginBottom:10 }} onChange={handleChange}>
      <Option value={0}>Chưa xử lý</Option>
      <Option value={1}>Thanh Toán</Option>
      <Option value={2}>
        Chưa thanh toán
      </Option>
      <Option value={3}>
        Hủy
      </Option>
      
    </Select>
                </div>
                <div className="RightSideStatus" >
                  <span className="RightSideStatusSpan">Giao hàng: </span>
                  <Select defaultValue={order.delivery_status} style={{ width: 200 }} onChange={handleChangeDelivery}>
      <Option value={0}>Chưa giao</Option>
      <Option value={1}>Đã giao</Option>
      
      
    </Select>
                </div>
                <div className="RightSideDate">
                  Order date:{" "}
                  <DatePicker
                    allowClear={false}
                    value={moment(new Date(order.created_at))}
                    onChange={(val) => {
                      editableInvoice.orderDate = val.toDate().getTime();
                      dispatch(editInvoice(order));
                    }}
                    format="MMMM Do YYYY"
                    animateYearScrolling={true}
                  />
                </div>
              </div>
            </div>
            <div className="BillingInformation">
              <div className="LeftSideContent">
              <h3 className="Title">Người đặt</h3>
              <InvoiceAddress
            companyAddress={username}
            
          />
                <h3 className="Title" style={{marginTop:"10px"}}>Địa chỉ</h3>
                <TextArea
                  defaultValue={order.address}
                 
                  rows={5}
                  name="billFromAddress"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  className="BillFormAddress"
                />
              </div>
              {/* <div className="RightSideContent">
                <Input
                  placeholder="Bill To"
                  value={order.address}
                  name="billTo"
                  onChange={handleChange}
                  className="BillFormTitle"
                />
                <Textarea
                  placeholder="Bill To Address"
                  value="{editableInvoice.billToAddress}"
                  rows={5}
                  name="billToAddress"
                  onChange={handleChange}
                  className="BillFormAddress"
                />
              </div> */}
              <div className="RightSideContent">
          <h3 className="Title">Chi nhánh</h3>

          <InvoiceAddress
            
            companyAddress={order.tail_id}
          />
          
        </div>
            </div>

            <div className="InvoiceTable editInvoiceTable">
            <ViewTable invoiceList={order.order_product} />
              {/* <div className="InvoiceTableBtn">
                <Button
                  onClick={() => {
                    editableInvoice.invoiceList.push({
                      key: editableInvoice.invoiceList.length + 1,
                      itemName: '',
                      costs: 0,
                      qty: 0,
                      price: 0,
                    });
                    dispatch(editInvoice(editableInvoice));
                  }}
                  type="primary"
                >
                  Add Item
                </Button>
              </div> */}
              <div className="TotalBill">
                {/* <p>
                  <span className="TotalBillTitle">Sub-total : </span>
                  <span>{`${editableInvoice.currency}${editableInvoice.subTotal}`}</span>
                </p> */}
                {/* <div className="vatRateCalc">
                  <span className="vatRateCalcSpan"> Total Vat : </span>
                  <div className="vatRateCalcWrap">
                    <Input
                      value={editableInvoice.vatRate}
                      addonAfter="%"
                      onChange={(event) => {
                        editableInvoice.vatRate = stringToPosetiveInt(
                          event.target.value,
                          editableInvoice.vatRate
                        );
                        dispatch(editInvoice(updateValues(editableInvoice)));
                      }}
                    />

                    <span>
                      {`${editableInvoice.currency}${editableInvoice.vatPrice}`}
                    </span>
                  </div>
                </div> */}
                <div className="currencySignWithTotal">
                  <span className="grandTotalSpan">Grand Total </span>
                  {/* <div className="currencySignWrap">
                    <Input
                      value={editableInvoice.currency}
                      onChange={handleChange}
                      name="currency"
                      className="currencySign"
                    />
                    <span className="currencySignSpan">
                      {editableInvoice.totalCost}
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="ButtonWrapper" />
          </div>
        </InvoicePageWrapper>
      </Box>
    </LayoutWrapper>
  );
}
