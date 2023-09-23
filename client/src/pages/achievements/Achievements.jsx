import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
import '../../styles/Achievements.css'
import AchievementsJson from '../../json/Achievements.json'
const Achievements = () => {
    const [selectedAchievement, setSelectedAchievement] = useState(null);
    const focusAchievement = (achievement) =>{
        //setSelectedAchievement(achievement);
        const focusGalleryElement = document.querySelector('.focusGallery');
        if (selectedAchievement === achievement) {
            setSelectedAchievement(null);
            focusGalleryElement.style.visibility = 'hidden';
        } 
        else {
            setSelectedAchievement(achievement);
            focusGalleryElement.style.visibility = 'visible';
        }
        
    };
  return (
    <>
        <Navbar />
        <div className='topBar'>
            <h2>Achievements</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quibusdam doloribus hic doloremque facilis debitis porro</p>
        </div>
        <div className='achievementBox'>
            <h2 className='achievementBoxTitle'>Our Incredible Achievements</h2>
            <div className='gallery'>
                {AchievementsJson.map((achievement) => (
                    <div className='galleryBox' key={achievement.id} onClick={()=> focusAchievement(achievement)}>
                        <img src={achievement.imageSrc} alt='achievement.title' />
                        <div className='galleryText'>
                            <p>{achievement.description}</p>
                            <h2>{achievement.title}</h2>
                        </div> 
                    </div> 
                ))}
            </div>
            <div className='focusGallery' onClick={() => focusAchievement(selectedAchievement)}>
                {selectedAchievement && (
                <div className='focusGalleryBox'>
                    <img src={selectedAchievement.imageSrc} alt={selectedAchievement.title}  className='my-auto'/>
                    <div className='focusGalleryText'>
                        <h2>{selectedAchievement.title}</h2>
                        <h3>{selectedAchievement.description}</h3>
                        <p>{selectedAchievement.position}</p>
                        
                    </div>
                </div>
                )}
            </div>
        </div>

        <Footer />
    </>
  )
}

export default Achievements