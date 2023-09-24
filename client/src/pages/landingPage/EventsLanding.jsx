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
                    <img src='/event 1.jpg' alt=''/>
                    <div className='cardTexts'>
                        <h2>EXPLORE RESEARCH FOR FUTURE IN USA</h2>
                        <p>Melbourne, Australia</p>
                        <p>DEC 10, 2022 - MAR 13, 2023</p>
                        <p className='mt-4'>Embarking on a journey to EXPLORE RESEARCH FOR FUTURE IN USA opens doors to a world of opportunities and innovation. </p>
                        <Button>View Event</Button>
                    </div>
                </div>
                <div className='eventCard'>
                    <img src='/event 3.jpg' alt=''/>
                    <div className='cardTexts'>
                        <h2>CAREER AT FAANG IUTIAN ROADMAP</h2>
                        <p>Melbourne, Australia</p>
                        <p>Oct 10, 2023 - Nov 8, 2023</p>
                        <p className='mt-4'>An exciting and ambitious plan for those who aspire to work at one of the world's leading technology companies. </p>
                        <Button>View Event</Button>
                    </div>
                </div>
                
            </div>
        </div>
    
    </>
    
  )
}

export default EventsLanding