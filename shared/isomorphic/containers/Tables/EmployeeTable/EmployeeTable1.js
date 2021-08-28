import React from 'react';
import  { TabPane } from '@iso/components/uielements/tabs';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import TableDemoStyle from './Demo.styles';
import fakeData from '../data';

import { tableinfos } from './config';
import * as TableViews from './TableView/TableViews.js';
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