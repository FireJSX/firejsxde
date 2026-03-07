import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';
import UnsupportedBrowser from './components/UnsupportedBrowser';
import ScrollToTop from './components/ScrollToTop';

import './assets/styles/main.scss';

function App() {
    const [isInstagramBrowser, setIsInstagramBrowser] = useState(false);

    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();
        if (ua.includes('instagram')) {
            setIsInstagramBrowser(true);
        }
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                {isInstagramBrowser ? (
                    <UnsupportedBrowser />
                ) : (
                    <>
                        <Navbar />
                        <AppRoutes />
                        <Footer />
                    </>
                )}
            </div>
        </Router>
    );
}

export default App;