import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar'
import Heromain from './Heromain'
import History from './History'
import Gallery from './Gallery'
import EventsLanding from './EventsLanding'
import Footer from '../../components/footer/Footer'
import Locations from './Locations'
import Sponsors from './Sponsors'
import Work from '../activities/Work';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LandigPage = () => {

  return (
    <>
        <Navbar/>
        <Heromain/>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="center-bottom">
          <Work/>
        </div>
        <div data-aos="zoom-in" data-aos-delay="100" data-aos-anchor-placement="center-bottom">
          <History />
        </div>
        <div>
          <Gallery />
        </div>
        <div>
          <EventsLanding/>
        </div>
        <div className='lg:flex' data-aos="zoom-in" data-aos-delay="100" data-aos-anchor-placement="center-bottom">
          <Sponsors />
          <Locations/>
        </div>
        <Footer />
    </>
  )
}

export default LandigPage