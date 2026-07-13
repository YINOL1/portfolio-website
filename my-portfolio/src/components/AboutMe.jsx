import './AboutMe.css';

export default function AboutMe() {
  
    return (
        <section id="about" className="about-section">

            <div className="about-content">
                <h2 className="section-title">About Me</h2>
                <div className="about-text">
                    <p>
                    Hello! I'm Ian
                    </p>
                    <p>
                    Paragraph 2 
                    </p>
                </div>
            </div>
                    
            <div className="about-image-container">
                <div className="image-placeholder">
                    <span>[Profile Photo]</span>
                </div>
            </div>

        </section>
    );
}