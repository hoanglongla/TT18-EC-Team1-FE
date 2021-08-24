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
import SinglePageWrapper, { PostImage } from "./SinglePageView.style";
import PostImageGallery from "./ImageGallery/ImageGallery";
import useDataApi from "@iso/lib/hooks/useDataApi";
import isEmpty from "lodash/isEmpty";
import FormActionArea from "./Reservation/Reservation.style";
import Description1 from "./Description1/Description1";
import axios from "axios";

const SinglePage = ({ match }) => {
  const [product, setProduct] = useState([]);

  const apiUrl = "http://econail.localhost/api";
  useEffect(() => {
    let id = localStorage.getItem("current_product_id");
    axios.get(`${apiUrl}/g/product/${id}`).then((res) => {
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
      <PostImage>
        <Button
          type="primary"
          onClick={() => setIsModalShowing(true)}
          className="image_gallery_button"
        >
          View Photos
        </Button>
        <Modal
          visible={isModalShowing}
          onCancel={() => setIsModalShowing(false)}
          footer={null}
          width="100%"
          maskStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
          }}
          wrapClassName="image_gallery_modal"
          closable={false}
        >
          <Fragment>
            <PostImageGallery picture={product.picture} />
            <Button
              onClick={() => setIsModalShowing(false)}
              className="image_gallery_close"
            >
              <svg width="16.004" height="16" viewBox="0 0 16.004 16">
                <path
                  id="_ionicons_svg_ios-close_2_"
                  d="M170.4,168.55l5.716-5.716a1.339,1.339,0,1,0-1.894-1.894l-5.716,5.716-5.716-5.716a1.339,1.339,0,1,0-1.894,1.894l5.716,5.716-5.716,5.716a1.339,1.339,0,0,0,1.894,1.894l5.716-5.716,5.716,5.716a1.339,1.339,0,0,0,1.894-1.894Z"
                  transform="translate(-160.5 -160.55)"
                  fill="#909090"
                />
              </svg>
            </Button>
          </Fragment>
        </Modal>
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
      {/* products description */}
      <Description1 content={product.description} />
      <Review reviews={reviews} ratingCount={ratingCount} rating={rating} />
    </SinglePageWrapper>
  );
};

export default SinglePage;
