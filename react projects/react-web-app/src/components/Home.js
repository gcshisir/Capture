import React from "react";
import business from "../img/business.png";
import Common from './Common';

const Home = () => {
  return (
    <Common
      welcome="Welcome"
      main="BusinessDrift"
      message="Grow your business with us"
      img={business}
      btn="Get Started"
    />
  );
};
export default Home;
