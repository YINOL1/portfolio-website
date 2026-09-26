import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar({ theme, onToggleTheme }) {
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
            <div className="navbar-inner">
                <div className="nav-home-button">
                    <a href="/" className="home-link">Ian Wu</a>
                </div>

                <div className="nav-links">
                    <a href="/" className="nav-item">About Me</a>
                    <Link to="/experience" className="nav-item">Experiences</Link>
                    <a href="#contact" className="nav-item">Contact</a>
                    <button
                        type="button"
                        className="theme-toggle"
                        onClick={onToggleTheme}
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        {theme === 'light' ? 'Dark' : 'Light'}
                    </button>
                </div>
            </div>
        </nav>
    );
}