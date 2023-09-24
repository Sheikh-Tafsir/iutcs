
import { ExecutiveCommittee } from './ExecutiveCommittee';
import React from 'react'
import Navbar from '../../components/navbar/Navbar'

function CommitteeIntroPage() {


  return (

    <><Navbar />
    <div id='committee-div'>
      <div className='committee-bg'><h1 className='committee-h1'> Executive Committee Introduction Page</h1></div>
      <div id="internal-link">
        <ul className='listwithoutbullet'>
          <li className='committee-nav'><a className="goto" href="#faculty">Faculty Body</a></li>
          <li><hr className="separator" /></li>
          <li className='committee-nav'><a className="goto" href="#student">Student Body</a></li>
        </ul>


      </div>

      <ExecutiveCommittee />

    </div></>
    
  )
}

export default CommitteeIntroPage