import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/main.scss';
import HeroBanner from "../components/HeroBanner";

const handleDinoDownload = () => {
    const baseName = 'dinorunner';
    const partCount = 3;

    const downloadFile = (fileName: string) => {
        const link = document.createElement('a');
        link.href = `/downloads/${fileName}`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    for (let i = 1; i < partCount; i++) {
        const part = `${baseName}.z${i.toString().padStart(2, '0')}`;
        downloadFile(part);
    }

    downloadFile(`${baseName}.zip`);
};


const Development: React.FC = () => {
    return (
        <div>
            <Navbar />
            <HeroBanner
                title="Development"
                imageUrl="/images/development/background.png"
                className="development-hero"
            />
            <main className="Development">
                <section className="project-section">
                    <h1 className="project-title">ConnectApp</h1>

                    <p className="project-description">
                        ConnectApp is an Android application that simplifies  contact sharing using QR codes. Create, save, and share your personal  and professional profiles with just a scan!
                    </p>

                    <div className="project-columns">
                        <div className="left-column with-background">
                            <h2 className="subheading">Features</h2>
                            <ul className="how-to-play-list">
                                <li><strong>Create & Edit Profiles:</strong> Add personal and business contact details.</li>
                                <li><strong>Store Multiple Profiles:</strong> Manage different contact profiles easily.</li>
                                <li><strong>Import Contacts:</strong> Quickly import contacts from your phone book.</li>
                                <li><strong>QR Code Generation:</strong> Instantly generate QR codes for easy profile sharing.</li>
                                <li><strong>Scan & Connect:</strong> Scan QR codes to seamlessly save contacts.</li>
                                <li><strong>Set Default Profile:</strong> Mark a default profile for quick sharing.</li>
                                <li><strong>Sleek UI/UX:</strong> Modern and intuitive Material Design for a smooth experience.</li>
                            </ul>
                        </div>
                        <div className="right-column">
                            <img
                                src="/images/development/ConnectApp.png"
                                alt="ConnectApp Icon"
                                className="project-icon"
                            />
                            <a className="hero-style-button"
                               href="/downloads/ConnectApp.apk"
                               download
                            >
                                Download
                            </a>
                        </div>
                    </div>
                </section>
                <section className="project-section">
                    <h1 className="project-title">DinoRunner</h1>

                    <p className="project-description">
                        Dino Runner is a 2D endless runner game built with Pygame. The player controls a character that must avoid obstacles and achieve the highest score possible.
                    </p>

                    <div className="project-columns">
                        <div className="left-column with-background">
                            <h2 className="subheading">How to Play</h2>
                            <ul className="how-to-play-list">
                                <li><strong>Start the Game:</strong> Press SPACE to begin.</li>
                                <li><strong>Jump:</strong> Press SPACE to jump over obstacles.</li>
                                <li><strong>Move:</strong> Press A/D to move your dino.</li>
                                <li><strong>Pause:</strong> Press ESC to open the pause menu.</li>
                                <li><strong>Quit:</strong> Press F12 or close the window.</li>
                            </ul>
                        </div>

                        <div className="right-column">
                            <img
                                src="/images/development/dino-icon.png"
                                alt="DinoRunner Icon"
                                className="project-icon"
                            />
                            <button className="hero-style-button" onClick={() => handleDinoDownload()}>
                                Download
                            </button>
                            <strong>Note: If you want to download the game you will get 2 split packages. You need both to extract the main .zip file! </strong>
                        </div>
                    </div>
                </section>
            </main>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>
    );
};

export default Development;
