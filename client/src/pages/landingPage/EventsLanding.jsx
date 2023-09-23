import React from 'react'
import '../../styles/EventLanding.css'
import { Button } from 'react-bootstrap'

const EventsLanding = () => {
  return (
    <>
        <div className='eventslanding'>
            <h2 className='title'>EVENTS</h2>
            <p className='subTitle'>The movie star the professor and Mary Ann here on Gilligans Isle. Just sit right back and youll hear.</p>
            <div className='lg:flex w-full lg:w-3/4 mx-auto justify-between'>
                <div className='eventCard'>
                    <img src='https://premiumlayers.com/wpthemes/museum/wp-content/uploads/2015/10/event-img-4-289x365.jpg' alt=''/>
                    <div className='cardTexts'>
                        <h2>LETS CELEBRATE 25TH MUSEUM DAYY</h2>
                        <p>Melbourne, Australia</p>
                        <p>Oct 10, 2015 - Nov 8, 2025</p>
                        <p className='mt-4'>I have always wanted to have a neighbor just like you. I’ve always wanted to live in a neighborhood with you. </p>
                        <Button>View Event</Button>
                    </div>
                </div>
                <div className='eventCard'>
                    <img src='https://premiumlayers.com/wpthemes/museum/wp-content/uploads/2015/10/event-img-4-289x365.jpg' alt=''/>
                    <div className='cardTexts'>
                        <h2>LETS CELEBRATE 25TH MUSEUM DAYY</h2>
                        <p>Melbourne, Australia</p>
                        <p>Oct 10, 2015 - Nov 8, 2025</p>
                        <p className='mt-4'>I have always wanted to have a neighbor just like you. I’ve always wanted to live in a neighborhood with you. </p>
                        <Button>View Event</Button>
                    </div>
                </div>
                
            </div>
        </div>
    
    </>
    
  )
}

export default EventsLanding