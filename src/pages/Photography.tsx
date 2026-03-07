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
        date: "2025-03-01",
        location: "Dresden, Germany",
        description: "A cloudy day next to the Theaterplatz.",
        blurColor: "rgba(255, 99, 71, 0.1)",
    },
    {
        src: "/images/photography/photo-2.webp",
        date: "2025-03-03",
        location: "Dresden, Germany",
        description: "Sunset over the Theaterplatz.",
        blurColor: "rgba(30, 144, 255, 0.1)",
    },
    {
        src: "/images/photography/photo-3.webp",
        date: "2024-07-19",
        location: "Friedrichshafen, Germany",
        description: "Sunny day at the Bodensee.",
        blurColor: "rgba(50, 205, 50, 0.1)",
    },
    {
        src: "/images/photography/photo-4.webp",
        date: "2024-07-19",
        location: "Deggendorf, Germany",
        description: "Sunset walk in Deggendorf.",
        blurColor: "rgba(250, 0, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-5.webp",
        date: "2024-07-19",
        location: "Deggendorf, Germany",
        description: "Locks near the Donau in Deggendorf.",
        blurColor: "rgba(250, 255, 50, 0.1)",
    },
    {
        src: "/images/photography/photo-6.webp",
        date: "2025-03-01",
        location: "Dresden, Germany",
        description: "A cloudy day at the Zwinger in Dresden.",
        blurColor: "rgba(0, 205, 100, 0.1)",
    },
    {
        src: "/images/photography/photo-7.webp",
        date: "2025-03-01",
        location: "Dresden, Germany",
        description: "Action on the Theaterplatz.",
        blurColor: "rgba(200, 200, 200, 0.1)",
    },
    {
        src: "/images/photography/photo-8.webp",
        date: "2025-05-23",
        location: "Deggendorf, Germany",
        description: "Aftershow-Party at the Deggendorf Institute of Technology.",
        blurColor: "rgba(50, 50, 150, 0.1)",
    },
    {
        src: "/images/photography/photo-9.webp",
        date: "2025-08-09",
        location: "Most, Czech Republic",
        description: "FSCzech Formula Student Event.",
        blurColor: "rgba(0, 0, 200, 0.1)",
    },
    {
        src: "/images/photography/photo-10.webp",
        date: "2025-08-07",
        location: "Most, Czech Republic",
        description: "Golden Hour - FSCzech Formula Student Event.",
        blurColor: "rgba(200, 200, 20, 0.1)",
    },
    {
        src: "/images/photography/photo-11.webp",
        date: "2025-06-13",
        location: "Deggendorf, Germany",
        description: "Testing at Formula Student.",
        blurColor: "rgba(0, 200, 0, 0.1)",
    },
    {
        src: "/images/photography/photo-12.webp",
        date: "2025-09-07",
        location: "Wurmannsquick, Germany",
        description: "Sunset in the countryside.",
        blurColor: "rgba(250, 0, 0, 0.1)",
    },
    {
        src: "/images/photography/photo-13.webp",
        date: "2025-09-07",
        location: "Passau, Germany",
        description: "The moon at the Three Rivers Corner in Passau.",
        blurColor: "rgba(0, 0, 25, 0.1)",
    },
    {
        src: "/images/photography/photo-14.webp",
        date: "2025-09-07",
        location: "Passau, Germany",
        description: "Walk in the moonlight with a view over the Inn River.",
        blurColor: "rgba(0, 0, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-15.webp",
        date: "2025-09-07",
        location: "Passau, Germany",
        description: "View over the entire city from above.",
        blurColor: "rgba(250, 0, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-16.webp",
        date: "2025-11-15",
        location: "Passau, Germany",
        description: "Nightshot at the bus station.",
        blurColor: "rgba(255, 0, 0, 0.1)",
    },
    {
        src: "/images/photography/photo-17.webp",
        date: "2025-11-15",
        location: "Passau, Germany",
        description: "A cruising ship on its way through the 3 rivers in Passau at night.",
        blurColor: "rgba(250, 250, 0, 0.1)",
    },
    {
        src: "/images/photography/photo-18.webp",
        date: "2025-11-15",
        location: "Passau, Germany",
        description: "Capturing a little moment in the small nightly streets.",
        blurColor: "rgba(0, 0, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-19.webp",
        date: "2025-11-15",
        location: "Passau, Germany",
        description: "Nightview at the St. Stephen's Cathedral from the Inn-Side.",
        blurColor: "rgba(250, 150, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-20.webp",
        date: "2025-11-15",
        location: "Passau, Germany",
        description: "View at at St. Stephen's Cathedral from the Veste Oberhaus.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-21.webp",
        date: "2025-11-22",
        location: "Donaustauf, Germany",
        description: "View over Donaustauf through the pillars of the Wallhalla.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-22.webp",
        date: "2025-11-22",
        location: "Donaustauf, Germany",
        description: "Lightpainting at the Wallhalla at night.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-23.webp",
        date: "2025-11-22",
        location: "Donaustauf, Germany",
        description: "Nightsky through the pillars of the Wallhalla.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-24.webp",
        date: "2025-11-22",
        location: "Donaustauf, Germany",
        description: "Wallhalla at night.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-25.webp",
        date: "2025-11-22",
        location: "Donaustauf, Germany",
        description: "Wallhalla at night.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-26.webp",
        date: "2026-01-01",
        location: "Wurmannsquick, Germany",
        description: "Silvester night.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-27.webp",
        date: "2026-01-01",
        location: "Wurmannsquick, Germany",
        description: "Silvester night.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-28.webp",
        date: "2026-01-04",
        location: "Passau, Germany",
        description: "View over the city from the Veste Oberhaus.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-29.webp",
        date: "2026-02-02",
        location: "Passau, Germany",
        description: "Nightwalk through Passau.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-30.webp",
        date: "2026-02-02",
        location: "Passau, Germany",
        description: "Nightwalk through Passau.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-31.webp",
        date: "2026-02-02",
        location: "Passau, Germany",
        description: "Nightwalk through Passau.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-32.webp",
        date: "2026-02-07",
        location: "Passau, Germany",
        description: "Nightwalk through Passau.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-33.webp",
        date: "2026-02-07",
        location: "Passau, Germany",
        description: "Nightwalk through Passau.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-34.webp",
        date: "2026-02-07",
        location: "Passau, Germany",
        description: "Nightwalk through Passau.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-35.webp",
        date: "2026-02-07",
        location: "Passau, Germany",
        description: "Nightwalk through Passau.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-36.webp",
        date: "2026-02-11",
        location: "Vilshofen, Germany",
        description: "View over the city and the Donau.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-37.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-38.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-39.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-40.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-41.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-42.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-43.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-44.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-45.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-46.webp",
        date: "2026-01-30",
        location: "Passau, Germany",
        description: "Part of my urban photo series about loneliness.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-47.webp",
        date: "2026-01-30",
        location: "Passau, Germany",
        description: "Part of my urban photo series about loneliness.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-48.webp",
        date: "2026-01-30",
        location: "Passau, Germany",
        description: "Part of my urban photo series about loneliness.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-49.webp",
        date: "2026-01-30",
        location: "Passau, Germany",
        description: "Part of my urban photo series about loneliness.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-50.webp",
        date: "2026-01-30",
        location: "Passau, Germany",
        description: "Part of my urban photo series about loneliness.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-51.webp",
        date: "2026-01-30",
        location: "Passau, Germany",
        description: "Part of my urban photo series about loneliness.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-52.webp",
        date: "2026-01-30",
        location: "Passau, Germany",
        description: "Part of my urban photo series about loneliness.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-53.webp",
        date: "2026-01-30",
        location: "Passau, Germany",
        description: "Part of my urban photo series about loneliness.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },

];

const Photography: React.FC = () => {
    const columnCount = 3;

    const sortedPhotos = [...photos].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const columns: Photo[][] = Array.from({ length: columnCount }, () => []);

    sortedPhotos.forEach((photo, index) => {
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
                                    <img
                                        src={photo.src}
                                        alt={photo.location}
                                        className="photo"
                                    />
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
