import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 0) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar-container ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
        
        {/* LEFT SIDE: The "Home" Button */}
        <div className="nav-home-button">
            <a href="/" className="home-link">Ian Wu</a>
        </div>

        {/* RIGHT SIDE: Navigation Links*/}
        <div className="nav-links">
            <a href="/#about" className="nav-item">About Me</a>
            <a href="/#tech-stack" className="nav-item">Tech Stack</a>
            <Link to="/projects" className="nav-item">Projects</Link>
            <Link to="/experience" className="nav-item">Experience</Link>
            <a href="#contact" className="nav-item">Contact</a>
        </div>

        </nav>
    );
}