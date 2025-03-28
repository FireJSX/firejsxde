import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/main.scss';

const photos = [
    {
        src: "/images/photography/photo-1.jpg",
        date: "01 Mar 2025",
        location: "Dresden, Germany",
        description: "A cloudy day next to the Theaterplatz.",
        blurColor: "rgba(255, 99, 71, 0.1)",
    },
    {
        src: "/images/photography/photo-2.jpg",
        date: "03 Mar 2025",
        location: "Dresden, Germany",
        description: "Sunset over the Theaterplatz.",
        blurColor: "rgba(30, 144, 255, 0.1)",
    },
    {
        src: "/images/photography/photo-3.jpg",
        date: "19 Jul 2024",
        location: "Friedrichshafen, Germany",
        description: "Sunny day at the Bodensee.",
        blurColor: "rgba(50, 205, 50, 0.1)",
    },
    {
        src: "/images/photography/photo-4.jpg",
        date: "19 Jun 2024",
        location: "Deggendorf, Germany",
        description: "Sunset walk in Deggendorf.",
        blurColor: "rgba(250, 0, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-5.jpg",
        date: "19 Jun 2024",
        location: "Deggendorf, Germany",
        description: "Locks near the Donau in Deggendorf.",
        blurColor: "rgba(250, 255, 50, 0.1)",
    },
    {
        src: "/images/photography/photo-6.jpg",
        date: "01 Mar 2025",
        location: "Dresden, Germany",
        description: "A cloudy day at the Zwinger in Dresden.",
        blurColor: "rgba(0, 205, 100, 0.1)",
    },
    {
        src: "/images/photography/photo-7.jpg",
        date: "01 Mar 2025",
        location: "Dresden, Germany",
        description: "Action on the Theaterplatz.",
        blurColor: "rgba(200, 200, 200, 0.1)",
    },
];

const Photography: React.FC = () => {
    return (
        <div>
            <Navbar />
            <main className="photography">
                <div className="photo-gallery">
                    {photos.map((photo, index) => (
                        <div className="photo-column" key={index}>
                            <div className="photo-container">
                                <img src={photo.src} alt={photo.location} className="photo" />
                                <div className="photo-info">
                                    <div className="photo-location">{photo.location}</div>
                                    <div className="photo-date">{photo.date}</div>
                                    <div className="photo-description">{photo.description}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Photography;
