import React from 'react';
import '../../styles/Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
        <div className='footerBar'>
            <div className='footer1'>
                <div className='my-auto footer1Menu'>
                    <span>
                        <a href="">Home</a>
                    </span>
                    <span>
                        <a href="">History</a>
                    </span>
                    <span>
                        <a href="">Events</a>
                    </span>
                    <span>
                        <a href="">History</a>
                    </span>
                    <span>
                        <a href="">History</a>
                    </span>
                </div>
                <img src='https://premiumlayers.com/wpthemes/museum/wp-content/themes/museumwp/images/common/logo-footer.png' alt='' />
            </div>
            <div className='footer2'>
                <div className='my-auto footer2contacts'>
                    <p>345 National Museum, Melbourne PO 6570</p>
                    <p>(123) 456-7890</p>
                    <p>mail@example.com</p>
                </div>
                <div className='my-auto footer2Menu'>
                    <a href="">FACEBOOK</a>
                    <a href="">ISNTAGRAM</a>
                    <a href="">PINTEREST</a>
                    <a href="">LINKEDIN</a>
                </div>
            </div>
        </div>   
    </>
  )
}

export default Footer