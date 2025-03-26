import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className="nav-container">
            {/* Linke Navigation für das Home-Icon */}
            <div className="navitems-left">
                <Link to="/"><i className="fas fa-home"></i></Link>
            </div>

            {/* Desktop Navigation (rechts oben) */}
            <div className="navitems">
                <Link to="/about">About</Link> {/* Link-Komponente für About */}
                <Link to="/design">Design</Link> {/* Link-Komponente für Design */}
                <Link to="/photography">Photography</Link> {/* Link-Komponente für Photography */}
                <Link to="/development">Development</Link> {/* Link-Komponente für Development */}
                <Link to="/legalnotice">Legal Notice</Link> {/* Link-Komponente für Legal Notice */}
            </div>

            {/* Hamburger-Menü für mobile Geräte */}
            <div
                className="hamburger-menu"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars"></i> {/* Hier ein beliebiges Hamburger-Symbol */}
            </div>

            {/* Mobile Menü, das angezeigt wird, wenn isOpen true ist */}
            <div id="mobile-menu" className={isOpen ? 'open' : ''}>
                <Link to="/about">About</Link>
                <Link to="/design">Design</Link>
                <Link to="/photography">Photography</Link>
                <Link to="/development">Development</Link>
                <Link to="/legalnotice">Legal Notice</Link>
            </div>
        </div>
    );
};

export default Navbar;
