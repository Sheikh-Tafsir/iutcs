import React, { useEffect } from 'react';
import '../../styles/Footer.css';
import Particle from './particles';
import ParticleBackground from './ParticleBackground';
 

const Footer = () => {

    return (
      <>

<div id="particles-js">

  <div className="footer-container">
  <ParticleBackground />
    <div className="row top">
      <div className="twelve column">
        <div className="footer-logo"><img src='./IUTCSLogo.png' alt='' /></div>
        <h1>Joseph William Victory</h1>
        <h2> Web Developer</h2>
      </div>
    </div>
    
    <div className="row">
      <div className="one-half column">
        <div className="pens pulled">
          <h1>Pens</h1>
           </div>
      </div>

      <div className="one-half column">
        <div className="posts pulled">
          <h1>Posts</h1>
           </div>
      </div>
    </div>
  </div>

<div className="container ">
  <div className="footer">
  <p>
    </p> 
  
  </div></div>


  </div>
  </>
  )
}

export default Footer