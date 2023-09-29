
import { ExecutiveCommittee } from './ExecutiveCommittee';
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer';

function CommitteeIntroPage() {


  return (

    <>
      <Navbar />
      <div id='committee-div'>
        <div className='committee-bg'><h1 className='committee-h1'> Executive Committee</h1></div>
        <div id="internal-link">
          <ul className='listwithoutbullet'>
            <li className='committee-nav'><a className="goto" href="#faculty">Faculty Body</a></li>
            <li><hr className="separator" /></li>
            <li className='committee-nav'><a className="goto" href="#student">Student Body</a></li>
          </ul>


        </div>

        <ExecutiveCommittee />

      </div>
      <Footer/>
    </>
    
  )
}

export default CommitteeIntroPage