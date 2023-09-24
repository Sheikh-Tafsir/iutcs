import React, {useState} from 'react'
import '../../styles/Adminpanel.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Adminnavbar from './Adminnavbar'

const Adminpanel = () => {
    const [festName, setFestName] = useState("");
    const [eventName, setEventName] = useState("");
  return (
    <div className='adminpanel'>
        <Adminnavbar />
        <div className='userFilterBox'>
            <select className="userFilter h-12 outline-none mr-4" value={festName} onChange={(event) => {setFestName(event.target.value);}}>
                <option value="">Select fest</option>
                <option value="App">ICT Fest</option>
                <option value="Soft">Code Rush</option>
                <option value="ml">Web Off</option>
            </select>
            <select className="userFilter h-12 outline-none " value={eventName} onChange={(event) => {setEventName(event.target.value);}}>
                <option value="">Select event</option>
                <option value="App">Hackathon</option>
                <option value="Soft">CTF</option>
                <option value="ml">PC</option>
                <option value="ml">Datathon</option>
            </select>
        </div>
        <div className='viewUserData'>
            <table className='adminpanelTable'>
                <tr>
                    <th className='teamName'>TEAM</th>
                    <th className='universityName'>UNIVERSITY</th>
                    <th className='userName'>NAME</th>
                    <th className='userId'>STUD ID</th>
                    <th className='userDept'>DEPT</th>
                    <th className='userEmail'>EMAIL</th>
                    <th className='userPhone'>CONTACT</th>
                </tr>
                <tr>
                    <td className='teamName'>phonex5</td>
                    <td className='universityName'>IUT</td>
                    <td className='userName'>Tafsir Rahman</td>
                    <td className='userId'>190041130</td>
                    <td className='userDept'>CSE</td>
                    <td className='userEmail'>190041130tafsir@gmail.com</td>
                    <td className='userPhone'>01817530115</td>
                </tr>
                <tr>
                    <td className='teamName'>phonex5</td>
                    <td className='universityName'>IUT</td>
                    <td className='userName'>Tafsir Rahman</td>
                    <td className='userId'>190041130</td>
                    <td className='userDept'>CSE</td>
                    <td className='userEmail'>190041130tafsir@gmail.com</td>
                    <td className='userPhone'>01817530115</td>
                </tr>
                <tr>
                    <td className='teamName'>phonex5</td>
                    <td className='universityName'>IUT</td>
                    <td className='userName'>Tafsir Rahman</td>
                    <td className='userId'>190041130</td>
                    <td className='userDept'>CSE</td>
                    <td className='userEmail'>190041130tafsir@gmail.com</td>
                    <td className='userPhone'>01817530115</td>
                </tr>
                <tr>
                    <td className='teamName'>phonex5</td>
                    <td className='universityName'>IUT</td>
                    <td className='userName'>Tafsir Rahman</td>
                    <td className='userId'>190041130</td>
                    <td className='userDept'>CSE</td>
                    <td className='userEmail'>190041130tafsir@gmail.com</td>
                    <td className='userPhone'>01817530115</td>
                </tr>
            </table>
        </div>
        <Footer />
    </div>
  )
}

export default Adminpanel