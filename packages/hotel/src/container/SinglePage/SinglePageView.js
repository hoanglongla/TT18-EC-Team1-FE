import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "@iso/lib/hooks/useLocation";
import Sticky from "react-stickynode";
import Row from "@iso/ui/Antd/Grid/Row";
import Col from "@iso/ui/Antd/Grid/Col";
import Modal from "@iso/ui/Antd/Modal/Modal";
import Button from "@iso/ui/Antd/Button/Button";
import Container from "@iso/ui/UI/Container/Container";
import Loader from "@hotel/components/Loader/Loader";
import useWindowSize from "@iso/lib/hooks/useWindowSize";
import Infomation from "./Description/Description";
import Amenities from "./Amenities/Amenities";
import Location from "./Location/Location";
import Review from "./Review/Review";
import Reservation from "./Reservation/Reservation";
import BottomReservation from "./Reservation/BottomReservation";
import TopBar from "./TopBar/TopBar";
import SinglePageWrapper, {
  PostImage,
  Information,
} from "./SinglePageView.style";
import PostImageGallery from "./ImageGallery/ImageGallery";
import useDataApi from "@iso/lib/hooks/useDataApi";
import isEmpty from "lodash/isEmpty";
import FormActionArea from "./Reservation/Reservation.style";
import Description1 from "./Description1/Description1";
import axios from "axios";
import { API_URL } from "../../settings/constant";

const SinglePage = ({ match }) => {
  const [product, setProduct] = useState([]);

  // const API_URL = "http://econail.localhost/api";
  useEffect(() => {
    let id = localStorage.getItem("current_product_id");
    axios.get(`${API_URL}/g/product/${id}`).then((res) => {
      if (res.status) {
        setProduct(res.data.data);
      }
    });
  }, []);

  const { href } = useLocation();
  const [isModalShowing, setIsModalShowing] = useState(false);
  // useWindowSize hook
  const { width } = useWindowSize();

  let url = "/data/hotel-single.json";
  if (!match.params.slug) {
    url += match.params.slug;
  }
  const { data, loading } = useDataApi(url);
  if (isEmpty(data) || loading) return <Loader />;
  const {
    reviews,
    rating,
    ratingCount,
    price,
    title,
    gallery,
    location,
    content,
    amenities,
    author,
  } = data[0];

  // console.log(data[0]);

  return (
    <SinglePageWrapper>
      <TopBar
        title={product.name}
        shareURL={href}
        author={author}
        media={gallery}
      />
      <Information>
        <PostImage>
          <img src={product.picture} />
        </PostImage>

        <Container>
          <Row gutter={30} id="reviewSection" style={{ marginTop: 30 }}>
            <Col xl={16}>
              {/* product info */}
              <Infomation
                content={product.description}
                title={product.name}
                location={location}
                rating={rating}
                ratingCount={ratingCount}
                productPrice={product.price}
                discount={product.price_discount}
                amount={product.amount}
              />
            </Col>
            <Col xl={8}>
              {width > 1200 ? (
                <Sticky
                  innerZ={999}
                  activeClass="isSticky"
                  top={202}
                  bottomBoundary="#reviewSection"
                ></Sticky>
              ) : (
                <BottomReservation
                  title={product.name}
                  price={product.price}
                  rating={rating}
                  ratingCount={ratingCount}
                />
              )}
            </Col>
          </Row>
        </Container>
      </Information>
      {/* products description */}
      <Description1 content={product.description} />
      <Review reviews={reviews} ratingCount={ratingCount} rating={rating} />
    </SinglePageWrapper>
  );
};

export default SinglePage;
