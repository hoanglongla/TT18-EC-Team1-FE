import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "@iso/ui/Antd/Menu/Menu";

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  AGENT_PROFILE_PAGE,
  PRICING_PLAN_PAGE,
  SERVICE_LISTING_PAGE,
  USER_ORDERS_PAGE,
} from "../../../settings/constant";

const MainMenu = ({ className }) => {
  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink exact to={`${HOME_PAGE}`}>
          Trang chủ
        </NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={`${LISTING_POSTS_PAGE}`}>Sản phẩm</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={`${SERVICE_LISTING_PAGE}`}>Dịch vụ</NavLink>
      </Menu.Item>
      {/* <Menu.Item key="3">
        <NavLink to={`${ORDER_DETAIL_PAGE}`}>Đơn hàng</NavLink>
      </Menu.Item> */}
    </Menu>
  );
};

export default MainMenu;
