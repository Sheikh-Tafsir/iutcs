import React from 'react'
import '../../styles/Location.css'
const Locations = () => {
  return (
    <>
        <div className='location'>
            <div className='mapBar'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1823.6940172161292!2d90.4005318070167!3d23.911309797940902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4f7327b77d9%3A0x3a4d627fbb048dcc!2z4Kam4Kak4KeN4Kak4Kaq4Ka-4Kec4Ka-LCDgpp_gppngp43gppfgp4A!5e0!3m2!1sbn!2sbd!4v1639748336310!5m2!1sbn!2sbd"
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