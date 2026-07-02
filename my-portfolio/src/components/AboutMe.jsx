import './AboutMe.css'; // We'll set this up next!

export default function AboutMe() {
  
    return (
        // The id="about" is the magic connection to your NavBar!
        <section id="about" className="about-section">

            <div className="about-content">
                <h2 className="section-title">About Me</h2>
                <div className="about-text">
                    <p>
                    Hello! I'm Ian
                    {/* Your primary introduction paragraph goes here */}
                    </p>
                    <p>
                    Paragraph 2 
                    {/* A secondary paragraph for personality/hobbies goes here */}
                    </p>
                </div>
            </div>
                    
            {/* Right Side: Image Placeholder */}
            <div className="about-image-container">
                <div className="image-placeholder">
                    {/* We can swap this for an <img /> tag later */}
                    <span>[Your Photo Here]</span>
                </div>
            </div>

        </section>
    );
}