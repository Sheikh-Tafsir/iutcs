import React from 'react';
import '../../styles/Footer.css'
import { Link } from 'react-router-dom';
import {ImLocation} from 'react-icons/im';
import {AiFillPhone, AiFillMail} from 'react-icons/ai';
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
                <img src='https://scontent.fdac134-1.fna.fbcdn.net/v/t1.15752-9/379633144_326787363197731_6137547151598542345_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFL3gjt45ElZNfJxb1WR4_T2O7z2e4X843Y7vPZ7hfzjTjAyvXDV_EV2pqEzkhWtQZTrftOwFsWcc_0Ksc7x6qn&_nc_ohc=NyCvWVKTwUUAX85FWEr&_nc_ht=scontent.fdac134-1.fna&cb_e2o_trans=q&oh=03_AdQ5sHFkTja1YwI1MfAxM16_zkqtUzap9QMfV_67Q6ivTg&oe=6536322B' alt='' />
            </div>
            <div className='footer2'>
                <div className='my-auto footer2contacts'>
                    <div className='flex'><ImLocation className='footerIcons'/><p className='inline-block'>345 National Museum, Melbourne PO 6570</p></div>
                    <div className='flex'><AiFillPhone className='footerIcons'/><p>(123) 456-7890</p></div>
                    <div className='flex'><AiFillMail className='footerIcons'/><p>mail@example.com</p></div>
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