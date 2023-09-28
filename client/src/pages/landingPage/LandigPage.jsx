import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Heromain from './Heromain'
import History from './History'
import Gallery from './Gallery'
import EventsLanding from './EventsLanding'
//import Footer from './Footer'
import Footer from '../../components/footer/Footer'
import Locations from './Locations'
import Sponsors from './Sponsors'
import Work from '../activities/Work';


const LandigPage = () => {

  return (
    <>
        <Navbar/>
        <Heromain/>
        <div data-aos="flip-up" data-aos-delay="100">
        <Work/>
        </div>
        <div data-aos="zoom-in">
        <History />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
        <Gallery />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
        <EventsLanding/>
        </div>
        {/* <div className='lg:flex'>
          <Sponsors />
          <Locations/>
        </div> */}
        <Footer />
    </>
  )
}

export default LandigPage;