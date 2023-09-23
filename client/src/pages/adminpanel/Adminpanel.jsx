import React from 'react'
import '../../styles/Adminpanel.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const Adminpanel = () => {
  return (
    <div className='adminpanel'>
        <Navbar />
        <div className='viewUserData'>
            <table>
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