/* eslint-disable react/jsx-key */
import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/footer/Footer'
import '../../styles/Leaderboard.css'
import Loading from '../../components/loading/Loading';
import Adminnavbar from './Adminnavbar';
import { Button } from 'react-bootstrap';

const AdminUserView = () => {
  const location = useLocation();
  const { team } = location.state;

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState('');
  const [updatePoints, setUpdatePoints] = useState('');
  const [updatePointsStatus, setUpdatePointsStatus] = useState('');

  const UpdatePoints = async () => {
    const apipath = `${import.meta.env.VITE_BASE_URL}/team/points/update`;
    //const apipath = `http://localhost:3001/team/points/update`;
    await axios.post(apipath,
    {
      id: team.id,
      updatePoints:updatePoints,
    }
    ).then((response) =>{
        console.log(response.data);
        if(response.data)setUpdatePointsStatus('update successful');
        else setUpdatePointsStatus('update failed');
    }).catch(error => {
      console.log(error);
      setUpdatePointsStatus('update error');
    });
  }

  useEffect(() => {
    //console.log(team.id);
    //alert(today);
    // alert(JSON.stringify(team));
    const fetchData = async () => {
        try {
            //const apiPath = `http://localhost:3001/user/all/${team.id}`;
            const apiPath = `${import.meta.env.VITE_BASE_URL}/user/all/${team.id}`;

            const response = await axios.get(apiPath);
            console.log(response.data.users);
            //setTeamData(response.data.teams)

            // Set sorted teamData to state
            setUserData(response.data.users);
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
        <Adminnavbar/>
        <div className='leaderboardHeadBar'>
          <h2>Leaderboard</h2>
        </div>
        <div className='viewLeaderUserData'>
            {/* <h2>{competition.name}</h2> */}
            <table className='leaderboardTable'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact Info</th>
                    <th>Student Id</th>
                </tr>
            {userData.map((user) => ( 
                <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.contact_info}</td>
                    <td>{user.student_id}</td>
                </tr>
             ))}
                
            </table>
            <div className='updatePointBox'>
              <h2>Update Points</h2>
              <h3>Previous Total Points: {team.team_point}</h3>
              <p>Add points</p>
              <input type="number" placeholder='example: 30'
                value={updatePoints}
                onChange={(event) => {setUpdatePoints(event.target.value);} }
              />
              <p>{updatePointsStatus}</p>
              <Button onClick={()=> UpdatePoints()}>Update</Button>
            </div>
        </div>
        
        <Footer/>
    </div>
  )
}

export default AdminUserView