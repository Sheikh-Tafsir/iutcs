import React from 'react'
import '../../styles/History.css'
const History = () => {
  return (
    <>
        <div className="history">
            <div className='lg:w-1/3'>
                <img src='/about.jpg' alt='' className='h-full'/>
            </div>
            <div className='lg:w-2/3 writingsBar'>
                <div className='lg:h-2/5 mb-10 writings'>
                    <div className='writingsHead'>
                        <h2 className='mb-4 lg:mb-0'>OUR HISTORY</h2>
                    </div>
                    <div className='writingsPara'>
                        <p className='mb-7 lg:mb-3 2xl:mb-6'>Scelerisque, felis eget Auctor dictum tempus molestie auctor consectetuer sit nisl, tempor, ultrices velit nascetur ullamcorper torquent adipiscing felis interdum. Vel nibh. Eget maecenas gravida urna nascetur sit. Taciti at suspendisse rutrum.</p>
                        <p>Donec quis tortor tempus, lacinia sem nec, accumsan diam. Ut condimentum eget risus at ultrices. Integer molestie augue eros, ac dignissim velit placerat ut. Sed vel leo ac eros tincidunt porttitor. Aliquam erat volutpat.</p>
                    </div>
                </div>
                <div className='lg:h-3/5 writings'>
                    <div className='writingsHead'>
                        <h2 className='mb-4 lg:mb-0'>ON VIEW</h2>
                    </div>
                    <div className='lg:flex writingsPara'>
                        <div className='lg:w-1/3 writingsPara2Points'>
                            <p>Arts of Global Afriva</p>
                            <p>American Art</p>
                            <p>Arts of Canada Arts</p>
                            <p>Classical Arts</p>
                            <p>GErman arts</p>
                        </div>
                        <div className='lg:w-1/3 writingsPara2Points'>
                            <p>Arts of Global Afriva</p>
                            <p>American Art</p>
                            <p>Arts of Canada Arts</p>
                            <p>Classical Arts</p>
                            <p>GErman arts</p>
                        </div>
                        <div className='lg:w-1/3 writingsPara2Points'>
                            <p>Arts of Global Afriva</p>
                            <p>American Art</p>
                            <p>Arts of Canada Arts</p>
                            <p>Classical Arts</p>
                            <p>GErman arts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default History