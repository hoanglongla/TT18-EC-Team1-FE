import React from "react";
import TextLink from "@iso/ui/TextLink/TextLink";
import Rating from "@iso/ui/Rating/Rating";
import Favourite from "@iso/ui/Favorite/Favorite";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GridCard from "../GridCard/GridCard";

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

const handleClick = (id) => {
  localStorage.setItem("current_product_id", id);
};

const PostGrid = ({
  name,
  picture,
  // title,
  price,
  id,
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
      title={<TextLink link={`${link}/${slug}`} content={`${name}`} />}
      price={`Giá : ${price} VNĐ`}
      priceDiscount={`Giá ưu đãi(no data): ${price} VNĐ`}
      viewDetailsBtn={
        <TextLink
          onClick={() => handleClick(id)}
          link={`${link}/${id}`}
          content="View Details"
        />
      }
    >
      <img
        className="container"
        // src={"https://source.unsplash.com/random"}
        src={picture}
        alt={"hello"}
        draggable={false}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          position: "relative",
        }}
      />
      {/* <Carousel
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
      </Carousel> */}
    </GridCard>
  );
};

export default PostGrid;
