import React from 'react';
import moment from 'moment';
import InvoiceAddress from '@iso/components/Invoice/Address';
import { ViewTable } from './InvoiceTable';
import PageHeader from '../../components/utility/pageHeader';
export default function Invoice({ currentInvoice }) {
  return (
    <div className="PageContent" style={{ padding: '20',marginTop:'20px' }}>
     
      
      <div className="InvoiceTable">
        <PageHeader>Các dịch vụ đã làm</PageHeader>
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