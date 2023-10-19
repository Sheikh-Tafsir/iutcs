import React from 'react'
import '../../styles/Gallery.css'
const Gallery = () => {
  return (
    <>
        <div className="csGallery">
            <h2 className='galTitle'>Gallery</h2>
            <p className='galSubTitle'>The Love Boat soon will be making another run. The Love Boat promises something for everyone.</p>
            <div className='flex flex-wrap justify-evenly lg:justify-between w-full lg:w-3/4 mx-auto'>
                <div className='imageCard' data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="center-center">
                    <img src='/gallery 1.jpg' alt='' />
                    <div className='imageCardText'>
                        <p className='text-orange-400'>Key Skills for Professional Career</p>
                        <p className='text-white'>Career Seminar</p>
                    </div>
                </div>
                <div className='imageCard' data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="center-center">
                    <img src='/gallery 5.jpg' alt='' />
                    <div className='imageCardText'>
                        <p className='text-orange-400'>RIoT Centre Flag Hunt 2022</p>
                        <p className='text-white'>Cybersecurity tournament</p>
                    </div>
                </div>
                <div className='imageCard' data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="center-center">
                    <img src='/gallery 6.jpg' alt='' />
                    <div className='imageCardText'>
                        <p className='text-orange-400'>Prologue 2023</p>
                        <p className='text-white'>Freshers Reception</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallery