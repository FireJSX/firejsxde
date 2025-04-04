import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/main.scss';

const Development: React.FC = () => {
    return (
        <div>
            <Navbar />
            <main className="Development">
                <h1>Still working on it, come back soon.</h1>
            </main>
            <Footer />
        </div>
    );
};

export default Development;