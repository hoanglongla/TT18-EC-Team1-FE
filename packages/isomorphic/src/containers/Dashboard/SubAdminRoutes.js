import React, { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import Loader from '@iso/components/utility/loader';

const routes = [
  {
    path: '',
    component: lazy(() => import('@iso/containers/Widgets/Widgets')),
    exact: true,
  },
  {
    path: 'customer_management/:id',
    component: lazy(() => import('@iso/containers/CustomerSinglePage/SingleInvoice')),
  },
  {
    path: 'customer_management',
    component: lazy(() => import('@iso/containers/Tables/CustomerTable/CustomerTable')),
  },
  
  {
    path: 'employee_management/:invoiceId',
    component: lazy(() => import('@iso/containers/EmployeeSinglePage/EmployeeSinglePage')),
  },
  {
    path: 'employee_management',
    component: lazy(() => import('@iso/containers/Tables/EmployeeTable/EmployeeTable1')),
  },
  {
    path: 'delivery_management/confirm/:id',
    component: lazy(() => import('@iso/containers/ConfirmDelivery/ConfirmDelivery')),
  },
  {
    path: 'booking_management/confirm/:invoiceId',
    component: lazy(() => import('@iso/containers/ConfirmBooking/BookingSinglePage')),
  },
  {
    path: 'booking_management/:invoiceId',
    component: lazy(() => import('@iso/containers/BookingSinglePage/BookingSinglePage')),
  },
  {
    path: 'booking_management',
    component: lazy(() => import('@iso/containers/BookingManagement/BookingManagement')),
  },
  {
    path: 'delivery_management/:invoiceId',
    component: lazy(() => import('@iso/containers/DeliverySinglePage/DeliverySinglePage')),
  },
  {
    path: 'delivery_management',
    component: lazy(() => import('@iso/containers/DeliveryManagement/DeliveryManagement')),
  },
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}