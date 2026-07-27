import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './NavBar.css';

export default function NavBar() {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const hideDropdownTimeout = useRef(null);
    const showDropdownTimeout = useRef(null);

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

    useEffect(() => {
        return () => {
            if (hideDropdownTimeout.current) {
                clearTimeout(hideDropdownTimeout.current);
            }
            if (showDropdownTimeout.current) {
                clearTimeout(showDropdownTimeout.current);
            }
        };
    }, []);

    const showDropdown = (name) => {
        if (hideDropdownTimeout.current) {
            clearTimeout(hideDropdownTimeout.current);
        }
        if (showDropdownTimeout.current) {
            clearTimeout(showDropdownTimeout.current);
        }
        showDropdownTimeout.current = window.setTimeout(() => {
            setActiveDropdown(name);
        }, 250);
    };

    const hideDropdown = () => {
        if (showDropdownTimeout.current) {
            clearTimeout(showDropdownTimeout.current);
        }
        if (hideDropdownTimeout.current) {
            clearTimeout(hideDropdownTimeout.current);
        }
        hideDropdownTimeout.current = window.setTimeout(() => {
            setActiveDropdown(null);
        }, 50);
    };

    const aboutItems = [
        { label: 'My Story', link: '/#about-me' },
        { label: 'Tech Stack', link: '/#tech-stack' }
    ];

    const experienceItems = [
        { label: 'Work', link: '/experience/#work' },
        { label: 'Projects', link: '/experience/#projects' }
    ];

    return (
        <nav className={`navbar-container ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
        
            {/* LEFT SIDE: The "Home" Button */}
            <div className="nav-home-button">
                <a href="/" className="home-link">Ian Wu</a>
            </div>

            {/* RIGHT SIDE: Navigation Links*/}
            <div className="nav-links">
                <div
                    className="nav-item-wrapper"
                    onMouseEnter={() => showDropdown('about')}
                    onMouseLeave={hideDropdown}
                >
                    <a href="/" className="nav-item">About Me</a>
                    {activeDropdown === 'about' && (
                        <Dropdown
                            items={aboutItems}
                            onMouseEnter={() => showDropdown('about')}
                            onMouseLeave={hideDropdown}
                        />
                    )}
                </div>

                <div 
                    className="nav-item-wrapper"
                    onMouseEnter={() => showDropdown('experiences')}
                    onMouseLeave={hideDropdown}
                >
                    <Link to='/experience' className="nav-item">Experiences</Link>
                    {activeDropdown === 'experiences' && (
                        <Dropdown
                            items={experienceItems}
                            onMouseEnter={() => showDropdown('experiences')}
                            onMouseLeave={hideDropdown}
                        />
                    )}
                </div>

                <a href="#contact" className="nav-item">Contact</a>
            </div>
        </nav>
    );
}