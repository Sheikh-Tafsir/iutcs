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
                        <p className='mb-7 lg:mb-3 2xl:mb-6'>A platform for young computer engineers to exercise their intellectuality. IUTCS was founded in 2008 through the hands of some enthusiastic computer engineers. Since then, it has grown from a handful of members who also participate with us in activities such as workshops, programming classes, seminars, contests, application development classes etc.</p>
                        <p>Donec quis tortor tempus, lacinia sem nec, accumsan diam. Ut condimentum eget risus at ultrices. Integer molestie augue eros, ac dignissim velit placerat ut. Sed vel leo ac eros tincidunt porttitor. Aliquam erat volutpat.</p>
                    </div>
                </div>
                <div className='lg:h-3/5 writings'>
                    <div className='writingsHead'>
                        <h2 className='mb-4 lg:mb-0'>ON VIEW</h2>
                    </div>
                    <div className='lg:flex writingsPara'>
                        <div className='lg:w-1/3 writingsPara2Points'>
                            <p>ACM programming class</p>
                            <p>App Dev class</p>
                            <p>Research seminar</p>
                            <p>Web Dev class</p>
                            <p>Job seminar</p>
                        </div>
                        <div className='lg:w-1/3 writingsPara2Points'>
                            <p>Administration</p>
                            <p>Event Management</p>
                            <p>Operations</p>
                            <p>Logistics and Design</p>
                            <p>Sponsorship</p>
                        </div>
                        <div className='lg:w-1/3 writingsPara2Points'>
                            <p>Programming</p>
                            <p>Hackathon</p>
                            <p>IT Olympiad</p>
                            <p>E sports</p>
                            <p>Workshop </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default History