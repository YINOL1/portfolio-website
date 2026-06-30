import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {

    return (
        <nav className="navbar-container">
        
        {/* LEFT SIDE: The "Home" Button */}
        <div className="nav-home-button">
            <a href="/" className="home-link">Ian Wu</a>
        </div>

        {/* RIGHT SIDE: Navigation Links*/}
        <div className="nav-links">
            <a href="/#about" className="nav-item">About Me</a>
            <a href="/#tech-stack" className="nav-item">Tech Stack</a>
            <a href="/#contact" className="nav-item">Contact</a>
            <Link to="/projects" className="nav-item">Projects</Link>
            <Link to="/experience" className="nav-item">Experience</Link>
        </div>

        </nav>
    );
}