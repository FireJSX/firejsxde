import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/main.scss';

const About: React.FC = () => {
    return (
        <div className="about-page">

            <main className="about-main">

                {/* INTRO */}
                <section className="about-hero">
                    <div className="about-image"></div>

                    <div className="about-intro">
                        <h1>Hey, I'm Jonas 👋</h1>

                        <p>
                            I'm a Media Technology (B.Eng.) student at the Deggendorf Institute of Technology (THD).
                            What started as hobbies — design, photography and video production — quickly turned
                            into practical work during my studies.
                        </p>

                        <p>
                            At THD I had the chance to apply these skills in real projects while also learning new
                            tools like 3D software, production workflows and design fundamentals.
                        </p>

                        <p>
                            A large part of my experience comes from hands-on work in film production,
                            photography, moderation and marketing projects.
                        </p>

                    </div>
                </section>


                {/* SKILLS / PORTFOLIO LINKS */}
                <section className="about-section">

                    <h2>What I work with</h2>

                    <div className="about-grid">

                        <Link className="about-card" to="/design">
                            <h3>Design</h3>
                            <p>
                                Visual layouts, graphics and marketing material.
                            </p>
                            <span>View projects →</span>
                        </Link>

                        <Link className="about-card" to="/videography">
                            <h3>Videography</h3>
                            <p>
                                Short films, stop-motion projects, Unreal animations and video editing.
                            </p>
                            <span>View projects →</span>
                        </Link>

                        <Link className="about-card" to="/photography">
                            <h3>Photography</h3>
                            <p>
                                Event photography, city photography and creative shoots.
                            </p>
                            <span>View gallery →</span>
                        </Link>

                        <Link className="about-card" to="/onair">
                            <h3>On Air</h3>
                            <p>
                                Live moderation, radio production and streaming.
                            </p>
                            <span>See broadcasts →</span>
                        </Link>

                        <Link className="about-card" to="/development">
                            <h3>Development</h3>
                            <p>
                                Small applications, web projects and programming work.
                            </p>
                            <span>View projects →</span>
                        </Link>

                    </div>

                </section>


                {/* EXPERIENCE */}
                <section className="about-section">

                    <h2>University Experience</h2>

                    <div className="experience-container">

                        <div className="experience-card">

                            <h3>Fast Forest – Formula Student Team</h3>

                            <p>
                                I joined the marketing team of Fast Forest, the Formula Student team of THD.
                            </p>

                            <p>
                                There I gained practical experience creating visual content such as
                                photography and video material for the team.
                            </p>

                            <p>
                                This work gave me a lot of hands-on experience in content production
                                and visual storytelling for real events and projects.
                            </p>

                        </div>


                        <div className="experience-card">

                            <h3>Burning Cinema – University Cinema Club</h3>

                            <p>
                                At Burning Cinema, the university cinema club of THD,
                                I was responsible for writing and posting the texts
                                announcing upcoming films.
                            </p>

                            <p>
                                Together with a fellow student, we also started producing
                                parody trailers for some of the movies we screened.
                            </p>

                            <p>
                                These videos combined humor with professional production quality
                                and eventually won an award from the organization
                                <strong> UniFilm </strong> for being both entertaining and well produced.
                            </p>

                        </div>

                    </div>

                </section>


                {/* SKILLS SUMMARY */}
                <section className="about-section">

                    <h2>Core Skills</h2>

                    <ul className="skills-list">

                        <li>Video production & editing</li>

                        <li>Photography & visual storytelling</li>

                        <li>Live moderation & media presentation</li>

                        <li>Design fundamentals (layout, typography, composition)</li>

                        <li>3D software basics & Unreal Engine workflows</li>

                        <li>Web development with React / Vite</li>

                        <li>Creative marketing & content production</li>

                    </ul>

                </section>


                {/* OUTRO */}
                <section className="about-section">

                    <h2>Looking forward</h2>

                    <p>
                        I'm especially interested in projects where creative production
                        and technical work meet — combining design, video and development
                        to create engaging digital experiences.
                    </p>

                </section>
                <br/>
                <br/>
                <br/>


            </main>

        </div>
    );
};

export default About;
