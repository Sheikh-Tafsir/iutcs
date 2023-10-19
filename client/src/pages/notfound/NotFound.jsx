import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../styles/NotFound.css'
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='notFound'>
      <div className='notFoundCover'>
        <img src="https://miro.medium.com/v2/resize:fit:828/0*QOZm9X5er1Y0r5-t"/>
      </div>
      <Button onClick={() => navigate('/')}>Back To Homepage</Button>
    </div>
  )
}

export default NotFound