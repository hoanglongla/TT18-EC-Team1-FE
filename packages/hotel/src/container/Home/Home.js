import React, { useContext } from "react";
import { TopHotelsGrid } from "./Grid";
import SearchArea from "./Search/Search";
import LocationGrid from "./Location/Location";
import Combo from "./Combo/Combo";
import { LayoutContext } from "../../context/LayoutProvider";
import { Waypoint } from "react-waypoint";

const Home = () => {
  const [, dispatch] = useContext(LayoutContext);
  return (
    <>
      <SearchArea />
      <Waypoint
        onEnter={() => dispatch({ type: "HIDE_TOP_SEARCHBAR" })}
        onLeave={() => dispatch({ type: "SHOW_TOP_SEARCHBAR" })}
      />
      {/* <Combo /> */}
      <LocationGrid />
      <TopHotelsGrid />
    </>
  );
};

export default Home;
