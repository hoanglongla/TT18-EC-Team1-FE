const options = [
  {
    key:'customer_management',
    label:'Khách hàng',
    leftIcon: 'ion-clipboard',

  },
  {
    key:'branch',
    label:'Chi nhánh',
    leftIcon: 'ion-home',

  },
  {
    key: 'table',
    label: 'Quản lý',
    leftIcon: 'ion-android-menu',
    children: [
      {
        key: 'table_ant',
        label: 'Quản lý dịch vụ',
      },
      {
        key: 'product_management',
        label: 'Quản lý sản phẩm',
      },
    ],
  },

  

];
export default options;
