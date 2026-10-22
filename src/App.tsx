import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';
import ScrollToTop from './components/ScrollToTop';

import './assets/styles/main.scss';

function App() {
    return (
        <Router>
            <ScrollToTop />

            <div className="App">
                <Navbar />
                <AppRoutes />
                <Footer />
            </div>
        </Router>
    );
}

export default App;