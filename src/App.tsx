// src/App.tsx

import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';

import './assets/styles/main.scss';

function App() {
    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor;

        const isInstagram = /Instagram/.test(userAgent);

        if (isInstagram) {
            window.location.href = window.location.href;
        }
    }, []);

    return (
        <Router>
            <div className="App">
                <Navbar />
                <AppRoutes />
                <Footer />
            </div>
        </Router>
    );
}

export default App;