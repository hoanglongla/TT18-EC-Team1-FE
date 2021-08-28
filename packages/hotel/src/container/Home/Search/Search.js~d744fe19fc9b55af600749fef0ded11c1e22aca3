import React from 'react';
import PropTypes from 'prop-types';
import Heading from '@iso/ui/Heading/Heading';
import Text from '@iso/ui/Text/Text';
import Container from '@iso/ui/UI/Container/Container';
import HomeSearchForm from './HomeSearchForm';
import BannerWrapper, { BannerContent, SearchArea } from './Search.style';

const HomeSearch = ({ searchTitleStyle, searchDescriptionStyle }) => {
  return (
    <BannerWrapper>
      <Container>
        <BannerContent>
          Chào mừng đến với Beauty Hand
        </BannerContent>
        {/* End of banner content */}
        <SearchArea>
          <Heading
            {...searchTitleStyle}
            content="Tìm kiếm nhanh sản phẩm và dịch vụ"
          />
          <Text
            {...searchDescriptionStyle}
            content="Ví dụ:chăm sóc móng, mi, tóc, nhuộm tóc, dưỡng tóc"
          />
          <HomeSearchForm />
        </SearchArea>
        {/* End of search area */}
      </Container>
    </BannerWrapper>
  );
};

HomeSearch.propTypes = {
  searchTitleStyle: PropTypes.object,
  searchDescriptionStyle: PropTypes.object,
};

HomeSearch.defaultProps = {
  searchTitleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '22px', '25px'],
    lineHeight: ['28px', '30px', '30px'],
    mb: '9px',
  },
  searchDescriptionStyle: {
    color: '#2C2C2C',
    fontSize: '15px',
    lineHeight: '24px',
    mb: '30px',
  },
};

export default HomeSearch;
