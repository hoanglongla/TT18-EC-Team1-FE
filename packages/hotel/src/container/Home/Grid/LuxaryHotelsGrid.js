import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import Loader from '@hotel/components/Loader/Loader';
import Container from '@iso/ui/UI/Container/Container';
import Heading from '@iso/ui/Heading/Heading';
import TextLink from '@iso/ui/TextLink/TextLink';
import SectionTitle from '@hotel/components/SectionTitle/SectionTitle';
import ImageCard from '@hotel/components/ImageCard/ImageCard';
import GlideCarousel, { GlideSlide } from '@iso/ui/GlideCarousel/GlideCarousel';
import useDataApi from '@iso/lib/hooks/useDataApi';
import { SERVICE_SINGLE_POST_PAGE } from '../../../settings/constant';
import LocationWrapper, { CarouselSection } from '../Location/Location.style';
const carouselOptions = {
  type: 'carousel',
  perView: 6,
  gap: 30,
  autoplay: 3000,
  hoverpause: true,
  breakpoints: {
    1440: {
      perView: 6,
      gap: 20,
    },
    1200: {
      perView: 5,
      gap: 20,
    },
    991: {
      perView: 4,
    },
    767: {
      perView: 4,
      gap: 15,
    },
    667: {
      perView: 2,
      gap: 20,
    },
    480: {
      perView: 2,
      gap: 15,
    },
  },
};

const LuxaryHotelsGrid = () => {
  const { data } = useDataApi('/data/location.json');

  return (
    <LocationWrapper>
      <Container fluid={true}>
        <SectionTitle
          title={<Heading content="Ưu đãi hiện có" />}
          link={<TextLink link={SERVICE_SINGLE_POST_PAGE} content="Show all" />}
        />

        <CarouselSection>
          {data.length !== 0 ? (
            <GlideCarousel
              carouselSelector="explore_carousel"
              prevButton={<IoIosArrowBack />}
              nextButton={<IoIosArrowForward />}
              options={carouselOptions}
            >
              <>
                {data.map((post, index) => (
                  <GlideSlide key={index}>
                    <ImageCard
                      link="listing"
                      imageSrc={post.locationImage.url}
                      title={post.city}
                      meta={`${post.numberOfPost} Hotels`}
                    />
                  </GlideSlide>
                ))}
              </>
            </GlideCarousel>
          ) : (
            <Loader />
          )}
        </CarouselSection>
      </Container>
    </LocationWrapper>
  );
};

export default LuxaryHotelsGrid;
