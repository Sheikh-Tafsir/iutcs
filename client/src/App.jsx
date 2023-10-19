import { useEffect } from 'react';
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import LandigPage from './pages/landingPage/LandigPage'
import About from './pages/about/About'
import Achievements from './pages/achievements/Achievements'
import { BlogsHome } from './pages/blogs/Blogs';
import Activities from './pages/activities/Activities';
import Competitions from './pages/competitions/Competitions';
import InterCompetition from './pages/teamRegistration/interCompetition/InterCompetition';
import IntraCompetition from './pages/teamRegistration/intraCompetition/IntraCompetition';
import Adminlogin from './pages/adminpanel/Adminlogin';
import { Adminblogs } from './pages/adminpanel/Adminblogs';
import Leaderboard from './pages/leaderboard/Leaderboard';
import CommitteeIntroPage from './pages/executives/CommitteeIntroPage'
import BlogDetails from "./pages/blogs/blogDetails"
import AdminEvents from './pages/adminpanel/AdminEvents';
import AdminCompetitions from './pages/adminpanel/AdminCompetitions';
import AdminCompetitionsCreate from './pages/adminpanel/AdminCompetitionsCreate';
import AdminEventsCreate from './pages/adminpanel/AdminEventsCreate';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Events from './pages/competitions/Events';
import AdminTeamView from './pages/adminpanel/AdminTeamView';
import AdminUserView from './pages/adminpanel/AdminUserView';
import NotFound from './pages/notfound/NotFound';
import Contacts from './components/contacts/Contacts';


const App = () => {
  let token = localStorage.getItem('localStorageIutcsAdminUsername');

  const checkToken = () => (token == null || token == "null" || token == "undefined" || token == "" || token == "0");

  useEffect(() => {
    AOS.init({
        once: true, // Set this to true if you want animations to occur only once
    });
}, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandigPage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/achievements" element={<Achievements/>} />
          <Route path="/executives" element={<CommitteeIntroPage/>} />
          <Route path="/activities" element={<Activities/>} />
          <Route path="/events" element={<Events />} />
          <Route path="/competitions/view" element={<Competitions/>} />
          <Route path="/interCompetition/:event_id" element={<InterCompetition/>} />
          <Route path="/intraCompetition/:event_id" element={<IntraCompetition/>} />
          <Route path="/leaderboard" element={<Leaderboard/>} />
          <Route path="/blogs/details" element={<BlogDetails/>} />
          <Route path="/blogs" element={<BlogsHome/>} />
          <Route path='contacts' element={<Contacts/>} />
          <Route path="/admin/login" element={checkToken() ? <Adminlogin/>: <Navigate to="/admin/events/view" />} />
          <Route path="/admin/blogs" element={checkToken() ? <Navigate to="/admin/login" /> : <Adminblogs/>} />
          <Route path="/admin/events/view" element={checkToken() ? <Navigate to="/admin/login" /> : <AdminEvents />} />
          <Route path="/admin/competitions/view" element={checkToken() ? <Navigate to="/admin/login" /> : <AdminCompetitions />} />
          <Route path="/admin/events/create" element={checkToken() ? <Navigate to="/admin/login" /> : <AdminEventsCreate />} />
          <Route path="/admin/competitions/create" element={checkToken() ? <Navigate to="/admin/login" /> : <AdminCompetitionsCreate />} />
          <Route path="/admin/team/view" element={checkToken() ? <Navigate to="/admin/login" /> : <AdminTeamView />} />
          <Route path="/admin/user/view" element={checkToken() ? <Navigate to="/admin/login" /> : <AdminUserView />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
