import React from 'react';
import  { TabPane } from '@iso/components/uielements/tabs';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import TableDemoStyle from './Demo.styles';
import fakeData from '../data';

import { tableinfos } from './config';
import * as TableViews from './TableView/TableViews';
import { Tabs } from 'antd';

const dataList = new fakeData(10);

export default function AntTable() {
  const [value, setValue] = React.useState(0);
  
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function renderTable(tableInfo) {
    let Component;
    switch (tableInfo.value) {
      case 'service_employee':
        Component = TableViews.EmployeeServiceView;
        break;
        case 'product_employee':
          Component = TableViews.EmployeeProductView;
          break;
      default:
        Component = TableViews.AddEmployeeView;
    }
    return <Component tableInfo={tableInfo} dataList={dataList} />;
  }
  return (
    <LayoutContentWrapper>
      <TableDemoStyle className="isoLayoutContent">
      <Tabs defaultActiveKey="1" t style={{ marginBottom: 32 ,padding:"0px" }} >
          {/* <TabPane tab="Chi nhánh 1 : Beauty Hand" key="1" >
          <Tabs defaultActiveKey="1">
            {tableinfos.map(tableinfo => (
            <TabPane tab={tableinfo.title} key={tableinfo.value}>
              {renderTable(tableinfo)}
              </TabPane>))}
          </Tabs>
          </TabPane>
          <TabPane tab="Chi nhánh 2 : Beauty Hand" key="2">
          <Tabs defaultActiveKey="1">
            {tableinfos.map(tableinfo => (
            <TabPane tab={tableinfo.title} key={tableinfo.value}>
              {renderTable(tableinfo)}
              </TabPane>))}
          </Tabs>
          </TabPane>
          <TabPane tab="Chi nhánh 3 : Beauty Hand" key="3">
          <Tabs defaultActiveKey="1">
            
          </Tabs>
          </TabPane> */}
          {tableinfos.map(tableinfo => (
            <TabPane tab={tableinfo.title} key={tableinfo.value}>
              {renderTable(tableinfo)}
              </TabPane>))}
        </Tabs>
      

      </TableDemoStyle>
    </LayoutContentWrapper>
  );
}

export { TableViews, tableinfos, dataList };
