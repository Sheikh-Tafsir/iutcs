import React from 'react'
import '../../styles/Gallery.css'
const Gallery = () => {
  return (
    <>
        <div className="csGallery">
            <h2 className='galTitle'>Activities</h2>
            <p className='galSubTitle'>The Love Boat soon will be making another run. The Love Boat promises something for everyone.</p>
            <div className='flex flex-wrap justify-evenly  w-full lg:w-3/4 mx-auto'>
                <div className='imageCard' data-aos="fade-up" data-aos-delay="100" >
                    <img src='/gallery 1.jpg' alt='' />
                    <div className='imageCardText'>
                        <p className='text-orange-400'>Career Seminar</p>
                        <p className='text-white'>Key Skills for Professional Career</p>
                    </div>
                </div>
                <div className='imageCard' data-aos="fade-up" data-aos-delay="200">
                    <img src='/gallery 14.jpg' alt='' />
                    <div className='imageCardText'>
                        <p className='text-orange-400'>Mentor Programs</p>
                        <p className='text-white'>ACM Class</p>
                    </div>
                </div>
                <div className='imageCard' data-aos="fade-up" data-aos-delay="300">
                    <img src='/gallery 5.jpg' alt='' />
                    <div className='imageCardText'>
                        <p className='text-orange-400'>Cybersecurity tournament</p>
                        <p className='text-white'>RIoT Centre Flag Hunt 2022</p>
                    </div>
                </div>
                <div className='imageCard' data-aos="fade-up" data-aos-delay="100">
                    <img src='/gallery 15.jpg' alt='' />
                    <div className='imageCardText'>
                        <p className='text-orange-400'>Mentor Programs</p>
                        <p className='text-white'>Web Dev Class</p>
                    </div>
                </div>
                <div className='imageCard' data-aos="fade-up" data-aos-delay="200">
                    <img src='/gallery 12.jpg' alt='' />
                    <div className='imageCardText'>
                        <p className='text-orange-400'>CS Prologue</p>
                        <p className='text-white'>Prize Giving Ceremony</p>
                    </div>
                </div>
                
                <div className='imageCard' data-aos="fade-up" data-aos-delay="300">
                    <img src='/gallery 13.jpg' alt='' />
                    <div className='imageCardText'>
                        <p className='text-orange-400'>Celebrating OIC Day</p>
                        <p className='text-white'>Gaming Contest</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallery