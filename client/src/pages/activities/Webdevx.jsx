import React from "react";

import { FiArrowRight } from "react-icons/fi";

const Webdevx = () => {
  return (
    <div className="home-container">
     
      <div className="home-banner-container" data-aos="zoom-out" data-aos-delay="100" data-aos-anchor-placement="center-bottom">
        <div className="home-bannerImage-container">
         
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Website Developmet
          </h1>
          <p className="primary-text">
            Master the art of web development: Stay ahead with the latest trends and techniques!
          </p>
          <button className="secondary-button">
            Learn more <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src='./Assets/webdesign.png' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Webdevx;