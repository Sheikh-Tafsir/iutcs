import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer';
import { ExecutiveCommittee } from './ExecutiveCommittee';

function CommitteeIntroPage() {

  return (

    <>
      <Navbar />
      <div id='committee-div'>
        <div className='committee-bg'><h1 className='committee-h1' data-aos="fade-down" data-aos-delay="100" data-aos-anchor-placement="center-bottom"> Executive Committee</h1></div>
        <div id="internal-link">
          <ul className='listwithoutbullet' data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="center-bottom">
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