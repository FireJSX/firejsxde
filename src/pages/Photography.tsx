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
        blurColor: "rgba(50, 50, 150, 0.1)",
    },
    {
        src: "/images/photography/photo-9.webp",
        date: "09 Aug 2025",
        location: "Most, Czech Republic",
        description: "FSCzech Formula Student Event.",
        blurColor: "rgba(0, 0, 200, 0.1)",
    },
    {
        src: "/images/photography/photo-10.webp",
        date: "07 Aug 2025",
        location: "Most, Czech Republic",
        description: "Golden Hour - FSCzech Formula Student Event.",
        blurColor: "rgba(200, 200, 20, 0.1)",
    },
    {
        src: "/images/photography/photo-11.webp",
        date: "13 Jun 2025",
        location: "Deggendorf, Germany",
        description: "Testing at Formula Student.",
        blurColor: "rgba(0, 200, 0, 0.1)",
    },
    {
        src: "/images/photography/photo-12.webp",
        date: "07 Sep 2025",
        location: "Wurmannsquick, Germany",
        description: "Sunset in the countryside.",
        blurColor: "rgba(250, 0, 0, 0.1)",
    },
    {
        src: "/images/photography/photo-13.webp",
        date: "07 Sep 2025",
        location: "Passau, Germany",
        description: "The moon at the Three Rivers Corner in Passau.",
        blurColor: "rgba(0, 0, 25, 0.1)",
    },
    {
        src: "/images/photography/photo-14.webp",
        date: "07 Sep 2025",
        location: "Passau, Germany",
        description: "Walk in the moonlight with a view over the Inn River.",
        blurColor: "rgba(0, 0, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-15.webp",
        date: "07 Sep 2025",
        location: "Passau, Germany",
        description: "View over the entire city from above.",
        blurColor: "rgba(250, 0, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-16.webp",
        date: "15 Nov 2025",
        location: "Passau, Germany",
        description: "Nightshot at the bus station.",
        blurColor: "rgba(255, 0, 0, 0.1)",
    },
    {
        src: "/images/photography/photo-17.webp",
        date: "15 Nov 2025",
        location: "Passau, Germany",
        description: "A cruising ship on its way through the 3 rivers in Passau at night.",
        blurColor: "rgba(250, 250, 0, 0.1)",
    },
    {
        src: "/images/photography/photo-18.webp",
        date: "15 Nov 2025",
        location: "Passau, Germany",
        description: "Capturing a little moment in the small nightly streets.",
        blurColor: "rgba(0, 0, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-19.webp",
        date: "15 Nov 2025",
        location: "Passau, Germany",
        description: "Nightview at the St. Stephen's Cathedral from the Inn-Side.",
        blurColor: "rgba(250, 150, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-20.webp",
        date: "15 Nov 2025",
        location: "Passau, Germany",
        description: "View at at St. Stephen's Cathedral from the Veste Oberhaus.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
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
