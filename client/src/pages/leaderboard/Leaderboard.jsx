import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import '../../styles/Leaderboard.css'

const Leaderboard = () => {
  const [festName, setFestName] = useState("");
  const [eventName, setEventName] = useState("");
  return (
    <div>
        <Navbar />
        <div className='leaderboardHeadBar'>
          <h2>Leaderboard</h2>
        </div>
        
        <div className='leaderFilterBox'>
            <select className="leaderFilter h-12 outline-none mr-4 custom-select" value={festName} onChange={(event) => {setFestName(event.target.value);}}>
                <option value="">Select fest</option>
                <option value="App">ICT Fest</option>
                <option value="Soft">Code Rush</option>
                <option value="ml">Web Off</option>
            </select>
            <select className="leaderFilter h-12 outline-none " value={eventName} onChange={(event) => {setEventName(event.target.value);}}>
                <option value="">Select event</option>
                <option value="App">Hackathon</option>
                <option value="Soft">CTF</option>
                <option value="ml">PC</option>
                <option value="ml">Datathon</option>
            </select>
        </div>
        <div className='viewLeaderUserData'>
            <table className='leaderboardTable'>
                <tr>
                    <th className='leaderteamRank'>Rank</th>
                    <th className='leaderteamName'>TEAM</th>
                    <th className='leaderuniversityName'>UNIVERSITY</th>
                    <th className='leaderteamPoints'>POINTS</th>
                </tr>
                <tr>
                    <td className='leaderteamName'>1</td>
                    <td className='leaderuniversityName'>Phoneix5</td>
                    <td className='leaderuserName'>IUT</td>
                    <td className='leaderteamPoints'>1130</td>
                </tr>
                <tr>
                    <td className='leaderteamName'>2</td>
                    <td className='leaderuniversityName'>DU</td>
                    <td className='leaderuserName'>John Doe</td>
                    <td className='leaderteamPoints'>1090</td>
                </tr>
                <tr>
                    <td className='leaderteamName'>1</td>
                    <td className='leaderuniversityName'>IUT</td>
                    <td className='leaderuserName'>Tafsir Rahman</td>
                    <td className='leaderteamPoints'>1130</td>
                </tr>
                <tr>
                    <td className='leaderteamName'>1</td>
                    <td className='leaderuniversityName'>IUT</td>
                    <td className='leaderuserName'>Tafsir Rahman</td>
                    <td className='leaderteamPoints'>1130</td>
                </tr>
            </table>
        </div>
        <Footer/>
    </div>
  )
}

export default Leaderboard