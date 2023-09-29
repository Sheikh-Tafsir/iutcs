import { useEffect, useState } from "react";
import "../../../styles/InterCompetition.css"; // Import your CSS file
import { useLocation } from 'react-router-dom';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer'
import axios from 'axios';

function InterCompetition() {
  const location = useLocation();
  const { competition } = location.state;
  // console.log(competition)
  
  useEffect(() => {
    const initialNumberOfParticipants = competition.no_of_team_member_min;
    setRegistrationData({
      competitionId: competition.id,
      universityName: "",
      teamName: "",
      numberOfParticipants: initialNumberOfParticipants, // Set the initial value here
      teamMembers: [],
    });
  }, [competition]);

  const [registrationData, setRegistrationData] = useState({
    competitionId: competition.id,
    universityName: "",
    teamName: "",
    numberOfParticipants: "",
    teamMembers: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare the data to send in the request
      const teamData = {
        team_name: registrationData.teamName,
        competition_id: registrationData.competitionId,
        team_point: 0, // You can set the initial team points here
        university_name: registrationData.universityName,
        users: registrationData.teamMembers.map((member) => ({
          name: member.name,
          email: member.email,
          contactInfo: member.contactInfo,
          studentId: member.studentId
        })),
      };
      console.log(teamData)
      // Send a POST request to add the team
      // const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/team/add`, teamData);
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/team/add`, teamData);


      // Check the response and handle success or error accordingly
      if (response.status === 201) {
        console.log('Team added successfully:', response.data);
        alert('Registration Successful!');
      } else {
        console.error('Error adding team:', response.data);
        alert('Error adding team. Please try again.');
      }
    } catch (error) {
      console.error('Error adding team:', error);
      alert('Error adding team. Please try again.');
    }
  };

  const handleTeamMemberChange = (e, index) => {
    const { name, value } = e.target;
    const updatedTeamMembers = [...registrationData.teamMembers];

    // Get the current team member
    const member = updatedTeamMembers[index] || { name: "", email: "", studentId: "", contactInfo: "" };

    // Update the member properties
    member[name] = value;

    // Update the array with the modified member
    updatedTeamMembers[index] = member;

    setRegistrationData({
      ...registrationData,
      teamMembers: updatedTeamMembers,
    });
  };

  const renderTeamMemberInputs = () => {
    const { numberOfParticipants, teamMembers } = registrationData;
    const inputs = [];
    for (let i = 0; i < numberOfParticipants; i++) {
      const member = teamMembers[i] || { name: "", email: "", studentId: "", contactInfo: "" };
      inputs.push(
        <div key={i} className="team-member">
          <h2>Team Member {i + 1}</h2>
          <div className="form-group">
            <label htmlFor={`name`}>Name:</label>
            <input
              type="text"
              id={`name`}
              name={`name`}
              value={member.name}
              onChange={(e) => handleTeamMemberChange(e, i)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`email`}>Email:</label>
            <input
              type="email"
              id={`email`}
              name={`email`}
              value={member.email}
              onChange={(e) => handleTeamMemberChange(e, i)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`studentId`}>Student ID:</label>
            <input
              type="text"
              id={`studentId`}
              name={`studentId`}
              value={member.studentId}
              onChange={(e) => handleTeamMemberChange(e, i)}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`contactInfo`}>Contact Info:</label>
            <input
              type="text"
              id={`contactInfo`}
              name={`contactInfo`}
              value={member.contactInfo}
              onChange={(e) => handleTeamMemberChange(e, i)}
            />
          </div>
        </div>
      );
    }
    return inputs;
  };


  const handleNumberOfParticipantsChange = (e) => {
    const { value } = e.target;
    const num = parseInt(value, 10);
    setRegistrationData({
      ...registrationData,
      numberOfParticipants: num,
      teamMembers: registrationData.teamMembers.slice(0, num), // Trim or add team members based on the selected number
    });
  };

  // Define minimum and maximum team members allowed
  const minTeamMembers = competition.no_of_team_member_min;
  const maxTeamMembers = competition.no_of_team_member_max;
  const numOptions = Array.from(
    { length: maxTeamMembers - minTeamMembers + 1 },
    (_, index) => index + minTeamMembers
  );

  function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }


  return (
    <div>
      <Navbar />
      <div className="App">
        <h1>Inter-University Competition Registration</h1>
        <div className="competiton-info" style={{ margin: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '4px' }}>
          <h2><strong>Competition Details</strong></h2>
          <p><strong>Name:</strong> {competition.name}</p>
          <p><strong>Description:</strong> {competition.description}</p>
          <p><strong>Start Date:</strong> {formatDate(competition.start_date)}</p>
          <p><strong>End Date:</strong> {formatDate(competition.end_date)}</p>
          <p><strong>Registration Start Date:</strong> {formatDate(competition.registration_start_date)}</p>
          <p><strong>Registration End Date:</strong> {formatDate(competition.registration_end_date)}</p>
          <p><strong>Minimum Team Members:</strong> {competition.no_of_team_member_min}</p>
          <p><strong>Maximum Team Members:</strong> {competition.no_of_team_member_max}</p>
          <p><strong>Fees:</strong> ${competition.fees}</p>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="universityName">University Name:</label>
            <input
              type="text"
              id="universityName"
              name="universityName"
              value={registrationData.universityName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="teamName">Team Name:</label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={registrationData.teamName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfParticipants">Number of Participants:</label>
            <select
              id="numberOfParticipants"
              name="numberOfParticipants"
              value={registrationData.numberOfParticipants}
              onChange={handleNumberOfParticipantsChange}
            >
              {numOptions.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          {renderTeamMemberInputs()}
          <button type="submit">Register</button>
        </form>
      </div>
      <Footer/>
    </div>
    
  );
}

export default InterCompetition;
