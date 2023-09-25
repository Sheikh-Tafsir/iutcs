import Navbar from "../../../components/navbar/Navbar";
import "../../../styles/IntraCompetition.css"; // Import your CSS file

function IntraCompetition() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <h1>Intra-University Competition Registration</h1>
        {/* Embed the Google Form using an iframe */}
        <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSffnklaqSJqpR3vW16YOjZvHYnvusA_rzPaRpVc-gCj63mF0g/viewform?embedded=true" 
            width="640" 
            height="509" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
        >
            Loading…
        </iframe>
      </div>
    </div>
  );
}

export default IntraCompetition;
