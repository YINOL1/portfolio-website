import './AboutMe.css';
import profileImage from '../assets/profile.jpg';

export default function AboutMe() {
  
    return (
        <section id="about-me" className="about-section">

            <div className="about-content">
                <h2 className="section-title">About Me</h2>
                <div className="about-text">
                    <p>
                    Hi! I'm Ian, a 1B Computer Engineering Student at UWaterloo
                    </p>
                    <p>
                    Paragraph 2 
                    </p>
                </div>
            </div>
                    
            <div className="about-image-container">
                <div className="image-placeholder">
                    <img src={profileImage} alt="Ian" className="profile-image" />
                </div>
            </div>

        </section>
    );
}