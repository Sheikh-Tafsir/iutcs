import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Modal, Button, Card } from 'antd'; // Import Ant Design Modal, Button, and Card
import { useNavigate  } from 'react-router-dom'; // Import useHistory from React Router
import '../../styles/Competitions.css';
import Footer from '../../components/footer/Footer';


const competitionData = [
  {
    id: 1, // Competition ID
    type: 'inter', // Competition type (inter or intra)
    name: 'Inter-University Competition 1',
    events: [
      { id: 11, name: 'Event 1', date: 'October 12, 2023' },
      { id: 12, name: 'Event 2', date: 'October 15, 2023' },
      { id: 13, name: 'Event 3', date: 'October 20, 2023' },
    ],
    happeningTime: 'October 10, 2023',
    lastRegistration: 'September 30, 2023',
  },
  {
    id: 2, // Competition ID
    type: 'intra', // Competition type (inter or intra)
    name: 'Intra-University Competition 1',
    events: [
      { id: 21, name: 'Event A', date: 'October 17, 2023' },
      { id: 22, name: 'Event B', date: 'October 25, 2023' },
    ],
    happeningTime: 'October 15, 2023',
    lastRegistration: 'October 5, 2023',
  },
  // Add more competition data as needed
];


const Competitions = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
  const [selectedCompetition, setSelectedCompetition] = useState(null); // State for selected competition
  // const history = useHistory(); // Get the history object from React Router

  const handleCardClick = (competition) => {
    setSelectedCompetition(competition);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setSelectedCompetition(null);
    setIsModalVisible(false);
  };

  const handleEventSelect = (event) => {
    console.log('Event selected:', event);

    if (selectedCompetition.type === 'inter') {
      navigate(`/interCompetition/${event.id}`);
    } else if (selectedCompetition.type === 'intra') {
      navigate(`/intraCompetition/${event.id}`);
    }
  };

  return (
    <>
    <div>
      <Navbar />
      <div className="competition-list">
        {competitionData.map((competition, index) => (
          <div
            key={index}
            className="competition-card"
            onClick={() => handleCardClick(competition)} // Add onClick handler
          >
            <h2>{competition.name}</h2>
            <p><strong>Happening Time:</strong> {competition.happeningTime}</p>
            <p><strong>Last Registration:</strong> {competition.lastRegistration}</p>
          </div>
        ))}
      </div>
      <Modal
        title={`Events for ${selectedCompetition?.name}`} // Modal title
        open={isModalVisible} // Modal visibility
        onCancel={handleCloseModal} // Function to close the modal
        footer={null} // Hide the modal footer
        centered
      >
        {/* Render the events as cards in the modal */}
        {selectedCompetition?.events.map((event, index) => (
          <Card
            key={index}
            title={event.name}
            extra={<Button onClick={() => handleEventSelect(event)}>Select</Button>}
            className="event-card" // Apply a custom CSS class for styling
          >
            <p><strong>Date:</strong> {event.date}</p>
            {/* Add more event information here */}
          </Card>
        ))}
      </Modal>
   
    </div>
    <Footer/>
    </>
  );
};

export default Competitions;
