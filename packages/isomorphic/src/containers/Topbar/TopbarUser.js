import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import Popover from '@iso/components/uielements/popover';
import IntlMessages from '@iso/components/utility/intlMessages';
import userpic from '@iso/assets/images/user1.png';

import TopbarDropdownWrapper from './TopbarDropdown.styles';



export default function TopbarUser() {
  let history= useHistory()
  const [visible, setVisibility] = React.useState(false);
  
  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = (
    <TopbarDropdownWrapper className="isoUserDropdown">
      <Link className="isoDropdownLink" to={'/dashboard/my-profile'}>
        <IntlMessages id="topbar.myprofile" />
      </Link>
      <a className="isoDropdownLink" href="# ">
        <IntlMessages id="themeSwitcher.settings" />
      </a>
      <a className="isoDropdownLink" href="# ">
        <IntlMessages id="sidebar.feedback" />
      </a>
      <a className="isoDropdownLink" href="# ">
        <IntlMessages id="topbar.help" />
      </a>
      <div className="isoDropdownLink" onClick={() => {localStorage.clear(); //for localStorage
sessionStorage.clear();
history.push('/signin');}}>
        <IntlMessages id="topbar.logout" />
      </div>
    </TopbarDropdownWrapper>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      arrowPointAtCenter={true}
      placement="bottomLeft"
    >
      <div className="isoImgWrapper">
        <img alt="user" src={userpic} />
        <span className="userActivity online" />
      </div>
    </Popover>
  );
}
