import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import '../assets/styles/main.scss';

const videos = [
    {
        title: 'Semesterfilm – 1. Semester',
        description:
            "'Slip Up' – ganz ohne Dialog – zeigt, wie stark visuelles Storytelling sein kann.",
        details: [
            'Aufgabe: Film ohne Sprache',
            'Fokus: Emotionen, Mimik, Schnitt',
            'Rolle: Drehbuch, Kamera, Licht, Schnitt',
        ],
        url: 'https://www.youtube.com/embed/cXw2elejLPc',
        vertical: false,
    },
    {
        title: 'Ein Schuss Natur (Stop Motion)',
        description:
            'Ein humorvoller Stop-Motion-Film rund um Kuchenwettkämpfe – unsere Interpretation von Olympia.',
        details: [
            'Einzelbildanimation mit DSLR',
            'Setbau & Requisiten selbst gemacht',
            'Adobe After Effects & Audition',
        ],
        url: 'https://www.youtube.com/embed/_AslhtH-BpA',
        vertical: false,
    },
    {
        title: 'City Dragon (Unreal Engine)',
        description: 'Meine erste selbst umgesetzte Animation in Unreal Engine.',
        details: ['Unreal Sequencer', 'Hochkant gerendert (9:16)', 'Einführung in VFX & Animation'],
        url: 'https://www.youtube.com/embed/vFsmsbbMJKE',
        vertical: true,
    },
    {
        title: '3D-Modellierung: Subaru 360',
        description:
            'Ein realistisches 3D-Modell des Subaru 360 aus dem Jahr 1958 – inkl. Kamerafahrt.',
        details: ['Modellierung in 3DS Max', 'Animation & Kamerafahrt'],
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
