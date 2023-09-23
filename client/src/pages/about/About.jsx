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
            <div className='topBar'>
                <div className='textBar'>
                    <h2>HISTORY</h2>
                    <p>We Finally Got A Piece Of The Pie. Fleeing From The Cylon Tyranny The Last Battlestar.</p>
                </div>
                <div className='footerBar'>
                    <p>Museum History</p>
                </div>
            </div>
            <div className='aboutSection'>
                <div className='my-auto aboutSubSection'>
                    <div className='aboutTextbar'>
                        <h2>NATIONAL MUSEUM IS A LARGEST RESEARCH AND MUSEUM. MORE THAN 197 COUNTRIES OBJECTS IN HISTORY</h2>
                        <p>Scelerisque, felis eget Auctor dictum tempus molestie auctor consectetuer sit nisl, tempor, ultrices velit nascetur ullamcorper torquent adipiscing felis interdum. Vel nibh. Eget maecenas gravida urna nascetur sit. Taciti at suspendisse rutrum.</p>
                        <Button>BUY TICKETS </Button>
                    </div>
                    <div className='aboutImageBar'>
                        <img src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80' alt='' className='h-full w-full'/>
                    </div>
                </div>
            </div>
            <History />
            <div className='aboutLastSection'>
                {/* <BiQuoteRight/> */}
                <BiSolidQuoteRight className='quoteRight'/>
                <p>The mate was a mighty sailin man the Skipper brave and sure. Five passengers set sail that day for a three hour tour a three hour tour. Well were movin on up to the east side to a deluxe apartment in the sky.</p>
            </div>
            <Footer />
        </div>
    </>
  )
}

export default About