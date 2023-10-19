import React from "react";
// import BannerImage from "../Assets/iutcs.png";

import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
     
      <div className="home-banner-container" data-aos="fade-down" data-aos-delay="100" data-aos-anchor-placement="center-bottom">
        <div className="home-bannerImage-container">
         
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Explore the World of computing with us
          </h1>
          <p className="primary-text">
            Embark on a journey to explore the limitless world of computing woth us. Join our community and unlock the potential of technology together.
          </p>
          <button className="secondary-button">
            Read more <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src='../Assets/iutcs.png' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;