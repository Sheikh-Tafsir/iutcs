import React, { useState,useEffect } from 'react'
import '../../styles/Heromain.css'
import { Button } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


const Heromain = () => {
    var imgCount = 0;
    const autoChangeImage = () => {
        imgCount = (imgCount + 1) % 3; // Cycle through the array of image slides
        if (imgCount === 0) {
            imageSlide1();
        } 
        else if (imgCount === 1) {
            imageSlide2();
        } 
        else if (imgCount === 2) {
            imageSlide3();
        }
    };
    const intervalId = setInterval(autoChangeImage, 7000);

    const imageSlideRight = () => {
        imgCount=(imgCount+1)%3;
        if (imgCount === 0) {
            imageSlide1();
        } 
        else if (imgCount === 1) {
            imageSlide2();
        } 
        else if (imgCount === 2) {
            imageSlide3();
        }
    }
    const imageSlideLeft = () => {
        imgCount-=1;
        if(imgCount == -1)imgCount=2;
        if (imgCount === 0) {
            imageSlide1();
        } 
        else if (imgCount === 1) {
            imageSlide2();
        } 
        else if (imgCount === 2) {
            imageSlide3();
        }
    }
    const imageSlide1 = () => {
        imgCount = 0;
        document.querySelector(".heromainslides").style.marginLeft = "0%";
        document.querySelector(".heromainslides").style.transition = "all 1s";
        
        document.querySelectorAll(".heromainSlideButton")[0].style.backgroundColor = 'white';
        document.querySelectorAll(".heromainSlideButton")[1].style.backgroundColor = 'transparent';
        document.querySelectorAll(".heromainSlideButton")[2].style.backgroundColor = 'transparent';
    }
    const imageSlide2 = () => {
        imgCount = 1;
        document.querySelector(".heromainslides").style.marginLeft = "-100%";
        document.querySelector(".heromainslides").style.transition = "all 1s";
        
        document.querySelectorAll(".heromainSlideButton")[0].style.backgroundColor = 'transparent';
        document.querySelectorAll(".heromainSlideButton")[1].style.backgroundColor = 'white';
        document.querySelectorAll(".heromainSlideButton")[2].style.backgroundColor = 'transparent';
    }
    const imageSlide3 = () => {
        imgCount = 2;
        document.querySelector(".heromainslides").style.marginLeft = "-200%";
        document.querySelector(".heromainslides").style.transition = "all 1s";

        document.querySelectorAll(".heromainSlideButton")[0].style.backgroundColor = 'transparent';
        document.querySelectorAll(".heromainSlideButton")[1].style.backgroundColor ='transparent';
        document.querySelectorAll(".heromainSlideButton")[2].style.backgroundColor = 'white';
    }
  return (
    <div className='heromain'>
        <div className="heromainslider">
            <div className="heromainslides">
                <img src="/slider.png" className="heromainSlideImage"/>
                <img src="/slider 3.jpg" className="heromainSlideImage"/>
                <img src="/slider 4.jpg" className="heromainSlideImage"/>
            </div>
        </div>
        <div className='heromainSliderTop'>
            <div className='flex justify-between text-white heromainArrowBar'>
                <span className='arrowIcons' onClick={imageSlideLeft}><BsChevronLeft className='my-auto mx-auto text-4xl lg:text-2xl 2xl:text-3xl' /></span>
                <span className='arrowIcons' onClick={imageSlideRight}><BsChevronRight className='my-auto mx-auto text-4xl lg:text-2xl 2xl:text-3xl' /></span>
                
            </div>
            <div className="mx-auto flex justify-between items-center heromainButtonBar" data-aos="fade-down" data-aos-delay="100" data-aos-anchor-placement="center-bottom">
                <Button>Continue</Button>
                <Button>Explore</Button>
            </div>
            <div className="heromainSlideButtonBar" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="center-bottom">
                <span className="heromainSlideButton" onClick={imageSlide1}></span>
                <span className="heromainSlideButton" onClick={imageSlide2}></span>
                <span className="heromainSlideButton" onClick={imageSlide3}></span>
            </div>
        </div>
    </div>
  )
}

export default Heromain