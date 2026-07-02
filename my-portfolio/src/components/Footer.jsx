// 1. Imports
import ContactForm from './ContactForm';
import './Footer.css';

// 2. Component Declaration
export default function Footer() {
  
  // 3. JSX Return
  return (
    // The id="contact" connects this entire section to your NavBar link!
    <footer id="contact" className="site-footer">
      
      <div className="footer-content">
        
        {/* Left Side: Text and Form */}
        <div className="footer-contact-section">
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? Send me a message!</p>
          
          {/* Here is where we drop in our separate component */}
          <ContactForm />
        </div>

        {/* Right Side: Socials and Extra Info */}
        <div className="footer-social-section">
          <h3>Connect</h3>
          <ul className="social-links">
            <li><a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>

    </footer>
  );
}