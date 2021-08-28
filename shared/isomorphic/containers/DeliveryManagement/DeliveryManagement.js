import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import notification from '@iso/components/Notification';
import fakeData from '../Tables/data';
import HelperText from '@iso/components/utility/helper-text';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import PageHeader from '@iso/components/utility/pageHeader';
import IntlMessages from '@iso/components/utility/intlMessages';
import Scrollbars from '@iso/components/utility/customScrollBar';
import Button from '@iso/components/uielements/button';
import invoiceActions from '@iso/redux/invoice/actions';
import CardWrapper, { Box, StatusTag } from '../Invoice/Invoice.styles';
import * as TableView from "./TableViews/TableViews"
import { TabPane } from '../../components/uielements/tabs';
import { Tabs } from 'antd';
import { tableinfos } from './configs';
import TableDemoStyle from '../Tables/AntTables/Demo.styles';

const dataList = new fakeData(10);
const { initData, deleteInvoice } = invoiceActions;
export default function Invoices() {
    
  
  const [selected, setSelected] = React.useState([]);
  const { initialInvoices, invoices } = useSelector(state => state.Invoices);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  React.useEffect(() => {
    if (!initialInvoices) {
      dispatch(initData());
    }
  }, [dispatch, initialInvoices]);

  const columns = [
    {
      title: 'Number',
      dataIndex: 'number',
      rowKey: 'number',
      width: '15%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Bill From',
      dataIndex: 'billFrom',
      rowKey: 'billFrom',
      width: '25%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Bill TO',
      dataIndex: 'billTo',
      rowKey: 'billTo',
      width: '22%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Total Cost',
      dataIndex: 'totalCost',
      rowKey: 'totalCost',
      width: '15%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'orderStatus',
      rowKey: 'orderStatus',
      width: '13%',
      render: (text, orderStatus) => {
        let className;
        if (text === 'shipped' || text === 'Shipped' || text === 'SHIPPED') {
          className = 'shipped';
        } else if (
          text === 'delivered' ||
          text === 'Delivered' ||
          text === 'DELIVERED'
        ) {
          className = 'delivered';
        } else if (
          text === 'pending' ||
          text === 'Pending' ||
          text === 'PENDING'
        ) {
          className = 'pending';
        }
        return <StatusTag className={className}>{text}</StatusTag>;
      },
    },
    {
      title: '',
      dataIndex: 'view',
      rowKey: 'view',
      width: '10%',
      render: (text, invoice) => (
        <div className="isoInvoiceBtnView">
          <Link to={`${match.path}/confirm/${invoice.id}`}>
            <Button color="primary" className="invoiceViewBtn">
              View
            </Button>
          </Link>{' '}
          <Button
            className="invoiceDltBtn"
            // icon="delete"
            onClick={() => {
              notification('error', '1 invoice deleted');
              dispatch(deleteInvoice([invoice.key]));
              setSelected([]);
            }}
          >
            <i className="ion-android-delete" />
          </Button>
        </div>
      ),
    },
  ];
  const getnewInvoiceId = () => new Date().getTime();
  // const { match, invoices, deleteInvoice } = this.props;
  const rowSelection = {
    hideDefaultSelections: true,
    selectedRowKeys: selected,
    onChange: selected => setSelected(selected),
    selections: [
      {
        key: 'all-data',
        text: 'Select All Invoices',
        onSelect: () => setSelected(invoices.map(invoice => invoice.key)),
      },
      {
        key: 'no-data',
        text: 'Unselect all',
        onSelect: () => setSelected([]),
      },
      {
        key: 'delete-selected',
        text: 'Delete selected',
        onSelect: changableRowKeys => {
          if (selected.length > 0) {
            dispatch(deleteInvoice(selected));
            setSelected([]);
            notification('error', `${selected.length} invoices deleted`);
          }
        },
      },
    ],
    onSelection: selected => setSelected(selected),
  };
  function renderTable(tableInfo) {
    let Component;
    switch (tableInfo.value) {
    
      case 'all_booking':
        Component = TableView.AllBookingView;
        break;
      case 'success_booking':
        Component = TableView.SuccessBooking ;
        break;
    case 'wait_booking':
            Component = TableView.WaitBooking;
            break;
    default:
            Component = TableView.AllBookingView;
            break;    
      
    }
    return <Component tableInfo={tableInfo} dataList={dataList} />;
  }
  return (
    <LayoutWrapper>
      <PageHeader>
        <IntlMessages id="Danh sách đơn hàng" />
      </PageHeader>
      <Box>
        

        <CardWrapper title="Invoices">
          {invoices.length === 0 ? (
            <HelperText text="No Invoices" />
          ) : (
            <div className="isoInvoiceTable">
            
                <TableDemoStyle className="isoLayoutContent">
                    <Tabs defaultActiveKey="1">
                        {tableinfos.map(tableinfo => (
                        <TabPane tab={tableinfo.title} key={tableinfo.value}>
                            {renderTable(tableinfo)}
                        </TabPane>))}
                    </Tabs>
                </TableDemoStyle>
             
            </div>
          )}
        </CardWrapper>
      </Box>
    </LayoutWrapper>
  );
}