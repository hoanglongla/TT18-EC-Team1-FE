import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useLocation } from '@iso/lib/hooks/useLocation';
// import Sticky from 'react-stickynode';
// import Row from '@iso/ui/Antd/Grid/Row';
// import Col from '@iso/ui/Antd/Grid/Col';
// import Modal from '@iso/ui/Antd/Modal/Modal';
import Button from "@iso/ui/Antd/Button/Button";

import axios from "axios";
// import Container from '@iso/ui/UI/Container/Container';
// import Loader from '@hotel/components/Loader/Loader';
// import useWindowSize from '@iso/lib/hooks/useWindowSize';
// import Description from '../SinglePage/Description/Description';

// import Location from '../SinglePage/Location/Location';
// import Review from '../SinglePage/Review/Review';
import { SERVICE_ORDER, API_URL } from "../../settings/constant";

// import TopBar from '../SinglePage/TopBar/TopBar';
import SinglePageWrapper, { PostImage } from "./ServiceSinglePage.style";
// import PostImageGallery from '../SinglePage/ImageGallery/ImageGallery';
// import useDataApi from '@iso/lib/hooks/useDataApi';
// import isEmpty from 'lodash/isEmpty';
// import Image from './post-image-1.jpg';
import SinglePageServiceWrapper, {
  FormActionArea,
  DescriptionArea,
  ProcessArea,
  TextArea,
  ImageArea,
  CostArea,
} from "./ServiceSinglePage.style";

// const [service, setService] = useState([]);

// useEffect(() => {}, []);

const ServiceSinglePage = ({ match }) => {
  /*const { href } = useLocation();
  const [isModalShowing, setIsModalShowing] = useState(false);
  // useWindowSize hook
  const { width } = useWindowSize();

  let url = '/data/hotel-single.json';
  if (!match.params.slug) {
    url += match.params.slug;
  }
  const { data, loading } = useDataApi(url);
  if (isEmpty(data) || loading) return <Loader />;*/
  /*const {
    /*reviews,
    rating,
    ratingCount,
    price,
    title,
    gallery,
    location,
    content,
   
    author,
  } = data[0];*/

  const [service, setService] = useState({});

  // const API_URL = "http://econail.localhost/api";
  let test = {};
  useEffect(() => {
    let serviceID = localStorage.getItem("current_service_id");

    axios.get(`${API_URL}/g/service/${serviceID}`).then((res) => {
      if (res.status) {
        test = res.data.data;
        // console.log(res.data.data);

        setService(test);
      }
    });
  }, []);

  return (
    <SinglePageServiceWrapper>
      {/* {console.log(service)} */}
      <PostImage style={{ backgroundImage: `url(${service.picture})` }}>
        {/* <img src={service.picture} alt="error" /> */}

        <Button type="primary" className="image_gallery_button">
          {/* View Photos */}
        </Button>
      </PostImage>
      <h2 className="mx-auto title-service">{service.name}</h2>
      <CostArea>
        <h4>{`${service.price} VNĐ`}</h4>
        {/* <h4>{service.price_discount ? service.price_discount : "1000$"}</h4> */}
      </CostArea>
      <DescriptionArea>{service.description}</DescriptionArea>
      <DescriptionArea>Thời gian: {service.time_estimate}</DescriptionArea>

      <FormActionArea>
        <Link to={SERVICE_ORDER}>
          <button>Đặt lịch ngay</button>
        </Link>
      </FormActionArea>
    </SinglePageServiceWrapper>
  );
};

export default ServiceSinglePage;
