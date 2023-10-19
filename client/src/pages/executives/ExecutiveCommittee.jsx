import '../../styles/CommitteeIntro.css'
import '../../styles/CommitteeEffects.css'
import '../../styles/CommitteeMediaQuery.css'
import { facultyData} from './json/ExecutiveCommitteeTeachersInfo'
import { studentData} from './json/ExecutiveCommitteeStudentsInfo'
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
                        <div className="committee-images">
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
                        </div>
                    </div>
            </div>
        </>

    )
}