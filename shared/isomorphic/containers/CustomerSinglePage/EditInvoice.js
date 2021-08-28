import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { EditTable } from '@iso/components/Invoice/InvoiceTable';
import OrderStatus from '@iso/components/Invoice/OrderStatus';
import notification from '@iso/components/Notification';
import Button from '@iso/components/uielements/button';
import Input, { Textarea } from '@iso/components/uielements/input';
import DatePicker from '@iso/components/uielements/datePicker';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import InvoicePageWrapper from './SingleInvoice.styles';
import { stringToPosetiveInt } from '@iso/lib/helpers/utility';
import { orderStatusOptions } from '../Invoice/config';
import invoiceActions from '@iso/redux/invoice/actions';

const { updateInvoice, editInvoice } = invoiceActions;
const updateValues = invoice => {
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
const checkInvoice = invoice => {
  const emptyKeys = [
    'number',
    'billTo',
    'billToAddress',
    'billFrom',
    'billFromAddress',
    'currency',
  ];
  const emptyKeysErrors = [
    'Invoice Number',
    'Bill To',
    'Bill To Address',
    'Bill From',
    'Bill From Address',
    'Currency',
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
  return '';
};

export default function(props) {
  const dispatch = useDispatch();
  const { editableInvoice, isNewInvoice, redirectPath, toggleView } = props;
  const onSave = () => {
    const error = checkInvoice(editableInvoice);
    if (error) {
      notification('error', error);
    } else {
      const successMessage = isNewInvoice
        ? 'A new Invoice added'
        : 'Invoice Updated';
      notification('success', successMessage);
      dispatch(updateInvoice(editableInvoice));
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    const data = {
      ...editableInvoice,
      [name]: value,
    };
    dispatch(editInvoice(data));
  }
  return (
    <LayoutWrapper>
      
    </LayoutWrapper>
  );
}
