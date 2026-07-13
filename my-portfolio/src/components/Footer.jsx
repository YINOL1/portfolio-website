import ContactForm from './ContactForm';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <ContactForm />
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="mailto:you@example.com">Email</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p>© 2026 Ian Wu - All rights reserved.</p>
      </div>
    </footer>
  );
}
