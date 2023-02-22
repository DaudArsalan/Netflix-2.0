import React from "react";
import HeroBanner from "./HeroBanner/HeroBanner";
import Trending from "./Trending/Trending";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TopRated";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />
      </div>
    </>
  );
};

export default Home;
