import React from 'react'
import '../../styles/Sponsors.css'
const Sponsors = () => {
  return (
    <div className='sponsors'>
        <div className='sponsorsSubBar'>
            <h2 className='sponsorsTitle'>Our sponsors</h2>     
            <div className='w-3/4 h-1/3 mx-auto my-auto'>
                <div className="h-full overflow-x-auto whitespace-nowrap slider">
                    <div className="inline-block imgBar">
                        <img src='/banglalink.png' alt='' />
                    </div>
                    <div className="inline-block imgBar h-full">
                        <img src='/BAT.png' alt='' />
                    </div>
                    <div className="inline-block imgBar">
                        <img src='/bs23.jpg' alt='' />
                    </div>
                    <div className="inline-block imgBar">
                        <img src='/robi.png' alt='' />
                    </div>
                    <div className="inline-block imgBar">
                        <img src='/cephalo.jpeg' alt='' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sponsors