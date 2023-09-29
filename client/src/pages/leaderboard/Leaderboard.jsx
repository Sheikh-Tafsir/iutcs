/* eslint-disable react/jsx-key */
import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import '../../styles/Leaderboard.css'
import Loading from '../../components/loading/Loading';

const Leaderboard = () => {
  const location = useLocation();
  const { competition } = location.state;

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [teamData, setTeamData] = useState('');

  useEffect(() => {

    const fetchData = async () => {
        try {
            //const apiPath = `http://localhost:3001/team/all/${competition.id}`;
            const apiPath = `${import.meta.env.VITE_BASE_URL}/team/all/${competition.id}`;

            const response = await axios.get(apiPath);
            const sortedTeams = [...response.data.teams].sort((a, b) => b.team_point - a.team_point);
            // Set sorted teamData to state
            setTeamData(sortedTeams);
            setLoading(false);
        } 
        catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    fetchData();
}, []);

if (loading) {
    return(
      <Loading/>
    );
  }


  return (
    <div>
        <Navbar />
        <div className='leaderboardHeadBar'>
          <h2>Leaderboard</h2>
        </div>
        <div className='viewLeaderUserData'>
            {/* <h2>{competition.name}</h2> */}
            <table className='leaderboardTable'>
                <tr>
                    <th className='leaderteamRank'>Rank</th>
                    <th className='leaderteamName'>TEAM</th>
                    <th className='leaderuniversityName'>UNIVERSITY</th>
                    <th className='leaderteamPoints'>POINTS</th>
                </tr>
            {teamData.map((team, index) => ( 
                <tr>
                    <td className='leaderteamRank'>{index+1}</td>
                    <td className='leaderteamName'>{team.team_name}</td>
                    <td className='leaderuniversityName'>{team.university_name}</td>
                    <td className='leaderteamPoints'>{team.team_point}</td>
                </tr>
             ))}
                
            </table>
        </div>
        <Footer/>
    </div>
  )
}

export default Leaderboard