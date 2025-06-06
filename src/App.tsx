// src/App.tsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';

import './assets/styles/main.scss';

function App() {
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
