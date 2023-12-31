import React from 'react';
import '../../styles/Footer.css'
import { Link } from 'react-router-dom';
import {ImLocation} from 'react-icons/im';
import {AiFillPhone, AiFillMail,AiFillFacebook, AiFillInstagram,AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <>
        <div className='footerBar'>
            <div className='footer2'>
                <div className='my-auto footer2contacts'>
                <p className='footer-heading'>Contact Us</p>
               
                    <div className='flex'><ImLocation className='footerIcons'/><p className='contact-info'>Boardbazar , Gazipur, Bangladesh</p></div>
                    <div className='flex'><AiFillPhone className='footerIcons'/><p className='contact-info'>(123) 456-7890</p></div>
                    <div className='flex'><AiFillMail className='footerIcons'/><p className='contact-info'>mail@example.com</p></div>
           
                </div>
            </div>
            <div className='footer1'>
                <div className='my-auto footer1Menu'>
                    <p className='footer-heading'>Quick Links</p>
                    <span>
                        <Link to='/'>Home</Link><br></br>
                    </span>
                    <span>
                        <Link to='/about'>About</Link><br></br>
                    </span>
                    <span>
                        <Link to='/blogs'>Blogs</Link><br></br>
                    </span>
                    <span>
                        <Link to='/achievements'>Achievements</Link><br></br>
                    </span>
                    <span>
                        <Link to='/activities'>Activities</Link><br></br>
                    </span>
                </div>
                
            </div>
            <div className='footer3'>
            <img src='/IUTCSLogo.png' alt='IUTCS Logo' />
                <div className='my-auto footer2Menu'>
                    <a href="" className='contact-link'><AiFillFacebook className='contact-icon'/></a>
                    <a href="" className='contact-link'><AiFillInstagram className='contact-icon'/></a>
                    {/* <a href="">PINTEREST</a> */}
                    <a href="" className='contact-link'><AiFillLinkedin className='contact-icon'/></a>
                </div>
            </div>
        </div>   
    </>
  )
}

export default Footer