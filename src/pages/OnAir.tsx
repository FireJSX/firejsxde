import React from 'react';
import HeroBanner from '../components/HeroBanner';
import '../assets/styles/main.scss';

const OnAir: React.FC = () => {
    return (
        <div>
            <HeroBanner
                title="On Air"
                imageUrl="/images/onair/Banner.webp"
                className="onair-hero"
            />
            <main className="videography-page">
                {/* 🎮 Twitch Stream */}
                <section className="video-section">
                    <h2>Live on Twitch</h2>
                    <p className="video-description">
                        I stream gaming sessions, interesting talks and much more – tune in!
                    </p>
                    <div className="video-wrapper">
                        <iframe
                            src="https://player.twitch.tv/?channel=firejsx&parent=firejsx.de"
                            allowFullScreen
                            frameBorder="0"
                            title="Twitch Stream"
                        ></iframe>
                    </div>
                </section>

                {/* 🎤 Live Moderation */}
                <section className="video-section">
                    <h2>Live Moderation – doschauher.tv</h2>
                    <p className="video-description">
                        I co-hosted a live event streamed on YouTube, covering a Comedy Night feat. Florian Simbeck.
                    </p>
                    <ul className="video-details">
                        <li>Role: Host / Moderator</li>
                        <li>Platform: YouTube Live</li>
                        <li>Live Audience</li>
                    </ul>
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/o5hx7mIg6W0"
                            title="Live Moderation"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
                <section className="video-section">
                    <h2>Live Moderation – doschauher.tv</h2>
                    <p className="video-description">
                        I co-hosted a live event streamed on YouTube, covering a Hypnosis.
                    </p>
                    <ul className="video-details">
                        <li>Role: Host / Moderator</li>
                        <li>Platform: YouTube Live</li>
                        <li>Live Audience</li>
                    </ul>
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/KZKp9CMvEHk"
                            title="Live Moderation"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default OnAir;
