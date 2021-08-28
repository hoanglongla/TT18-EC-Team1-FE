import React from "react";
import TextLink from "@iso/ui/TextLink/TextLink";
import Rating from "@iso/ui/Rating/Rating";
import Favourite from "@iso/ui/Favorite/Favorite";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GridCard from "../GridCard/GridCardService";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const PostGrid = ({
  title,
  rating,
  location,
  price,
  priceDiscount,
  gallery,
  slug,
  link,
}) => {
  return (
    <GridCard
      isCarousel={true}
      favorite={
        <Favourite
          onClick={(event) => {
            console.log(event);
          }}
        />
      }
      location={`Dành cho nam`}
      title={<TextLink link={`${link}/${slug}`} content={title} />}
      price={`Giá : ${price} VNĐ`}
      priceDiscount={`Giá ưu đãi : ${price} VNĐ`}
      viewDetailsBtn={
        <TextLink link={`${link}/${slug}`} content="Xem chi tiết" />
      }
    >
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        renderDotsOutside={false}
        responsive={responsive}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
      >
        {gallery.map(({ url, title }, index) => (
          <img
            src={url}
            alt={title}
            key={index}
            draggable={false}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "relative",
            }}
          />
        ))}
      </Carousel>
    </GridCard>
  );
};

export default PostGrid;
