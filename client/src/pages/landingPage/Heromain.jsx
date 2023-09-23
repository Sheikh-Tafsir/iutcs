import React, { useState,useEffect } from 'react'
import '../../styles/Heromain.css'
import { Button } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


const Heromain = () => {
    var imgCount = 0;
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
        document.querySelector(".heromainslides").style.transition = "all 1.5s";
        
        document.querySelectorAll(".heromainSlideButton")[0].style.backgroundColor = 'white';
        document.querySelectorAll(".heromainSlideButton")[1].style.backgroundColor = 'transparent';
        document.querySelectorAll(".heromainSlideButton")[2].style.backgroundColor = 'transparent';
    }
    const imageSlide2 = () => {
        imgCount = 1;
        document.querySelector(".heromainslides").style.marginLeft = "-100%";
        document.querySelector(".heromainslides").style.transition = "all 1.5s";
        
        document.querySelectorAll(".heromainSlideButton")[0].style.backgroundColor = 'transparent';
        document.querySelectorAll(".heromainSlideButton")[1].style.backgroundColor = 'white';
        document.querySelectorAll(".heromainSlideButton")[2].style.backgroundColor = 'transparent';
    }
    const imageSlide3 = () => {
        imgCount = 2;
        document.querySelector(".heromainslides").style.marginLeft = "-200%";
        document.querySelector(".heromainslides").style.transition = "all 1.5s";

        document.querySelectorAll(".heromainSlideButton")[0].style.backgroundColor = 'transparent';
        document.querySelectorAll(".heromainSlideButton")[1].style.backgroundColor ='transparent';
        document.querySelectorAll(".heromainSlideButton")[2].style.backgroundColor = 'white';
    }
  return (
    <div className='heromain'>
        <div className="heromainslider">
            <div className="heromainslides">
                <img src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/370299391_682867783880359_5440058257807981304_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeGH8i-TNrsj06uOiTMk5FqcesXHS7554jF6xcdLvnniMXppo-hniQ1-QK2zP1hGWwNgQwr9jOdrD2r7sNVtGmca&_nc_ohc=5mbFQgE5ypcAX9CZZ4_&_nc_ht=scontent.fdac5-1.fna&cb_e2o_trans=q&oh=00_AfB0xbVWzVqWp4Eln3VzzoXu29mzVHRs1LNtMJo9YYr17A&oe=650F65EB" className="heromainSlideImage"/>
                <img src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/368456235_683939710439833_4649983758464445012_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeFn8AdgVz2wpdW5QnbFih4t6diRvHnP8hPp2JG8ec_yE4NhoFd0c6iw07p-OsCxDbWg1JwJR9XtJed9x2DJZ4xx&_nc_ohc=DywVPbwNedkAX96T5mp&_nc_ht=scontent.fdac5-2.fna&cb_e2o_trans=q&oh=00_AfBC84YB4HnipJPqR9Scr47qnLZHZuKh6zJPYJkUA9pJ-g&oe=65107991" className="heromainSlideImage"/>
                <img src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/308357816_5635805536458017_8984775943962037152_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeEnXjrc5ow-y0Qw3lL_GvYQFC9FBqktarkUL0UGqS1qudzugZObukOSW_ETdmbJIYU0w9tL_3V4io2Jy-v0AVS0&_nc_ohc=WPlKYiHBSCwAX-SWsVw&_nc_ht=scontent.fdac5-1.fna&cb_e2o_trans=q&oh=00_AfBMZYuJK-6j14JaiEvPwGwMI0E6EOTh-C4RBLKFwD8o9A&oe=651068F2" className="heromainSlideImage"/>
            </div>
        </div>
        <div className='heromainSliderTop'>
            <div className='flex justify-between text-white heromainArrowBar'>
                <span className='arrowIcons' onClick={imageSlideLeft}><BsChevronLeft className='my-auto mx-auto text-4xl lg:text-2xl 2xl:text-3xl' /></span>
                <span className='arrowIcons' onClick={imageSlideRight}><BsChevronRight className='my-auto mx-auto text-4xl lg:text-2xl 2xl:text-3xl' /></span>
                
            </div>
            <div className="mx-auto flex justify-between items-center heromainButtonBar">
                <Button>Continue</Button>
                <Button>Explore</Button>
            </div>
            <div className="heromainSlideButtonBar">
                <span className="heromainSlideButton" onClick={imageSlide1}></span>
                <span className="heromainSlideButton" onClick={imageSlide2}></span>
                <span className="heromainSlideButton" onClick={imageSlide3}></span>
            </div>
        </div>
    </div>
  )
}

export default Heromain