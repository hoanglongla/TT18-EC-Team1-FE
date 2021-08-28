import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const HeadingDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
  margin-bottom: 30px;

  border-bottom: 1px solid ${themeGet('border.3', '#E6E6E6')};
  @media only screen and (max-width: 736px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  h2 {
  }
`;
const DescriptionWrapper = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: [ '17px', '20px', '25px' ];
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 50px;
  margin-right: 50px;
  padding: 15px 15px 15px 15px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
`;
export default DescriptionWrapper;
