import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import VideoBackground from './components/VideoBackground';
import NewsFeed from './components/NewsFeed';
import Footer from './components/Footer';
import TextContainer from './components/TextContainer';
import About from './pages/About';
import Design from './pages/Design';
import Photography from "./pages/Photography";
import LegalNotice from "./pages/LegalNotice";
import Development from "./pages/Development";

import './assets/styles/main.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={(
                            <>
                                <VideoBackground />
                                <TextContainer />
                                <NewsFeed />
                            </>
                        )}
                    />
                    <Route path="/design" element={<Design />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/photography" element={<Photography />} />
                    <Route path="/development" element={<Development />} />
                    <Route path="/legalnotice" element={<LegalNotice />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
