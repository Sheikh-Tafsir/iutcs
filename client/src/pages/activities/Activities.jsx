
import '../../styles/Activities.css';
import Home from './Home';
import About from './About';
import Work from './Work';
import Ctf from './Ctf';
import Webdevx from './Webdevx';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer';

function Activities() {
  return (
    <><Navbar /><div className="activity-home">
      
      <Home />
      <div data-aos='fade-up' data-aos-delay='200'>
      <Work />
      </div>
      <div data-aos='fade-up' data-aos-delay='200'>
      <About />
      </div>
      <div data-aos='fade-up' data-aos-delay='200'>
      <Ctf />
      </div>
      <div data-aos='fade-up' data-aos-delay='200'>
      <Webdevx />
      </div>

      
    </div>
    <Footer /></>
  );
}

export default Activities;
