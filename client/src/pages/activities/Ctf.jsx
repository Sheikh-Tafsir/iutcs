import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Ctf = () => {
  return (
    <div className="about-section-container" data-aos="fade-down" data-aos-delay="100" data-aos-anchor-placement="center-bottom">
      <div className="about-background-image-container">
        
      </div>
      <div className="about-section-image-container">
        <img src='/Assets/cipher.png' alt="" loading="lazy"/>
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">CTF</p>
        <h1 className="primary-heading">
          Challenge Your Wits: CTF Challenges
        </h1>
        <p className="primary-text">
         Get ready to sharpen your cyber security progress with our CTF Challenges. Dive into thrilling scenarios, solve intricate puzzles and hone hacking challenges to truimph as the ultimate digital detective
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

export default Ctf;