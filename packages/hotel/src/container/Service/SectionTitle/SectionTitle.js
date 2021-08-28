import React from 'react';
import PropTypes from 'prop-types';

import singlePostBgImg from '@hotel/assets/images/single-post-bg.jpg';
import SectionTitleWrapper from './SectionTitle.style';
export default function ServiceSectionTitle(props) {
  return (
    <SectionTitleWrapper>
      <div className="title">
        <div className="a"></div>
        <h2>{props.title}</h2>
      </div>
    </SectionTitleWrapper>
  );
}
