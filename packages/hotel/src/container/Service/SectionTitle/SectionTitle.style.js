import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 30px 0;
  .title {
    display: inline;
    h2 {
      display: inline;
      color: ${themeGet('text.0', '#2C2C2C')};
      font-size: 25px;
      line-height: 30px;
      font-weight: 700;
      font-family: 'Lato', sans-serif;
      @media only screen and (max-width: 480px) {
        font-size: 17px;
        line-height: 21px;
      }
    }
    .a {
      height: 30px;
      width: 10px;
      margin-right: 5px;
      background-color: yellow;
      float: left;
    }
  }
`;
export default SectionTitleWrapper;
