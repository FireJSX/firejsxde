import React, { useState } from 'react';


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className="nav-container">
            {/* Linke Navigation für das Home-Icon */}
            <div className="navitems-left">
                <a href="#home">Home</a>
            </div>

            {/* Desktop Navigation (rechts oben) */}
            <div className="navitems">
                <a href="#about">About</a>
                <a href="#design">Design</a>
                <a href="#photography">Photography</a>
                <a href="#development">Development</a>
                <a href="#legalnotice">Legal Notice</a>
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
                <a href="#about">About</a>
                <a href="#design">Design</a>
                <a href="#photography">Photography</a>
                <a href="#development">Development</a>
                <a href="#legalnotice">Legal Notice</a>
            </div>
        </div>
    );
};

export default Navbar;
