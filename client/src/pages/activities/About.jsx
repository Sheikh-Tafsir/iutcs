import React from "react";

import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src='./Assets/designbanner.png' alt="" />
      </div>
      <div className="about-section-image-container">
        <img src='./Assets/acm.png' alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">ACM</p>
        <h1 className="primary-heading">
          Coding Excellence: Your Gateway to Digital Mastery
        </h1>
        <p className="primary-text">
          Dive into the limitless world of coding and unlock your potential
          whether youre a novice or an experienced programmer, our platform is designed to help you evaluate your skils and thrive in the 
          ever-evolving digital landscape
        </p>
       
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;