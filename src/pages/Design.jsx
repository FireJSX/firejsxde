import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';  // Deine Navbar-Komponente
import Footer from '../components/Footer';  // Deine Footer-Komponente
import '../assets/styles/main.scss';  // Importiere das Hauptstylesheet (welches _design.scss enthält)

const Design = () => {
    const [slideIndexBanner, setSlideIndexBanner] = useState(1);
    const [slideIndexThumbnail, setSlideIndexThumbnail] = useState(1);
    const [slideIndexSkinrender, setSlideIndexSkinrender] = useState(1);

    // Array mit den Dateinamen für jedes Set von Bildern
    const bannerImages = [
        'banner1.jpg', 'banner2.png', 'banner3.jpg', 'banner4.png', 'banner5.jpg'
    ];
    const thumbnailImages = [
        'thumbnail1.png', 'thumbnail2.jpg', 'thumbnail3.png', 'thumbnail4.png', 'thumbnail5.jpg'
    ];
    const skinrenderImages = [
        'skinrender1.png', 'skinrender2.png', 'skinrender3.png', 'skinrender4.png', 'skinrender5.png',
        'skinrender6.png', 'skinrender7.png', 'skinrender8.png', 'skinrender9.png', 'skinrender10.png',
        'skinrender11.png', 'skinrender12.png', 'skinrender13.png', 'skinrender14.png', 'skinrender15.png',
        'skinrender16.png', 'skinrender17.png', 'skinrender18.png', 'skinrender19.png', 'skinrender20.png',
        'skinrender21.png', 'skinrender22.png', 'skinrender23.png', 'skinrender24.png', 'skinrender25.png',
        'skinrender26.png', 'skinrender27.png', 'skinrender28.png', 'skinrender29.png', 'skinrender30.png',
        'skinrender31.png', 'skinrender32.png', 'skinrender33.png'
    ];

    // Slide navigieren
    const plusSlides = (n, type) => {
        if (type === "banner") setSlideIndexBanner(prevIndex => prevIndex + n);
        if (type === "thumbnail") setSlideIndexThumbnail(prevIndex => prevIndex + n);
        if (type === "skinrender") setSlideIndexSkinrender(prevIndex => prevIndex + n);
    };

    const currentSlide = (n, type) => {
        if (type === "banner") setSlideIndexBanner(n);
        if (type === "thumbnail") setSlideIndexThumbnail(n);
        if (type === "skinrender") setSlideIndexSkinrender(n);
    };

    // Slideshow anzeigen
    const showSlides = (index, type) => {
        let slides;
        let dots;
        if (type === "banner") {
            slides = document.getElementsByClassName("bannerSlides");
            dots = document.getElementsByClassName("bannerDot");
        } else if (type === "thumbnail") {
            slides = document.getElementsByClassName("thumbnailSlides");
            dots = document.getElementsByClassName("thumbnailDot");
        } else if (type === "skinrender") {
            slides = document.getElementsByClassName("skinrenderSlides");
            dots = document.getElementsByClassName("skinrenderDot");
        }

        if (index > slides.length) return (index = 1);
        if (index < 1) return (index = slides.length);

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[index - 1].style.display = "block";
        dots[index - 1].className += " active";
    };

    useEffect(() => {
        showSlides(slideIndexBanner, "banner");
        showSlides(slideIndexThumbnail, "thumbnail");
        showSlides(slideIndexSkinrender, "skinrender");
    }, [slideIndexBanner, slideIndexThumbnail, slideIndexSkinrender]);

    // Download-Logik für Bilder
    const downloadImage = (index, type) => {
        let img;
        if (type === "banner") {
            img = `/images/gallery/banner/${bannerImages[index - 1]}`;
        } else if (type === "thumbnail") {
            img = `/images/gallery/thumbnail/${thumbnailImages[index - 1]}`;
        } else if (type === "skinrender") {
            img = `/images/gallery/skinrender/${skinrenderImages[index - 1]}`;
        }

        const a = document.createElement("a");
        a.href = img;
        a.download = decodeURIComponent(img.split("/")[img.split("/").length - 1]);
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    // Funktion zum Laden von Bildern mit dynamischen Dateiendungen (.jpg und .png)
    const loadImage = (index, type) => {
        let img;
        const imageSet = type === "banner" ? bannerImages : type === "thumbnail" ? thumbnailImages : skinrenderImages;
        const imgName = imageSet[index - 1];

        // Erstelle den Pfad basierend auf dem Type (Banner, Thumbnail, Skinrender)
        img = `/images/gallery/${type}/${imgName}`;

        return img;
    };

    return (
        <div>
            <Navbar />
            <div className="design-container">
                <h1>Old Designs for YouTube</h1>

                {/* Banner Slideshow */}
                <h2>/Banner/</h2>
                <div className="slideshow-container">
                    {bannerImages.map((img, index) => (
                        <div key={index} className="bannerSlides fade">
                            <img src={loadImage(index + 1, "banner")} className="slider-image" alt={`Banner ${index + 1}`} />
                            <div className="text">Banner {index + 1}</div>
                            <div className="hover-buttons">
                                <button className="btn" onClick={() => downloadImage(index + 1, "banner")}>
                                    <i className="fa fa-download"></i> Bild herunterladen
                                </button>
                            </div>
                        </div>
                    ))}

                    <a className="prev" onClick={() => plusSlides(-1, "banner")}>&#10094;</a>
                    <a className="next" onClick={() => plusSlides(1, "banner")}>&#10095;</a>
                </div>
                <div style={{ textAlign: 'center' }}>
                    {bannerImages.map((_, index) => (
                        <span key={index} className="bannerDot" onClick={() => currentSlide(index + 1, "banner")}></span>
                    ))}
                </div>

                {/* Thumbnails Slideshow */}
                <h2>/Thumbnails/</h2>
                <div className="slideshow-container">
                    {thumbnailImages.map((img, index) => (
                        <div key={index} className="thumbnailSlides fade">
                            <img src={loadImage(index + 1, "thumbnail")} className="slider-image" alt={`Thumbnail ${index + 1}`} />
                            <div className="text">Thumbnail {index + 1}</div>
                            <div className="hover-buttons">
                                <button className="btn" onClick={() => downloadImage(index + 1, "thumbnail")}>
                                    <i className="fa fa-download"></i> Save Image
                                </button>
                            </div>
                        </div>
                    ))}

                    <a className="prev" onClick={() => plusSlides(-1, "thumbnail")}>&#10094;</a>
                    <a className="next" onClick={() => plusSlides(1, "thumbnail")}>&#10095;</a>
                </div>
                <div style={{ textAlign: 'center' }}>
                    {thumbnailImages.map((_, index) => (
                        <span key={index} className="thumbnailDot" onClick={() => currentSlide(index + 1, "thumbnail")}></span>
                    ))}
                </div>

                {/* Skinrender Slideshow */}
                <h2>/Skinrender/</h2>
                <div className="slideshow-container">
                    {skinrenderImages.map((img, index) => (
                        <div key={index} className="skinrenderSlides fade">
                            <img src={loadImage(index + 1, "skinrender")} className="slider-image" alt={`Skinrender ${index + 1}`} />
                            <div className="text">Skinrender {index + 1}</div>
                            <div className="hover-buttons">
                                <button className="btn" onClick={() => downloadImage(index + 1, "skinrender")}>
                                    <i className="fa fa-download"></i> Bild herunterladen
                                </button>
                            </div>
                        </div>
                    ))}

                    <a className="prev" onClick={() => plusSlides(-1, "skinrender")}>&#10094;</a>
                    <a className="next" onClick={() => plusSlides(1, "skinrender")}>&#10095;</a>
                </div>
                <div style={{ textAlign: 'center' }}>
                    {skinrenderImages.map((_, index) => (
                        <span key={index} className="skinrenderDot" onClick={() => currentSlide(index + 1, "skinrender")}></span>
                    ))}
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer />
        </div>
    );
};

export default Design;
