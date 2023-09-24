import '../../styles/CommitteeIntro.css'
import '../../styles/effects.css'
import '../../styles/MediaQuery.css'
import { facultyData, studentData } from './ExecutiveCommitteeInfo'

import AOS from 'aos';
import 'aos/dist/aos.css';

export const ExecutiveCommittee = () => {
    
    return (
        <body>
            <div className='parallax-container'>

                <div id="faculty-body">
                    <div data-aos="fade-up">
                        <h3 id="faculty">FacultyBody</h3>
                    </div>
                    <div className="committee-images">
                        {facultyData.map((faculty, index) => (
                            <div className='image-container'
                                data-aos="fade-up"
                                data-aos-delay="150" // Adjust the delay value to control the animation timing
                                key={index}
                            >
                                <img className="profile-img" src={faculty.image} alt={`Faculty ${index + 1}`} />
                                <div className="overlay">
                                    <h3>{faculty.name}</h3>
                                    <p>{faculty.division}</p>
                                    <p>{faculty.title}</p>
                                </div>

                            </div>

                        ))}
                    </div>
                </div>

                <div id="student-body">
                    <div data-aos="fade-up">
                        <h3 id="student">StudentBody</h3>
                    </div>


                    <div className="committee-images">

                        {studentData.map((student, index) => (
                            <div className='image-container'
                                data-aos="fade-up"
                                data-aos-delay="150" // Adjust the delay value to control the animation timing
                                key={index}
                            >
                                <img className="profile-img" src={student.image} alt={`Student ${index + 1}`} />
                                <div className="overlay">
                                    <h3>{student.name}</h3>
                                    <p>{student.title}</p>
                                    <p>{student.division}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </body>

    )
}
