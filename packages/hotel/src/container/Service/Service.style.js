import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import singlePostBgImg from '@hotel/assets/images/single-post-bg.jpg';

const ServiceListingWrapper = styled.div`
  padding: 52px 0;
  @media only screen and (max-width: 480px) {
    padding: 70px 0 15px;
  }
`;
export default ServiceListingWrapper;
