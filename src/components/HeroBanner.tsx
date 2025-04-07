import React from 'react';
import '../assets/styles/main.scss';

interface HeroBannerProps {
    title: string;
    imageUrl: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title, imageUrl }) => {
    return (
        <header
            className="hero"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <h1 className="hero-text">{title}</h1>
        </header>
    );
};

export default HeroBanner;
