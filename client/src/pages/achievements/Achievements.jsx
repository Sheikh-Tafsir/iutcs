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
        <div className='topBarAchievements' >
            <h2 data-aos="fade-down" data-aos-delay="100" data-aos-anchor-placement="center-bottom">Achievements</h2>
            <p data-aos="fade-down" data-aos-delay="200" data-aos-anchor-placement="center-bottom">IUTians remain adamant in achieving great success in their career. </p>
        </div>
        <div className='achievementBox'>
            {/* <h2 className='achievementBoxTitle'>Our Incredible Achievements</h2> */}
            <div className='gallery'>
                {AchievementsJson.map((achievement) => (
                    <div className='galleryBox' key={achievement.id} 
                    onClick={()=> focusAchievement(achievement)} 
                    data-aos="fade-up" data-aos-delay={(achievement.id - 1)*200} >
                        <img src={achievement.imageSrc} alt='achievement.title' loading="lazy" />
                        <div className='galleryText'>
                            <p>{achievement.position}</p>
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
                        <h3>{selectedAchievement.position}</h3>
                        <p>{selectedAchievement.description}</p>
                        
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