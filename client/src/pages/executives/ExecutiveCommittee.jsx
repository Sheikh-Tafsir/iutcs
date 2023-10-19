import '../../styles/CommitteeIntro.css'
import '../../styles/CommitteeEffects.css'
import '../../styles/CommitteeMediaQuery.css'
import { facultyData } from './json/ExecutiveCommitteeTeachersInfo'
import { studentData } from './json/ExecutiveCommitteeStudentsInfo'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export const ExecutiveCommittee = () => {

    return (
        <>
            <div className='parallax-containe'>
                <div id="faculty-body" data-aos="fade-up">
                    <h3 id="faculty" className='font-semibold'>FacultyBody</h3>
                    <div className="committee-images">
                        {facultyData.map((faculty, index) => (
                            <div className="image-container" key={index}>
                                <img className="profile-img" src={faculty.image} alt={`Faculty ${index + 1}`} loading="lazy" />
                                <div className="overlay">
                                    <h3>{faculty.name}</h3>
                                    <p>{faculty.division}</p>
                                    <p>{faculty.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="student-body" data-aos="fade-up">
                    <h3 id="student" className='font-semibold'>StudentBody</h3>
                    {/* <div className="committee-images">
                            {studentData.map((student, index) => (
                                <div className="image-container" key={index}>
                                    <img className="profile-img" src={student.image} alt={`Student ${index + 1}`} loading="lazy" />
                                    <div className="overlay">
                                        <h3>{student.name}</h3>
                                        <p>{student.title}</p>
                                        <p>{student.division}</p>
                                    
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    <div style={{ marginTop: '5vh' }}>
                        <h3 className='font-semibold student-section-title'>Administration</h3>
                        <div className="committee-images">
                            {studentData.slice(0, 6).map((student, index) => (
                                <div className="image-container" key={index}>
                                    <img className="profile-img" src={student.image} alt={`Student ${index + 1}`} loading="lazy" />
                                    <div className="overlay">
                                        <h3>{student.name}</h3>
                                        <p>{student.title}</p>
                                        <p>{student.division}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="student-section">

                        <h3 className='font-semibold student-section-title'>Event Management Executive</h3>
                        <div className="committee-images">
                            {studentData.slice(7, 16).map((student, index) => (
                                <div className="image-container" key={index}>
                                    <img className="profile-img" src={student.image} alt={`Student ${index + 1}`} loading="lazy" />
                                    <div className="overlay">
                                        <h3>{student.name}</h3>
                                        <p>{student.title}</p>
                                        <p>{student.division}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="student-section">
                        <h3 className='font-semibold student-section-title'>Publication Executive</h3>
                        <div className="committee-images">

                            <div className="image-container">
                                <img className="profile-img" src={studentData[25].image} alt={`Student 25`} loading="lazy" />
                                <div className="overlay">
                                    <h3>{studentData[25].name}</h3>
                                    <p>{studentData[25].title}</p>
                                    <p>{studentData[25].division}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="student-section">
                        <h3 className='font-semibold student-section-title'>Web Development Executive</h3>
                        <div className="committee-images">

                            <div className="image-container">
                                <img className="profile-img" src={studentData[26].image} alt={`Student 26`} loading="lazy" />
                                <div className="overlay">
                                    <h3>{studentData[26].name}</h3>
                                    <p>{studentData[26].title}</p>
                                    <p>{studentData[26].division}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="student-section">
                        <h3 className='font-semibold student-section-title'>Executive Secretary</h3>
                        <div className="committee-images">
                            {studentData.slice(27, 31).map((student, index) => (
                                <div className="image-container" key={index}>
                                    <img className="profile-img" src={student.image} alt={`Student ${index + 1}`} loading="lazy" />
                                    <div className="overlay">
                                        <h3>{student.name}</h3>
                                        <p>{student.title}</p>
                                        <p>{student.division}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="student-section">
                        <h3 className='font-semibold student-section-title'>International Student Executive</h3>
                        <div className="committee-images">

                            <div className="image-container">
                                <img className="profile-img" src={studentData[32].image} alt={`Student 32`} loading="lazy" />
                                <div className="overlay">
                                    <h3>{studentData[32].name}</h3>
                                    <p>{studentData[32].title}</p>
                                    <p>{studentData[32].division}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
        </>

    )
}