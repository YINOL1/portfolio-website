import ContactForm from './ContactForm';
import './Footer.css';
import githubBlack from '../assets/github-black-icon.png';
import githubWhite from '../assets/github-white-icon.png';
import linkedinBlack from '../assets/linkedin-black-icon.png';
import linkedinWhite from '../assets/linkedin-white-icon.png';
import mailBlack from '../assets/mail-black-icon.png';
import mailWhite from '../assets/mail-white-icon.png';

export default function Footer({ theme = 'light' }) {
  const isDark = theme === 'dark';

  const links = [
    {
      label: 'Email',
      href: 'mailto:ianwu70109@gmail.com',
      icon: isDark ? mailWhite : mailBlack,
      alt: 'Email icon'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/iyjwu',
      icon: isDark ? linkedinWhite : linkedinBlack,
      alt: 'LinkedIn icon'
    },
    {
      label: 'GitHub',
      href: 'https://github.com/yinol1',
      icon: isDark ? githubWhite : githubBlack,
      alt: 'GitHub icon'
    }
  ];

  return (
    <footer className={`site-footer ${isDark ? 'theme-dark' : 'theme-light'}`} data-theme={theme}>
      <div className="footer-content">
        <ContactForm />
      </div>

      <div className="footer-bottom">
        <div className="footer-links" aria-label="Social links">
          {links.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} className="social-link">
              <img src={link.icon} alt={link.alt} className="social-icon" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
        <p>© 2026 Ian Wu</p>
      </div>
    </footer>
  );
}
