import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import '../../styles/AdminCompetitions.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/loading/Loading';
import Adminnavbar from './Adminnavbar';

const AdminCompetitions = () => {
    const location = useLocation();
    const { item } = location.state;

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [competitionData, setCompetitionData] = useState(null);    
    useEffect(() => {
        //console.log(item.id);
        const fetchData = async () => {
            try {
                //const apiPath = `http://localhost:3001/competition/all/${item.id}`;
                const apiPath = `${import.meta.env.VITE_BASE_URL}/competition/all/${item.id}`;

                const response = await axios.get(apiPath);
                console.log(response.data.competitions);
                setCompetitionData(response.data.competitions)
                setLoading(false);
            } catch (error) {
                // Handle any errors that occurred during the request
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return(
          <Loading />
        );
      }

  return (
    <>
        <Adminnavbar />
        <div>
            <div className='admin-competition-topbar'>
                <h2>All Competitions</h2>
            </div>
            <div className='admin-competition-box'>
                <div className='admin-competition-add-box' onClick={() => navigate('/admin/competitions/create', { state: { item } })}>
                    <AiOutlinePlus className='add-icon'/>
                    <h2>Add Competitions</h2>
                </div>

                {competitionData.map((competition) => (
                    <div className='admin-competitions'>
                        <h2>{competition.name}</h2>
                        <p>start date: {competition.start_date.substring(0, 10)}</p>
                        <p>start date: {competition.end_date.substring(0, 10)}</p>
                        <p>fees: {competition.fees}TK</p>
                        <p>Member Limit: {competition.no_of_team_member_min} - {competition.no_of_team_member_max}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default AdminCompetitions