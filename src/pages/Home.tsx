import React from 'react';
import { Link } from 'react-router-dom';

import NewsFeed from '../components/NewsFeed';
import { photoSeries } from '../data/photographyData';

import '../assets/styles/main.scss';
import '../assets/styles/_home.scss';

const heroWords = [
    {
        title: 'FILM.',
        link: '/videography',
        label: 'Explore videography',
    },
    {
        title: 'PHOTO.',
        link: '/photography',
        label: 'Explore photography',
    },
    {
        title: 'DESIGN.',
        link: '/design',
        label: 'Explore design',
    },
    {
        title: 'CODE.',
        link: '/development',
        label: 'Explore development',
    },
];

const photographyProject =
    photoSeries.find(
        (series) =>
            series.published &&
            series.title.toLowerCase().includes('urban loneliness')
    ) ??
    photoSeries.find((series) => series.published);

const Home: React.FC = () => (
    <main className="home-page">
        {/* TYPOGRAPHIC HERO */}

        <section
            className="home-hero"
            aria-labelledby="home-title"
        >
            <div className="home-hero__top">
                <span className="home-eyebrow">
                    JONAS VOGEL / FIREJSX
                </span>

                <span className="home-hero__portfolio-label">
                    INDEPENDENT CREATIVE PORTFOLIO
                </span>
            </div>

            <div className="home-hero__layout">
                <div className="home-hero__main">
                    <h1
                        id="home-title"
                        className="home-hero__heading"
                    >
                        Film. Photo. Design. Code.
                    </h1>

                    <div className="home-hero__words">
                        {heroWords.map((word, index) => (
                            <Link
                                key={word.title}
                                to={word.link}
                                className={`home-hero__word home-hero__word--${index + 1}`}
                                aria-label={word.label}
                            >
                                <span>{word.title}</span>

                                <span
                                    className="home-hero__word-arrow"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="home-hero__aside">
                    <span className="home-eyebrow">
                        DIFFERENT MEDIUMS.
                        <br />
                        SHARED CURIOSITY.
                    </span>

                    <p className="home-hero__intro">
                        I’m Jonas.
                        <br />
                        I make images,
                        <br />
                        tell stories
                        <br />
                        and build things.
                    </p>

                    <p className="home-hero__description">
                        Exploring the space between
                        creative production and technology.
                    </p>

                    <a
                        className="home-link"
                        href="#home-selected"
                    >
                        SELECTED WORK
                        <span aria-hidden="true">↓</span>
                    </a>

                    <Link
                        className="home-hero__secondary-link"
                        to="/onair"
                    >
                        ALSO ON AIR
                        <span aria-hidden="true">↗</span>
                    </Link>
                </div>
            </div>

            <div className="home-hero__bottom">
                <span>IMAGES / STORIES / EXPERIENCES</span>

                <a href="#home-selected">
                    SCROLL TO EXPLORE
                    <span
                        className="home-scroll-arrow"
                        aria-hidden="true"
                    >
                        ↓
                    </span>
                </a>
            </div>
        </section>

        {/* SELECTED WORK */}

        <section
            id="home-selected"
            className="home-section home-selected"
            aria-labelledby="home-selected-title"
        >
            <div className="home-section__heading">
                <div>
                    <span className="home-eyebrow">
                        01 / SELECTED WORK
                    </span>

                    <h2 id="home-selected-title">
                        A closer look.
                    </h2>
                </div>

                <p className="home-section__intro">
                    A collection of images, concepts
                    and things made along the way.
                </p>
            </div>

            <div className="home-work-grid">
                {/* PHOTOGRAPHY */}

                <Link
                    className="home-project home-project--photography"
                    to="/photography"
                >
                    <div className="home-project__visual">
                        {photographyProject ? (
                            <img
                                src={photographyProject.cover}
                                alt={`${photographyProject.title} photography series`}
                                loading="lazy"
                            />
                        ) : (
                            <div className="home-project__placeholder">
                                THROUGH
                                <br />
                                THE LENS.
                            </div>
                        )}

                        <span className="home-project__badge">
                            PHOTO STORY
                        </span>

                        <span
                            className="home-project__arrow"
                            aria-hidden="true"
                        >
                            ↗
                        </span>
                    </div>

                    <div className="home-project__details">
                        <span
                            className="home-counter"
                            aria-hidden="true"
                        >
                            01
                        </span>

                        <div>
                            <span className="home-eyebrow">
                                PHOTOGRAPHY / VISUAL STORYTELLING
                            </span>

                            <h3>
                                {photographyProject?.title ??
                                    'Through the lens.'}
                            </h3>

                            <p>
                                A story told through photographs.
                                Explore the series and the wider
                                photography collection.
                            </p>
                        </div>

                        <span
                            className="home-project__details-arrow"
                            aria-hidden="true"
                        >
                            ↗
                        </span>
                    </div>
                </Link>

                {/* DESIGN */}

                <Link
                    className="home-project home-project--design"
                    to="/design"
                >
                    <div className="home-project__visual">
                        <img
                            src="/images/design/apple-glasses/cover.webp"
                            alt="Exploded camera lens illustration for the Apple Glasses university concept"
                            loading="lazy"
                        />

                        <span className="home-project__badge">
                            PRODUCT CONCEPT
                        </span>

                        <span
                            className="home-project__arrow"
                            aria-hidden="true"
                        >
                            ↗
                        </span>
                    </div>

                    <div className="home-project__details">
                        <span
                            className="home-counter"
                            aria-hidden="true"
                        >
                            02
                        </span>

                        <div>
                            <span className="home-eyebrow">
                                DESIGN / UNIVERSITY PROJECT
                            </span>

                            <h3>Apple Glasses.</h3>

                            <p>
                                Wearable technology imagined
                                through illustration and
                                product visualisation.
                            </p>
                        </div>

                        <span
                            className="home-project__details-arrow"
                            aria-hidden="true"
                        >
                            ↗
                        </span>
                    </div>
                </Link>
            </div>
        </section>

        {/* FEATURED PROJECT */}

        <section
            className="home-section home-featured-section"
            aria-labelledby="home-featured-title"
        >
            <div className="home-section__heading">
                <div>
                    <span className="home-eyebrow">
                        02 / FEATURED PROJECT
                    </span>

                    <h2 id="home-featured-title">
                        From idea to application.
                    </h2>
                </div>

                <span className="home-counter">
                    DEVELOPMENT / ANDROID
                </span>
            </div>

            <div className="home-featured">
                <div className="home-featured__content">
                    <span className="home-eyebrow">
                        A TOOL FOR FILMMAKERS
                    </span>

                    <h3>
                        Trailer
                        <br />
                        Planner<span>.</span>
                    </h3>

                    <p>
                        Break down a reference.
                        Plan the shots.
                        Build the scene.
                    </p>

                    <p className="home-featured__description">
                        An Android app that brings videos,
                        timelines and shot planning together —
                        from reference to reproduction.
                    </p>

                    <Link
                        className="home-link"
                        to="/development"
                    >
                        EXPLORE DEVELOPMENT
                        <span aria-hidden="true">↗</span>
                    </Link>
                </div>

                <figure className="home-featured__visual">
                    <span
                        className="home-featured__background-type"
                        aria-hidden="true"
                    >
                        PLAN.
                    </span>

                    <img
                        src="/images/development/TrailerPlanner.webp"
                        alt="TrailerPlanner app icon"
                        loading="lazy"
                    />

                    <figcaption>
                        TRAILERPLANNER / ANDROID APPLICATION
                    </figcaption>
                </figure>
            </div>
        </section>

        {/* SHORT ABOUT */}

        <section
            className="home-section home-section--divided"
            aria-labelledby="home-about-title"
        >
            <div className="home-about">
                <div className="home-about__heading">
                    <span className="home-eyebrow">
                        03 / BEHIND THE WORK
                    </span>

                    <h2 id="home-about-title">
                        Always
                        <br />
                        exploring<span>.</span>
                    </h2>
                </div>

                <div className="home-about__content">
                    <p className="home-about__lead">
                        A camera, a canvas
                        or a line of code.
                    </p>

                    <p>
                        I study Media Technology at the
                        Deggendorf Institute of Technology.
                        My work moves between photography,
                        film, design and development.
                    </p>

                    <p>
                        What connects it all is the curiosity
                        to try something, understand how it
                        works and make it my own.
                    </p>

                    <div className="home-about__links">
                        <Link
                            className="home-link"
                            to="/about"
                        >
                            MORE ABOUT ME
                            <span aria-hidden="true">↗</span>
                        </Link>

                        <Link
                            className="home-link"
                            to="/videography"
                        >
                            EXPLORE FILM WORK
                            <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* EXISTING NEWS COMPONENT */}

        <NewsFeed />
    </main>
);

export default Home;