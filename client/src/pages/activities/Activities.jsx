
import '../../styles/Activities.css';
import Home from './Home';
import About from './About';
import Work from './Work';
import Ctf from './Ctf';
import Webdevx from './Webdevx';
import Navbar from '../../components/navbar/Navbar'

function Activities() {
  return (
    <><Navbar /><div className="activity-home">
      <Home />
      <About />
      <Ctf />
      <Webdevx />
      <Work />

    </div></>
  );
}

export default Activities;
