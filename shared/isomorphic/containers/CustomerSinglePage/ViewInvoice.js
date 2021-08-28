import React from 'react';
import { Link } from 'react-router-dom';
import { PDFExport } from '@progress/kendo-react-pdf';
import fakeData from '../Tables/data';
import Box from '@iso/components/utility/box';
import * as TableViews from './AntTables/TableViews/TableViews';;
import Button from '@iso/components/uielements/button';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import InvoicePageWrapper from './SingleInvoice.styles';
import Invoice from '../Invoice/Invoice';
import { Avatar,Descriptions } from 'antd';
import { tableinfos } from './AntTables/configs';
import { Tabs } from 'antd';
import  { TabPane } from '@iso/components/uielements/tabs';
import AntTable from './AntTables/AntTables';
const dataList = new fakeData(10);
export default function(props) {
  
  const {customer,info,order} =props;
  console.log(props, 'props');
  function renderTable(tableInfo) {
    let Component;
    switch (tableInfo.value) {
    
      case 'booking_service':
        Component = TableViews.BookingView;
        break;
      default:
        Component = TableViews.OrderView;
        break;
      
    }
    return <Component tableInfo={tableInfo} dataList={dataList} order={order} />;
  }
  return (
    <LayoutWrapper>
      <Box style={{ padding: 20 }}>
        <InvoicePageWrapper className="InvoicePageWrapper">
          <div className="PageHeader" style={{ padding: '20px 20px 0' }}>
            
          </div>
          {/* <Button color="secondary" onClick={() => toggleView(true)}>
              <span>Edit Invoice</span>
          </Button> */}
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
            <Avatar style={{ backgroundColor: "#f56a00", verticalAlign: 'middle' }} size="large" size={64} >
              Q
            </Avatar>
            <Descriptions title="" style={{marginTop:"10px"}}>
             <Descriptions.Item label="Tên khách hàng">{info.fullname != null ?(info.fullname):("Không có")}</Descriptions.Item>
             <Descriptions.Item label="Email">{customer.email != null ?(customer.email):("Không có")}</Descriptions.Item>
             <Descriptions.Item label="Điện thoại">{info.phone != null ?(info.phone):("Không có")}</Descriptions.Item>
             <Descriptions.Item label="Tài khoản">{customer.username != null ?(customer.username):("Không có")}</Descriptions.Item>
             <Descriptions.Item label="Công ty">{info.company != null ?(info.company):("Không có")}</Descriptions.Item>
             <Descriptions.Item label="Address">
             {info.address != null ?(info.address):("Không có")}
             </Descriptions.Item>
             </Descriptions>
             
             <Tabs defaultActiveKey="1">
               {tableinfos.map(tableinfo => (
               <TabPane tab={tableinfo.title} key={tableinfo.value}>
                 {renderTable(tableinfo)}
                 </TabPane>))}
              </Tabs>
        </InvoicePageWrapper>
      </Box>
    </LayoutWrapper>
  );
}
