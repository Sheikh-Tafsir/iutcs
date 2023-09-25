import React from 'react'
import Logo from "/public/Assets/Logo.png";
import "../../styles/Loading.css"

const Loading = () => {
  return (
    <div className="loader-container">
        <div className="loader" />
        <div><img src={Logo} alt="logo" className="w-50 w-1/1 h-2/3 mt-3"/></div>
    </div>
  )
}

export default Loading