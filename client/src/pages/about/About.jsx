import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import History from '../landingPage/History';
import '../../styles/About.css';
import Footer from '../../components/footer/Footer'
import { Button } from 'react-bootstrap';
import { BiSolidQuoteRight } from 'react-icons/bi';

const About = () => {
  return (
    <>
        <div className='about'>
            <Navbar />
            <div className='topBarAbout'>
                <div className='textBar'>
                    <h2  data-aos="fade-down" data-aos-delay="100" data-aos-anchor-placement="center-bottom">ABOUT US</h2>
                    <p  data-aos="fade-down" data-aos-delay="200" data-aos-anchor-placement="center-bottom">IUTCS provides a platform for students to explore and expand their knowledge.</p>
                </div>
                <div className='topBarAboutFooter'>
                    <p>Our History</p>
                </div>
            </div>
            <div className='aboutSection'>
                <div className='my-auto aboutSubSection'  data-aos="zoom-out" data-aos-delay="100" data-aos-anchor-placement="center-bottom">
                    <div className='aboutTextbar'>
                        <h2>IUTCS: Igniting Innovation in Computer Science.</h2>
                        <p>IUTCS, which stands for Islamic University of Technology Computer Science Club, is a vibrant and dynamic student organization dedicated to fostering a passion for computer science and technology among its members. Located at the Islamic University of Technology (IUT), this club serves as a hub for like-minded individuals who share an enthusiasm for all things related to computer science and engineering.</p>
                        <Button>KNOW MORE </Button>
                    </div>
                    <div className='aboutImageBar'>
                        <img src='/event.jpg' alt='' className='h-full w-full'/>
                    </div>
                </div>
            </div>
            <History />
            <div className='aboutLastSection'  data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="center-bottom">
                {/* <BiQuoteRight/> */}
                <BiSolidQuoteRight className='quoteRight'/>
                <p>IUTCS is more than just a club; it's a community of passionate individuals who are dedicated to advancing their skills, promoting technology education, and making a meaningful contribution to the world of computer science and technology.</p>
            </div>
            <Footer />
        </div>
    </>
  )
}

export default About