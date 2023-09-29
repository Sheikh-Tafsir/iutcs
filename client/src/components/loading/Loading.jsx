import React from 'react'
import Logo from "/public/Assets/Logo.png";
import "../../styles/Loading.css"

const Loading = () => {
  return (
    <div className="loader-container">
        <div className="loader" />
        <div className="w-50 w-1/1 h-2/3 mt-3">
          <img src="https://scontent.fdac134-1.fna.fbcdn.net/v/t1.15752-9/379633144_326787363197731_6137547151598542345_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFL3gjt45ElZNfJxb1WR4_T2O7z2e4X843Y7vPZ7hfzjTjAyvXDV_EV2pqEzkhWtQZTrftOwFsWcc_0Ksc7x6qn&_nc_ohc=NyCvWVKTwUUAX85FWEr&_nc_ht=scontent.fdac134-1.fna&cb_e2o_trans=q&oh=03_AdQ5sHFkTja1YwI1MfAxM16_zkqtUzap9QMfV_67Q6ivTg&oe=6536322B" alt="logo" className="w-50 w-1/1 h-2/3 mt-3"/>
          </div>
    </div>
  )
}

export default Loading