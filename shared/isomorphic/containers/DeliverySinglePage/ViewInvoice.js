import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PDFExport } from '@progress/kendo-react-pdf';
import Box from '@iso/components/utility/box';
import Button from '@iso/components/uielements/button';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import InvoicePageWrapper from './SingleInvoice.styles';
import Invoice from './Invoice';
import axios from 'axios';
export default function(props) {
  let pdfExportComponent;
  const printDocument = () => {
    pdfExportComponent.save();
  };
  const [data,setData] = useState([]);
    const USER_TOKEN = localStorage.getItem("token");
    const AuthStr = "Bearer ".concat(USER_TOKEN);
  const { order,username } = props;
  console.log(props, 'props');

  return (
    <LayoutWrapper>
      <Box style={{ padding: 20 }}>
        <InvoicePageWrapper className="InvoicePageWrapper">
          
          {/* <div
              id="divToPrint"
              className="mt4"
              style={{
                backgroundColor: '#ffffff',
                width: '210mm',
                minHeight: '297mm',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            > */}
          <PDFExport
            ref={component => (pdfExportComponent = component)}
            paperSize="A4"
            margin="20pt"
          >
            <Invoice
              data={order}
              username={username}
            />
          </PDFExport>
          {/* </div> */}
          <div className="ButtonWrapper">
            
          </div>
        </InvoicePageWrapper>
      </Box>
    </LayoutWrapper>
  );
}
