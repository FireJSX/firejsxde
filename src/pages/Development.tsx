import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/main.scss';
import HeroBanner from "../components/HeroBanner";

const Development: React.FC = () => {
    return (
        <div>
            <Navbar />
            <HeroBanner
                title="Development"
                imageUrl="/images/development/background.png"
            />
            <main className="Development">
                <h1>Still working on it, come back soon.</h1>
            </main>
            <Footer />
        </div>
    );
};

export default Development;