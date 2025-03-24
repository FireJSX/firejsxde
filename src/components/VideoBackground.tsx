import React from 'react';

const VideoBackground: React.FC = () => {
    return (
        <div className="video-background">
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/sBatkbbECfo?autoplay=1&mute=1&loop=1&playlist=sBatkbbECfo&controls=0&rel=0&showinfo=0&modestbranding=1&fs=0&iv_load_policy=3&enablejsapi=1&disablekb=1"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default VideoBackground;
