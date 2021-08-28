import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '@iso/ui/Antd/Menu/Menu';

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  PRIVACY_PAGE,
  
} from '../../../settings/constant';

const FooterMenu = () => {
  return (
    <Menu>
      <Menu.Item key="0">
        <NavLink to={`${HOME_PAGE}`}>Dịch vụ </NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={`${LISTING_POSTS_PAGE}`}>Sản phẩm</NavLink>
      </Menu.Item>
      
      <Menu.Item key="3">
        <NavLink to={`${PRIVACY_PAGE}`}>Về chúng tôi</NavLink>
      </Menu.Item>
      
    </Menu>
  );
};

export default FooterMenu;
