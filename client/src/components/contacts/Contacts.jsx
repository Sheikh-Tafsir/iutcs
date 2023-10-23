import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import {FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn} from "react-icons/fa";
import '../../styles/Contacts.css'
import { Button } from 'react-bootstrap';

const Contacts = () => {
  return (
    <div>
        <Navbar/>
        <div className="text-black contacts" id="contacts">
            <div className="lg:flex  lg:text-xs 2xl:text-sm pt-5 lg:pt-20 pb-10 ">
                <div className="lg:w-1/2" data-aos="fade-right">
                        <div className="w-2/3 ml-12 lg:ml-30 2xl:ml-40 pt-10">
                            <div className="flex text-3xl lg:text-3xl 2xl:text-4xl font-bold "><p>Contact</p><p className="text-red-600 ml-3">Me</p></div>
                            <p className="mt-5 font-bold lg:text-sm 2xl:text-base">If you have any issues</p>
                            <p className="mt-5 lg:text-sm 2xl:text-base">IUTCS encompasses the creation and management of applications, science and technology. </p>
                            <p className="mt-5 lg:text-sm 2xl:text-base"></p>
                            <p className="mt-1 lg:text-sm 2xl:text-base"></p>
                            <p className="mt-1 lg:text-sm 2xl:text-base">Link Share and Subscribe</p>
                            <div className="flex mt-5 w-4/5 lg:w-1/2 2xl:w-2/5 justify-between">
                                <a href="" target="_blank" className="h-9 w-9 2xl:h-11 2xl:w-11 bg-red-600 text-white rounded-md flex justify-centet items-center"><FaFacebookF className="mx-auto lg:h-4 lg:w-4 2xl:h-5 2xl:w-5"/></a>
                                <a href="" target="_blank" className="h-9 w-9 2xl:h-11 2xl:w-11 bg-red-600 text-white rounded-md flex justify-centet items-center"><FaGithub className="mx-auto lg:h-4 lg:w-4 2xl:h-5 2xl:w-5"/></a>
                                <a href="" target="_blank" className="h-9 w-9 2xl:h-11 2xl:w-11 bg-red-600 text-white rounded-md flex justify-centet items-center"><FaInstagram className="mx-auto lg:h-4 lg:w-4 2xl:h-5 2xl:w-5"/></a>
                                <a href="" target="_blank" className="h-9 w-9 2xl:h-11 2xl:w-11 bg-red-600 text-white rounded-md flex justify-centet items-center"><FaLinkedinIn className="mx-auto lg:h-4 lg:w-4 2xl:h-5 2xl:w-5"/></a>
                            </div>
                        </div>
                </div>
                <div className="lg:w-1/2 mt-20 lg:mt-0" >
                    <form className="ml-12 lg:ml-0 w-100 text-black contactForm">
                        <input placeholder="Your Full Name" type="text" id="name" name="name" required data-aos="fade-right" data-aos-delay="100"/><br/>
                        <input placeholder="Your Contact Email" type="email" id="email" name="email" required data-aos="fade-right" data-aos-delay="200"/><br/>
                        <input placeholder="Your Project topic" type="text" id="sub" name="sub" required data-aos="fade-right" data-aos-delay="300"/><br/>
                        <textarea placeholder="Project details" id="message" name="message" required data-aos="fade-right" data-aos-delay="400"/><br/>
                        <Button className="bg-red-600 text-white w-40 h-10 rounded-md cursor-pointer">Send</Button>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contacts