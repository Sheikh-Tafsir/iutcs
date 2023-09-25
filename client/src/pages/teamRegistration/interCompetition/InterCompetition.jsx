import { useState } from "react";
import "../../../styles/InterCompetition.css"; // Import your CSS file
import Navbar from '../../../components/navbar/Navbar';


function InterCompetition() {
  const [registrationData, setRegistrationData] = useState({
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

  const handleTeamMemberChange = (e, index) => {
    const { name, value } = e.target;
    const updatedTeamMembers = [...registrationData.teamMembers];
    updatedTeamMembers[index] = {
      ...updatedTeamMembers[index],
      [name]: value,
    };
    setRegistrationData({
      ...registrationData,
      teamMembers: updatedTeamMembers,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server or database.
    console.log("Registration Data:", registrationData);
    alert("Registration Successful!");
  };

  const renderTeamMemberInputs = () => {
    const { numberOfParticipants, teamMembers } = registrationData;
    const inputs = [];
    for (let i = 0; i < numberOfParticipants; i++) {
      const member = teamMembers[i] || { name: "", email: "" };
      inputs.push(
        <div key={i} className="team-member">
          <h2>Team Member {i + 1}</h2>
          <div className="form-group">
            <label htmlFor={`name${i}`}>Name:</label>
            <input
              type="text"
              id={`name${i}`}
              name={`name${i}`}
              value={member.name}
              onChange={(e) => handleTeamMemberChange(e, i)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`email${i}`}>Email:</label>
            <input
              type="email"
              id={`email${i}`}
              name={`email${i}`}
              value={member.email}
              onChange={(e) => handleTeamMemberChange(e, i)}
              required
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
  const minTeamMembers = 1;
  const maxTeamMembers = 5;
  const numOptions = Array.from(
    { length: maxTeamMembers - minTeamMembers + 1 },
    (_, index) => index + minTeamMembers
  );

  return (
    <div>
      <Navbar />
      <div className="App">
        <h1>Inter-University Competition Registration</h1>
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
    </div>
    
  );
}

export default InterCompetition;
