import React from 'react';
import { Link } from 'react-router-dom';
import { PDFExport } from '@progress/kendo-react-pdf';
import Box from '@iso/components/utility/box';
import Button from '@iso/components/uielements/button';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import InvoicePageWrapper from './SingleInvoice.styles';
import Invoice from './Invoice';
import { Descriptions , Badge} from 'antd';
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
              <span>Thay đổi thông tin</span>
            </Button>
            
          </div>
          <Descriptions title="" layout="vertical" bordered>
                <Descriptions.Item label="Tên">Quang</Descriptions.Item>
                <Descriptions.Item label="Tài khoản" span={2}>quang@gmail.com </Descriptions.Item>
                
                <Descriptions.Item label="Thời gian làm việc">18:00:00 - 21:00:00</Descriptions.Item>
                <Descriptions.Item label="Ngày làm"></Descriptions.Item>
                <Descriptions.Item label="Vị trí">Nhân viên dịch vụ</Descriptions.Item>
                <Descriptions.Item label="Thời gian nghỉ" span={1}>
                  19:00:00-19:15:00
                </Descriptions.Item>
                <Descriptions.Item label="Ngày nghỉ">18:00:00 - 21:00:00</Descriptions.Item>
                <Descriptions.Item label="Tình trạng" span={3}>
                  <Badge status="processing" text="Đang làm việc" />
                </Descriptions.Item>
               
              </Descriptions>
          
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
