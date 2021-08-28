import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import { AuthContext } from "./context/AuthProvider";
import Layout from "./container/Layout/Layout";
import {
  CHECKOUT_PAGE,
  PAYMENT,
  LOGIN_PAGE,
  CART,
  REGISTRATION_PAGE,
  FORGET_PASSWORD_PAGE,
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  SINGLE_POST_PAGE,
  SERVICE_SINGLE_POST_PAGE,
  ADD_HOTEL_PAGE,
  AGENT_PROFILE_PAGE,
  AGENT_ACCOUNT_SETTINGS_PAGE,
  PRIVACY_PAGE,
  PRICING_PLAN_PAGE,
  SERVICE_LISTING_PAGE,
  SERVICE_ORDER,
  USER_ORDERS_PAGE,
  ORDER_DETAIL_PAGE,
} from "./settings/constant";

/**
 *
 * Public Routes
 *
 */
const Loading = () => null;

const routes = [
  {
    path: HOME_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Home" */ "./container/Home/Home"),
      loading: Loading,
      modules: ["Home"],
    }),
    exact: true,
  },
  {
    path: LOGIN_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "SignIn" */ "./container/SignIn/SignIn"),
      loading: Loading,
      modules: ["SignIn"],
    }),
  },
  {
    path: REGISTRATION_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "SignUp" */ "./container/SignUp/SignUp"),
      loading: Loading,
      modules: ["SignUp"],
    }),
  },
  {
    path: USER_ORDERS_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "SignUp" */ "./container/UserOrders/UserOrders"
        ),
      loading: Loading,
      modules: ["UserOrder"],
    }),
  },
  {
    path: ORDER_DETAIL_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "SignUp" */ "./container/OrderDetail/OrderDetail"
        ),
      loading: Loading,
      modules: ["OrderDetail"],
    }),
  },
  {
    path: FORGET_PASSWORD_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "ForgetPassWord" */ "./container/ForgetPassWord/ForgetPassWord"
        ),
      loading: Loading,
      modules: ["ForgetPassWord"],
    }),
  },
  {
    path: `${SINGLE_POST_PAGE}/:slug`,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "SinglePageView" */ "./container/SinglePage/SinglePageView"
        ),
      loading: Loading,
      modules: ["SinglePageView"],
    }),
  },
  {
    path: `${SERVICE_SINGLE_POST_PAGE}`,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "SinglePageView" */ "./container/ServiceSinglePage/ServiceSinglePage"
        ),
      loading: Loading,
      modules: ["ServiceSinglePageView"],
    }),
  },
  {
    path: `${SERVICE_ORDER}`,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "SinglePageView" */ "./container/ServiceOrder/ServiceOrder"
        ),
      loading: Loading,
      modules: ["ServiceOrder"],
    }),
  },
  // {
  //   path: `${PAYMENT}`,
  //   component: Loadable({
  //     loader: () =>
  //       import(
  //         /* webpackChunkName: "SinglePageView" */ './container/ServiceOrder/ServiceOrder'
  //       ),
  //     loading: Loading,
  //     modules: ['Payment'],
  //   }),
  // },
  {
    path: LISTING_POSTS_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Listing" */ "./container/Listing/Listing"),
      loading: Loading,
      modules: ["Listing"],
    }),
  },
  {
    path: SERVICE_LISTING_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Listing" */ "./container/Service/Service"),
      loading: Loading,
      modules: ["ServiceListing"],
    }),
  },
  {
    path: AGENT_PROFILE_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "AgentDetailsViewPage" */ "./container/Agent/AccountDetails/AgentDetailsViewPage"
        ),
      loading: Loading,
      modules: ["AgentDetailsViewPage"],
    }),
  },
  {
    path: PRIVACY_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "privacy" */ "./container/Privacy/Privacy"),
      loading: Loading,
      modules: ["Privacy"],
    }),
  },
  {
    path: CART,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "privacy" */ "./container/Cart/Cart"),
      loading: Loading,
      modules: ["Cart"],
    }),
  },
  {
    path: PRICING_PLAN_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Pricing" */ "./container/Pricing/Pricing"),
      loading: Loading,
      modules: ["Pricing"],
    }),
  },
  {
    path: CHECKOUT_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Pricing" */ "./container/Payment/Payment"),
      loading: Loading,
      modules: ["Checkout"],
    }),
  },
];

/**
 *
 * Protected Route Component
 *
 */

const AddHotel = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "RenderListingForm" */ "./container/Listing/RenderListingForm"
    ),
  loading: Loading,
  modules: ["RenderListingForm"],
});

const AgentAccountSettingsPage = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "AgentAccountSettingsPage" */ "./container/Agent/AccountSettings/AgentAccountSettingsPage"
    ),
  loading: Loading,
  modules: ["AgentAccountSettingsPage"],
});

/**
 *
 * Not Found Route Component
 *
 */

const NotFound = Loadable({
  loader: () =>
    import(/* webpackChunkName: "NotFound" */ "./container/404/404"),
  loading: Loading,
  modules: ["NotFound"],
});

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <Route
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to={LOGIN_PAGE} />
      }
      {...rest}
    />
  );
};

/**
 *
 * Overall Router Component
 *
 */

const Routes = () => {
  return (
    <Layout>
      <Switch>
        {routes.map(({ path, component, exact = false }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
        <ProtectedRoute path={ADD_HOTEL_PAGE} component={AddHotel} />
        <ProtectedRoute
          path={AGENT_ACCOUNT_SETTINGS_PAGE}
          component={AgentAccountSettingsPage}
        />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default Routes;
