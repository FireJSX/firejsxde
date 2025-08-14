// src/App.tsx

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';
import UnsupportedBrowser from './components/UnsupportedBrowser';

import './assets/styles/main.scss';

function App() {
    const [isInstagramBrowser, setIsInstagramBrowser] = useState(false);

    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();
        const isInstagram = ua.includes('instagram');
        setIsInstagramBrowser(isInstagram);

        if (isInstagram) {
            const url = window.location.href.replace(/^https?:\/\//, '');
            const androidRedirect = `intent://${url}#Intent;scheme=https;package=com.android.chrome;end`;
            const iosRedirect = `googlechrome://${url}`;

            const isAndroid = ua.includes('android');
            const isIOS = /iphone|ipad|ipod/.test(ua);

            // Delay to ensure redirect doesn't interrupt state update
            setTimeout(() => {
                if (isAndroid) {
                    window.location.href = androidRedirect;
                } else if (isIOS) {
                    window.location.href = iosRedirect;
                }
            }, 500);
        }
    }, []);

    return (
        <Router>
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
