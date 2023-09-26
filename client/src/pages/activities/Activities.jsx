
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
    <>
      <Navbar />
      <div className="activity-home">
        <Home />
        <About />
        <Ctf />
        <Webdevx />
        <Work />
      </div>
      <Footer />
    </>
  );
}

export default Activities;
