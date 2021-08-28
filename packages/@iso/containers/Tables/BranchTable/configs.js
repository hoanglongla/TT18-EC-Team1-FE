import React from 'react';
import clone from 'clone';
import IntlMessages from '@iso/components/utility/intlMessages';
import {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell,
} from '@iso/components/Tables/HelperCells';

const renderCell = (object, type, key) => {
  const value = object[key];
  switch (type) {
    case 'ImageCell':
      return ImageCell(value);
    case 'DateCell':
      return DateCell(value);
    case 'LinkCell':
      return LinkCell(value);
    default:
      return TextCell(value);
  }
};

const columns = [
  {
    title: <IntlMessages id="antTable.title.image" />,
    key: 'avatar',
    width: '1%',
    className: 'isoImageCell',
    render: object => renderCell(object, 'ImageCell', 'avatar'),
  },
  {
    title: <IntlMessages id="Tên" />,
    key: 'firstName',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'firstName'),
  },
  {
    title: <IntlMessages id="Giá" />,
    key: 'lastName',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'lastName'),
  },
  {
    title: <IntlMessages id="Giá ưu đãi" />,
    key: 'city',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'city'),
  },
  {
    title: <IntlMessages id="Dành cho" />,
    key: 'email',
    width: 200,
    render: object => renderCell(object, 'LinkCell', 'email'),
  },
  {
    title: <IntlMessages id="Thời gian thực hiện" />,
    key: 'street',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'street'),
  },

  {
    title: <IntlMessages id="Danh mục" />,
    key: 'date',
    width: 200,
    render: object => renderCell(object, 'DateCell', 'date'),
  },
];
const smallColumns = [columns[1], columns[2], columns[3], columns[4],columns[5],columns[6]];
const sortColumns = [
  { ...columns[1], sorter: true },
  { ...columns[2], sorter: true },
  { ...columns[3], sorter: true },
  { ...columns[4], sorter: true },
];
const editColumns = [
  { ...columns[1], width: 300 },
  { ...columns[2], width: 300 },
  columns[3],
  columns[4],
];
const groupColumns = [
  columns[0],
  {
    title: 'Name',
    children: [columns[1], columns[2]],
  },
  {
    title: 'Address',
    children: [columns[3], columns[4]],
  },
];
const tableinfos = [
  {
    title: 'Chi nhánh',
    value: 'branch',
    columns: clone(smallColumns),
  },
  
];
export { columns, tableinfos };
