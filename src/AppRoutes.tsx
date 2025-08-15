// src/AppRoutes.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import VideoBackground from './components/VideoBackground';
import NewsFeed from './components/NewsFeed';
import TextContainer from './components/TextContainer';
import About from './pages/About';
import Design from './pages/Design';
import Photography from './pages/Photography';
import LegalNotice from './pages/LegalNotice';
import Development from './pages/Development';
import Videography from "./pages/Videography";
import OnAir from "./pages/OnAir";

const AppRoutes: React.FC = () => (
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
        <Route path="/videography" element={<Videography />} />
        <Route path="/onair" element={<OnAir />} />
        <Route path="/legalnotice" element={<LegalNotice />} />
    </Routes>
);

export default AppRoutes;
