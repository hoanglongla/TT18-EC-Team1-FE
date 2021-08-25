import React, { useState, Fragment, useEffect } from "react";
import Sticky from "react-stickynode";
import Toolbar from "@iso/ui/UI/Toolbar/Toolbar";

import CategotySearch from "@hotel/components/Search/CategorySearch/CategotySearch";
import { HotelPostGridLoader } from "@iso/ui/ContentLoader/ContentLoader";
import SectionGrid from "@hotel/components/SectionGrid/SectionGrid.cra";
import ListingMap from "./ListingMap";
import FilterDrawer from "@hotel/components/Search/MobileSearchView";
import useWindowSize from "@iso/lib/hooks/useWindowSize";
import useDataApi from "@iso/lib/hooks/useDataApi";
import { SINGLE_POST_PAGE, API_URL } from "../../settings/constant";

import axios from "axios";

import ListingWrapper, { PostsWrapper } from "./Listing.style";

export default function Listing({ location, history }) {
  let url = "/data/hotel.json";
  const [showMap, setShowMap] = useState(false);

  if (location.search) {
    url += location.search;
  }
  const { data, loading, loadMoreData, total, limit } = useDataApi(url);

  const [products, setProducts] = useState([]);
  // const API_URL = "http://econail.localhost/api";
  let test = [];
  useEffect(() => {
    axios.get(`${API_URL}/g/product`).then((res) => {
      if (res.data.status) {
        test = [...res.data.data.data];
        setProducts(test);
      }
    });
  }, []);

  let columnWidth = [1 / 2, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 5, 1 / 6];

  if (showMap) {
    columnWidth = [1 / 2, 1 / 2, 1 / 2, 1 / 2, 1 / 3];
  }

  // useWindowSize hook
  const { width } = useWindowSize();

  // map toggle handler
  //const handleMapToggle = () => {
  // setShowMap(showMap => !showMap);
  //};

  return (
    <ListingWrapper>
      <Sticky top={82} innerZ={999} activeClass="isHeaderSticky">
        <Toolbar
          left={
            width > 991 ? (
              <CategotySearch history={history} location={location} />
            ) : (
              <FilterDrawer history={history} location={location} />
            )
          }
        />
      </Sticky>

      <Fragment>
        <PostsWrapper className={width > 767 && showMap ? "col-12" : "col-24"}>
          <SectionGrid
            link={SINGLE_POST_PAGE}
            columnWidth={columnWidth}
            data={products}
            totalItem={total.length}
            loading={loading}
            limit={limit}
            handleLoadMore={loadMoreData}
            placeholder={<HotelPostGridLoader />}
          />
        </PostsWrapper>

        {showMap && <ListingMap />}
      </Fragment>
    </ListingWrapper>
  );
}
