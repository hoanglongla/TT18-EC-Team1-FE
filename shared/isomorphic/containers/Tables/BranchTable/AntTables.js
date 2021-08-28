import React from 'react';
import  { TabPane } from '@iso/components/uielements/tabs';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import TableDemoStyle from './Demo.styles';
import fakeData from '../data';
import services from '../services'
import { tableinfos } from './configs';
import * as TableViews from './TableView/TableView';
import { Tabs } from 'antd';
import { Table } from 'antd';
const dataList = new fakeData(10);

export default function AntTable() {
  const [value, setValue] = React.useState(0);
  
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function renderTable(tableInfo) {
    let Component;
    switch (tableInfo.value) {
      case 'branch':
        Component = TableViews.BranchView;
        break;
  
    }
    return <Component tableInfo={tableInfo} dataList={dataList} />;
  }
  return (
    <LayoutContentWrapper>
      <TableDemoStyle className="isoLayoutContent">
      <Tabs defaultActiveKey="1">
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