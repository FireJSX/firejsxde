import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import '../assets/styles/main.scss';

const videos = [
    {
        title: 'Semester Film – 1st Semester',
        description:
            "'Slip Up' – completely without dialogue – shows the power of visual storytelling.",
        details: [
            'Task: Film without speech',
            'Focus: Emotions, facial expressions, editing',
            'Role: Screenplay, camera, lighting, editing',
        ],
        url: 'https://www.youtube.com/embed/cXw2elejLPc',
        vertical: false,
    },
    {
        title: 'A Shot of Nature (Stop Motion)',
        description:
            'A humorous stop-motion film about cake competitions – our interpretation of the Olympics.',
        details: [
            'Frame-by-frame animation with DSLR',
            'Self-made set design & props',
            'Adobe After Effects & Audition',
        ],
        url: 'https://www.youtube.com/embed/_AslhtH-BpA',
        vertical: false,
    },
    {
        title: 'City Dragon (Unreal Engine)',
        description: 'My first self-made animation in Unreal Engine.',
        details: ['Unreal Sequencer', 'Vertical format (9:16)', 'Introduction to VFX & animation'],
        url: 'https://www.youtube.com/embed/vFsmsbbMJKE',
        vertical: true,
    },
    {
        title: '3D Modeling: Subaru 360',
        description:
            'A realistic 3D model of the 1958 Subaru 360 – including camera animation.',
        details: ['Modeling in 3DS Max', 'Animation & camera movement'],
        url: 'https://www.youtube.com/embed/JiVVNME7nx4',
        vertical: false,
    },
];

const Videography: React.FC = () => {
    return (
        <div>
            <Navbar />
            <HeroBanner
                title="Videography"
                imageUrl="/images/videography/hero.webp"
                className="videography-hero"
            />
            <main className="videography-page">
                {videos.map((video, index) =>
                    video.vertical ? (
                        <section className="video-section vertical-video" key={index}>
                            <div className="video-info">
                                <h2>{video.title}</h2>
                                <p className="video-description">{video.description}</p>
                                <ul className="video-details">
                                    {video.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="video-wrapper">
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </section>
                    ) : (
                        <section className="video-section" key={index}>
                            <h2>{video.title}</h2>
                            <p className="video-description">{video.description}</p>
                            <ul className="video-details">
                                {video.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                            <div className="video-wrapper">
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </section>
                    )
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Videography;
