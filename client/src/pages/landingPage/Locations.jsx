import React from 'react'
import '../../styles/Location.css'
const Locations = () => {
  return (
    <>
        <div className='location'>
            <div className='mapBar'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.348830944555!2d90.37668507543866!3d23.948101978535963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4abf8334fb1%3A0xbb003124c3dedc91!2sIslamic%20University%20of%20Technology!5e0!3m2!1sen!2sbd!4v1695572961319!5m2!1sen!2sbd"
                    // width="100%"
                    // height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    // loading="lazy"
                />
            </div>
        </div>
        </>
  )
}

export default Locations