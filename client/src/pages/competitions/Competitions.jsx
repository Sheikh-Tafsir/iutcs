import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import '../../styles/Competitions.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/loading/Loading';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Competitions = () => {
    const location = useLocation();
    const { item } = location.state;

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [competitionData, setCompetitionData] = useState(null);    

    const originalDate = new Date();
    const year = originalDate.getFullYear();
    const month = String(originalDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(originalDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    useEffect(() => {
        //console.log(item.id);
        //alert(today);
        const fetchData = async () => {
            try {
                //const apiPath = `http://localhost:3001/competition/all/${item.id}`;
                const apiPath = `${import.meta.env.VITE_BASE_URL}/competition/all/${item.id}`;

                const response = await axios.get(apiPath);
                // console.log(response.data.competitions);
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

    const handleClickNavigation = (competition) => {
      navigate(`/interCompetition/${competition.id}`, { state: { competition } })
      // if(item.event_type === "inter"){
      //   navigate(`/interCompetition/${competition.id}`, { state: { competition } })
      // }
      // else{
      //   navigate(`/intraCompetition/${competition.id}`, { state: { competition } })
      // }
    
    }

    if (loading) {
        return(
          <Loading />
        );
      }

  return (
    <>
        <Navbar />
        <div>
            <h2 className='competitions-headerTitle'>All Competitions</h2>
            <div className='competition-box'>
                {competitionData.map((competition) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className='competitions' >
                        <h2>{competition.name}</h2>
                        <p>Competition date: {competition.start_date.substring(0, 10)} - {competition.end_date.substring(0, 10)}</p>
                        <p>Registration date: {competition.registration_start_date.substring(0, 10)} - {competition.registration_end_date.substring(0, 10)}</p>
                        <p>fees: {competition.fees}TK</p>
                        <p>Member Limit: {competition.no_of_team_member_min} - {competition.no_of_team_member_max}</p>
                        <p>{formattedDate}</p>
                        {/* {formattedDate < competition.start_date.substring(0, 10) ? (
                          <Button onClick={() => handleClickNavigation(competition)}>Register now</Button>
                        ) : (
                          <Button onClick={() => navigate('/leaderboard')}>Leaderboard</Button>
                        )} */}
                        <Button onClick={() => handleClickNavigation(competition)} className='pr-12'>Register now</Button>
                        <Button onClick={() => navigate('/leaderboard', { state: { competition } })}>Leaderboard</Button>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Competitions



// import { useState } from 'react';
// import Navbar from '../../components/navbar/Navbar';
// import { Modal, Button, Card } from 'antd'; // Import Ant Design Modal, Button, and Card
// import { useNavigate  } from 'react-router-dom'; // Import useHistory from React Router
// import '../../styles/Competitions.css';
import Leaderboard from './../leaderboard/Leaderboard';

// const competitionData = [
//   {
//     id: 1, // Competition ID
//     type: 'inter', // Competition type (inter or intra)
//     name: 'Inter-University Competition 1',
//     events: [
//       { id: 11, name: 'Event 1', date: 'October 12, 2023' },
//       { id: 12, name: 'Event 2', date: 'October 15, 2023' },
//       { id: 13, name: 'Event 3', date: 'October 20, 2023' },
//     ],
//     happeningTime: 'October 10, 2023',
//     lastRegistration: 'September 30, 2023',
//   },
//   {
//     id: 2, // Competition ID
//     type: 'intra', // Competition type (inter or intra)
//     name: 'Intra-University Competition 1',
//     events: [
//       { id: 21, name: 'Event A', date: 'October 17, 2023' },
//       { id: 22, name: 'Event B', date: 'October 25, 2023' },
//     ],
//     happeningTime: 'October 15, 2023',
//     lastRegistration: 'October 5, 2023',
//   },
//   // Add more competition data as needed
// ];


// const Competitions = () => {
//   const navigate = useNavigate();
//   const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
//   const [selectedCompetition, setSelectedCompetition] = useState(null); // State for selected competition
//   // const history = useHistory(); // Get the history object from React Router

//   const handleCardClick = (competition) => {
//     setSelectedCompetition(competition);
//     setIsModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedCompetition(null);
//     setIsModalVisible(false);
//   };

//   const handleEventSelect = (event) => {
//     console.log('Event selected:', event);

//     if (selectedCompetition.type === 'inter') {
//       navigate(`/interCompetition/${event.id}`);
//     } else if (selectedCompetition.type === 'intra') {
//       navigate(`/intraCompetition/${event.id}`);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="competition-list">
//         {competitionData.map((competition, index) => (
//           <div
//             key={index}
//             className="competition-card"
//             onClick={() => handleCardClick(competition)} // Add onClick handler
//           >
//             <h2>{competition.name}</h2>
//             <p><strong>Happening Time:</strong> {competition.happeningTime}</p>
//             <p><strong>Last Registration:</strong> {competition.lastRegistration}</p>
//           </div>
//         ))}
//       </div>
//       <Modal
//         title={`Events for ${selectedCompetition?.name}`} // Modal title
//         open={isModalVisible} // Modal visibility
//         onCancel={handleCloseModal} // Function to close the modal
//         footer={null} // Hide the modal footer
//         centered
//       >
//         {/* Render the events as cards in the modal */}
//         {selectedCompetition?.events.map((event, index) => (
//           <Card
//             key={index}
//             title={event.name}
//             extra={<Button onClick={() => handleEventSelect(event)}>Select</Button>}
//             className="event-card" // Apply a custom CSS class for styling
//           >
//             <p><strong>Date:</strong> {event.date}</p>
//             {/* Add more event information here */}
//           </Card>
//         ))}
//       </Modal>
//     </div>
//   );
// };

// export default Competitions;
