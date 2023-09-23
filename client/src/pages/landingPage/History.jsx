import React from 'react'
import '../../styles/History.css'
const History = () => {
  return (
    <>
        <div className="history">
            <div className='lg:w-1/3'>
                <img src='https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/370299391_682867783880359_5440058257807981304_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeGH8i-TNrsj06uOiTMk5FqcesXHS7554jF6xcdLvnniMXppo-hniQ1-QK2zP1hGWwNgQwr9jOdrD2r7sNVtGmca&_nc_ohc=5mbFQgE5ypcAX9CZZ4_&_nc_ht=scontent.fdac5-1.fna&cb_e2o_trans=q&oh=00_AfB0xbVWzVqWp4Eln3VzzoXu29mzVHRs1LNtMJo9YYr17A&oe=650F65EB' alt='' className='h-full'/>
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