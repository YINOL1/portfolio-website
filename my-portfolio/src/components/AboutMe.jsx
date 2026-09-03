import './AboutMe.css';
import profileImage from '../assets/profile.jpg';

export default function AboutMe() {
  
    return (
        <section id="about-me" className="about-section">

            <div className="about-content">
                <h2 className="section-title">Ian Yi Jin Wu</h2>
                <div className="about-text">
                    <p>
                    Hi, I'm Ian, currently a 1B Computer Engineering Student at the University of Waterloo.
                    </p>
                    <p>
                    I am interested in software development and want to step foot into the embedded territory.
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