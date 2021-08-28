import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import Button from '@iso/ui/Antd/Button/Button';

import MapAutoComplete from '@hotel/components/Map/MapAutoComplete';
import { NavbarSearchWrapper } from '../../Layout/Header/Header.style';
import { MapDataHelper } from '@hotel/components/Map/MapLocationBox';

//import { FaMapMarkerAlt } from 'react-icons/fa';
import { setStateToUrl } from '@iso/lib/helpers/url_handler';
import { LISTING_POSTS_PAGE } from '../../../settings/constant';
import {
  FormWrapper,
  
} from './Search.style';



const HomeSearch = ({ history }) => {
  const [searchDate] = useState({
    setStartDate: null,
    setEndDate: null,
  });
  const [mapValue, setMapValue] = useState([]);

  // Room guest state
  const [roomGuest] = useState({
    room: 0,
    guest: 0,
  });

  const updatevalueFunc = event => {
    const { searchedPlaceAPIData } = event;
    if (!isEmpty(searchedPlaceAPIData)) {
      setMapValue(searchedPlaceAPIData);
    }
  };

  // Room Guest data handling
  

  

 

  const goToSearchPage = () => {
    let tempLocation = [];
    const mapData = mapValue ? MapDataHelper(mapValue) : [];
    mapData &&
      mapData.map((singleMapData, i) => {
        return tempLocation.push({
          formattedAddress: singleMapData ? singleMapData.formattedAddress : '',
          lat: singleMapData ? singleMapData.lat.toFixed(3) : null,
          lng: singleMapData ? singleMapData.lng.toFixed(3) : null,
        });
      });
    const location = tempLocation ? tempLocation[0] : {};
    const query = {
      date_range: searchDate,
      room: roomGuest.room,
      guest: roomGuest.guest,
      location,
    };
    const search = setStateToUrl(query);
    history.push({
      pathname: LISTING_POSTS_PAGE,
      search: search,
    });
  };

  return (
    <FormWrapper>
     <NavbarSearchWrapper className="navbar_search">
     
      <MapAutoComplete updatevalue={value => updatevalueFunc(value)} />
      
     </NavbarSearchWrapper>
      
      

      <Button
        type="primary"
        htmlType="submit"
        size="large"
        onClick={goToSearchPage}
      >
        Tìm kiếm
      </Button>
    </FormWrapper>
  );
};

export default withRouter(HomeSearch);
