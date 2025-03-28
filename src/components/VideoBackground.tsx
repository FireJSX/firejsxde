import React from 'react';

const VideoBackground: React.FC = () => {
    return (
        <div className="video-background">
            <video autoPlay muted loop playsInline>
                <source src="/videos/background.mp4" type="video/mp4" />
                Dein Browser unterstützt kein HTML5-Video.
            </video>
        </div>
    );
}

export default VideoBackground;
