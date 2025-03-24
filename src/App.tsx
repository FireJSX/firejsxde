import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'; // Die Navigation
import VideoBackground from './components/VideoBackground'; // Video Hintergrund
import NewsFeed from './components/NewsFeed'; // News Feed
import Footer from './components/Footer'; // Footer
import Design from './pages/Design'; // Die Design-Seite
import TextContainer from './components/TextContainer'; // Text Container

import './assets/styles/main.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar /> {/* Navbar wird auf allen Seiten angezeigt */}

                {/* Routen definieren */}
                <Routes>
                    {/* Startseite (wird beim Öffnen der App angezeigt) */}
                    <Route
                        path="/"
                        element={(
                            <>
                                <VideoBackground /> {/* VideoBackground nur auf der Startseite */}
                                <TextContainer /> {/* TextContainer nur auf der Startseite */}
                                <NewsFeed /> {/* NewsFeed nur auf der Startseite */}
                            </>
                        )}
                    />

                    {/* Weitere Seiten ohne NewsFeed und TextContainer */}
                    <Route path="/design" element={<Design />} />
                    <Route path="/about" element={<Footer />} />
                    <Route path="/photography" element={<Footer />} />
                    <Route path="/development" element={<Footer />} />
                    <Route path="/legalnotice" element={<Footer />} />
                </Routes>

                {/* Footer wird immer angezeigt */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
