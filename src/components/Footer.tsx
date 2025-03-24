import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="frame">
                <div className="socials">
                    <a href="https://twitch.tv/firejsx" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-twitch"></i>
                    </a>
                    <a href="https://youtube.com/c/FireStroke_" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="https://instagram.com/jonas_7302" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div id="copyright">©2025 FireJSX</div>
        </footer>
    );
}

export default Footer;
