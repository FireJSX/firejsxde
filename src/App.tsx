import React from 'react';
import Navbar from './components/Navbar'; // Die Navigation
import VideoBackground from './components/VideoBackground'; // Video Background
import TextContainer from './components/TextContainer'; // Text Container mit dem Typewriter-Effekt
import NewsFeed from './components/NewsFeed'; // News Feed
import Footer from './components/Footer'; // Footer

import './assets/styles/main.scss';

function App() {
    return (
        <div className="App">
            <Navbar /> {/* Navigation */}
            <VideoBackground /> {/* Video Hintergrund */}
            <TextContainer /> {/* Text Container mit Typewriter-Effekt */}
            <NewsFeed /> {/* News Feed */}
            <Footer /> {/* Footer */}
        </div>
    );
}

export default App;
