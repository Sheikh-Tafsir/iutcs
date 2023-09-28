import {Routes, Route, BrowserRouter} from "react-router-dom";
import LandigPage from './pages/landingPage/LandigPage'
import About from './pages/about/About'
import Achievements from './pages/achievements/Achievements'
import Blogs from './pages/blogs/Blogs';
import Executives from './pages/executives/Executives';
import Activities from './pages/activities/Activities';
import Competitions from './pages/competitions/Competitions';
import InterCompetition from '../src/components/teamRegistration/interCompetition/InterCompetition';
import IntraCompetition from '../src/components/teamRegistration/intraCompetition/IntraCompetition';
import Adminpanel from './pages/adminpanel/Adminpanel';
import Adminlogin from './pages/adminpanel/Adminlogin';
import Leaderboard from './pages/leaderboard/Leaderboard';
import CommitteeIntroPage from './pages/executives/CommitteeIntroPage'

import Emni from "./components/footer/Emni";

import { BlogsHome } from "./pages/blogs/Blogs";
import BlogDetails from "./pages/blogs/blogDetails"
import { Create } from "./pages/blogs/Create"
import Home from "./pages/activities/Home";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandigPage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/achievements" element={<Achievements/>} />

          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/executives" element={<CommitteeIntroPage/>} />


          <Route path="/activities" element={<Activities/>} />

          {/* <Route path="/activities" element={<Emni/>} /> */}
          <Route path="/competitions" element={<Competitions/>} />
          <Route path="/interCompetition/:event_id" element={<InterCompetition/>} />
          <Route path="/intraCompetition/:event_id" element={<IntraCompetition/>} />
          <Route path="/admin/panel" element={<Adminpanel/>} />
          <Route path="/admin/login" element={<Adminlogin/>} />
          <Route path="/leaderboard" element={<Leaderboard/>} />
          <Route path="/blogs/details/:id" element={<BlogDetails/>} />
          <Route path="/blogs" element={<BlogsHome/>} />
          
          <Route path="/createblog" element={<Create/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
