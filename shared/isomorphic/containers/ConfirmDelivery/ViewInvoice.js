import React from 'react';
import { Link } from 'react-router-dom';
import { PDFExport } from '@progress/kendo-react-pdf';
import Box from '@iso/components/utility/box';
import Button from '@iso/components/uielements/button';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import InvoicePageWrapper from './SingleInvoice.styles';
import Invoice from './Invoice';

export default function(props) {
  let pdfExportComponent;
  const printDocument = () => {
    pdfExportComponent.save();
  };
  const { currentInvoice, toggleView, redirectPath } = props;
  console.log(props, 'props');

  return (
    <LayoutWrapper>
      <Box style={{ padding: 20 }}>
        <InvoicePageWrapper className="InvoicePageWrapper">
          <div className="PageHeader" style={{ padding: '20px 20px 0' }}>
            <Link to={redirectPath}>
              <Button className="isoGoInvoBtn">
                <span>Về trang trước</span>
              </Button>
            </Link>
            <Button color="secondary" onClick={() => toggleView(true)}>
              <span>Xác nhận</span>
            </Button>
            
          </div>
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
            <Invoice
              currentInvoice={currentInvoice}
              ref={invoice => (invoice = invoice)}
            />
          
          {/* </div> */}
          <div className="ButtonWrapper">
            
          </div>
        </InvoicePageWrapper>
      </Box>
    </LayoutWrapper>
  );
}
