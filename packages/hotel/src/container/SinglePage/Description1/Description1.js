import React from 'react';
import PropTypes from 'prop-types';
import Heading from '@iso/ui/Heading/Heading';
import { Element } from 'react-scroll';
import Text from '@iso/ui/Text/Text';
import DescriptionWrapper, {
  HeadingDescription,
} from '../Description1/Description1.style';
const Description1 = props => {
  const { statusHeadingStyle, contentStyle } = props;
  return (
    <Element name="reviews" className="reviews">
      <DescriptionWrapper>
        <HeadingDescription>
          <Heading
            content={`Mô tả chi tiết sản phẩm`}
            {...statusHeadingStyle}
          />
        </HeadingDescription>
        <Text content={props.content} {...contentStyle} />
      </DescriptionWrapper>
    </Element>
  );
};
Description1.propTypes = {
  statusHeadingStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

Description1.defaultProps = {
  statusHeadingStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    mr: '10px',
  },
  contentStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#2C2C2C',
    lineHeight: '1.6',
  },
};
export default Description1;
