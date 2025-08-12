import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/main.scss';
import HeroBanner from "../components/HeroBanner";

const Design = () => {
    const [slideIndexBanner, setSlideIndexBanner] = useState(1);
    const [slideIndexThumbnail, setSlideIndexThumbnail] = useState(1);
    const [slideIndexSkinrender, setSlideIndexSkinrender] = useState(1);

    const bannerImages = [
        'banner1.webp', 'banner2.webp', 'banner3.webp', 'banner4.webp', 'banner5.webp', 'banner6.webp'
    ];
    const thumbnailImages = [
        'thumbnail1.webp', 'thumbnail2.webp', 'thumbnail3.webp', 'thumbnail4.webp', 'thumbnail5.webp'
    ];
    const skinrenderImages = [
        'skinrender1.webp', 'skinrender2.webp', 'skinrender3.webp', 'skinrender4.webp', 'skinrender5.webp',
        'skinrender6.webp', 'skinrender7.webp', 'skinrender8.webp', 'skinrender9.webp', 'skinrender10.webp',
        'skinrender11.webp', 'skinrender12.webp', 'skinrender13.webp', 'skinrender14.webp', 'skinrender15.webp',
        'skinrender16.webp', 'skinrender17.webp', 'skinrender18.webp', 'skinrender19.webp', 'skinrender20.webp',
        'skinrender21.webp', 'skinrender22.webp', 'skinrender23.webp', 'skinrender24.webp', 'skinrender25.webp',
        'skinrender26.webp', 'skinrender27.webp', 'skinrender28.webp', 'skinrender29.webp', 'skinrender30.webp',
        'skinrender31.webp'
    ];

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

    const loadImage = (index, type) => {
        let img;
        const imageSet = type === "banner" ? bannerImages : type === "thumbnail" ? thumbnailImages : skinrenderImages;
        const imgName = imageSet[index - 1];

        img = `/images/gallery/${type}/${imgName}`;

        return img;
    };

    return (
        <div>
            <Navbar />
            <HeroBanner
                title="Design"
                imageUrl="/images/design/banner1.webp"
                className="hero"
            />
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
