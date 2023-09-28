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
import Work from '../activities/Work'

const LandigPage = () => {
  return (
    <>
        <Navbar/>
        <Heromain/>
        <Work/>
        <History />
        <Gallery />
        <EventsLanding/>
        <div className='lg:flex'>
          <Sponsors />
          <Locations/>
        </div>
        <Footer />
    </>
  )
}

export default LandigPage