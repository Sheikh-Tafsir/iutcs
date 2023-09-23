import React from 'react'
import '../../styles/Gallery.css'
const Gallery = () => {
  return (
    <>
        <div className="csGallery">
            <h2 className='galTitle'>Gallery</h2>
            <p className='galSubTitle'>The Love Boat soon will be making another run. The Love Boat promises something for everyone.</p>
            <div className='flex flex-wrap justify-evenly lg:justify-between w-full lg:w-3/4 mx-auto'>
                <div className='imageCard'>
                    <img src='https://premiumlayers.com/wpthemes/museum/wp-content/uploads/2015/09/img-5.jpg' alt='' />
                    <div className='imageCardText'>
                        <p className='text-orange-400'>Kings CROWN</p>
                        <p className='text-white'>ORIGIN: DUBAI, UAE</p>
                    </div>
                </div>
                <div className='imageCard'>
                    <img src='https://premiumlayers.com/wpthemes/museum/wp-content/uploads/2015/09/img-7.jpg' alt='' />
                    <div className='imageCardText'>
                        <p className='text-orange-400'>MODERN ARTS COLLECTION</p>
                        <p className='text-white'>ORIGIN: DUBAI, UAE</p>
                    </div>
                </div>
                <div className='imageCard'>
                    <img src='https://premiumlayers.com/wpthemes/museum/wp-content/uploads/2015/09/img-5.jpg' alt='' />
                    <div className='imageCardText'>
                        <p className='text-orange-400'>FRANCE KINGS SWORD</p>
                        <p className='text-white'>ORIGIN: DUBAI, UAE</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallery