import React from 'react'
import '../../styles/EventLanding.css'
import { Button } from 'react-bootstrap'

const EventsLanding = () => {
  return (
    <>
        <div className='eventslanding'>
            <h2 className='title'>SEMINARS</h2>
            <p className='subTitle'>The movie star the professor and Mary Ann here on Gilligans Isle. Just sit right back and youll hear.</p>
            <div className='lg:flex w-full lg:w-5/6 mx-auto justify-between'>
                <div className='eventCard' data-aos="slide-right" data-aos-delay="200" data-aos-anchor-placement="center-bottom" opacity="10">
                    <img src='/event 1.jpg' alt=''/>
                    <div className='cardTexts'>
                        <h2>EXPLORE RESEARCH FOR FUTURE IN USA</h2>
                        <p>Melbourne, Australia</p>
                        <p>DEC 10, 2022 - MAR 13, 2023</p>
                        <p className='mt-4'>Embarking on a journey to EXPLORE RESEARCH FOR FUTURE IN USA opens doors to a world of opportunities. </p>
                        <Button>Know More</Button>
                    </div>
                </div>
                <div className='eventCard' data-aos="slide-left" data-aos-delay="200" data-aos-anchor-placement="center-bottom" opacity="10">
                    <img src='/event 3.jpg' alt=''/>
                    <div className='cardTexts'>
                        <h2>CAREER AT FAANG IUTIAN ROADMAP</h2>
                        <p>Melbourne, Australia</p>
                        <p>Oct 10, 2023 - Nov 8, 2023</p>
                        <p className='mt-4'>An exciting and ambitious plan for those who aspire to work at one of the world's leading technology companies. </p>
                        <Button>Know More</Button>
                    </div>
                </div>
                
            </div>
        </div>
    
    </>
    
  )
}

export default EventsLanding