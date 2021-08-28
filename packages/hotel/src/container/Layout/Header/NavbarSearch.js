import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { withRouter } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import MapAutoComplete from '@hotel/components/Map/MapAutoComplete';
import { NavbarSearchWrapper } from './Header.style';
import { setStateToUrl, getStateFromUrl } from '@iso/lib/helpers/url_handler';
import { MapDataHelper } from '@hotel/components/Map/MapLocationBox';
import { LISTING_POSTS_PAGE } from '../../../settings/constant';

const NavbarSearch = props => {
  const updatevalueFunc = value => {
    const { searchedPlaceAPIData } = value;
    let tempLocation = [];
    const mapData = !isEmpty(searchedPlaceAPIData)
      ? MapDataHelper(searchedPlaceAPIData)
      : [];
    if (!isEmpty(mapData) && mapData.length !== 0) {
      mapData.forEach(singleMapData =>
        tempLocation.push({
          lat: singleMapData ? singleMapData.lat.toFixed(3) : null,
          lng: singleMapData ? singleMapData.lng.toFixed(3) : null,
        })
      );
    }
    const searchLocation = tempLocation ? tempLocation[0] : {};
    if (!isEmpty(searchLocation)) {
      const state = getStateFromUrl(props.location);
      const query = {
        ...state,
        location: searchLocation,
      };
      const search = setStateToUrl(query);
      props.history.push({
        pathname: LISTING_POSTS_PAGE,
        search: search,
      });
    }
  };

  return (
    <NavbarSearchWrapper className="navbar_search">
      <MapAutoComplete updatevalue={value => updatevalueFunc(value)} />
    </NavbarSearchWrapper>
  );
};

export default withRouter(NavbarSearch);
