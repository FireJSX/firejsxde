import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import '../assets/styles/main.scss';

interface Photo {
    src: string;
    date: string;
    location: string;
    description: string;
    blurColor: string;
}

const photos: Photo[] = [
    {
        src: "/images/photography/photo-1.webp",
        date: "01 Mar 2025",
        location: "Dresden, Germany",
        description: "A cloudy day next to the Theaterplatz.",
        blurColor: "rgba(255, 99, 71, 0.1)",
    },
    {
        src: "/images/photography/photo-2.webp",
        date: "03 Mar 2025",
        location: "Dresden, Germany",
        description: "Sunset over the Theaterplatz.",
        blurColor: "rgba(30, 144, 255, 0.1)",
    },
    {
        src: "/images/photography/photo-3.webp",
        date: "19 Jul 2024",
        location: "Friedrichshafen, Germany",
        description: "Sunny day at the Bodensee.",
        blurColor: "rgba(50, 205, 50, 0.1)",
    },
    {
        src: "/images/photography/photo-4.webp",
        date: "19 Jun 2024",
        location: "Deggendorf, Germany",
        description: "Sunset walk in Deggendorf.",
        blurColor: "rgba(250, 0, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-5.webp",
        date: "19 Jun 2024",
        location: "Deggendorf, Germany",
        description: "Locks near the Donau in Deggendorf.",
        blurColor: "rgba(250, 255, 50, 0.1)",
    },
    {
        src: "/images/photography/photo-6.webp",
        date: "01 Mar 2025",
        location: "Dresden, Germany",
        description: "A cloudy day at the Zwinger in Dresden.",
        blurColor: "rgba(0, 205, 100, 0.1)",
    },
    {
        src: "/images/photography/photo-7.webp",
        date: "01 Mar 2025",
        location: "Dresden, Germany",
        description: "Action on the Theaterplatz.",
        blurColor: "rgba(200, 200, 200, 0.1)",
    },
    {
        src: "/images/photography/photo-8.webp",
        date: "23 May 2025",
        location: "Deggendorf, Germany",
        description: "Aftershow-Party at the Deggendorf Institute of Technology.",
        blurColor: "rgba(0, 0, 200, 0.1)",
    },
];

const Photography: React.FC = () => {
    const columnCount = 3;
    const columns: Photo[][] = Array.from({ length: columnCount }, () => []);
    photos.forEach((photo, index) => {
        columns[index % columnCount].push(photo);
    });

    return (
        <div>
            <Navbar />
            <HeroBanner
                title="Photography"
                imageUrl="/images/photography/hero.webp"
                className="hero"
            />
            <main className="photography">
                <div className="photo-gallery">
                    {columns.map((column, colIndex) => (
                        <div className="photo-column" key={colIndex}>
                            {column.map((photo, index) => (
                                <div className="photo-container" key={index}>
                                    <img src={photo.src} alt={photo.location} className="photo" />
                                    <div className="photo-info">
                                        <div className="photo-location">{photo.location}</div>
                                        <div className="photo-date">{photo.date}</div>
                                        <div className="photo-description">{photo.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Photography;
