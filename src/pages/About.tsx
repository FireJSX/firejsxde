import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/main.scss';

const disciplines = [
    {
        number: '01',
        title: 'Design',
        description:
            'Visual identities, editorial layouts, illustrations and digital interfaces.',
        to: '/design',
    },
    {
        number: '02',
        title: 'Photography',
        description:
            'Places, people and passing moments. From city streets to live events.',
        to: '/photography',
    },
    {
        number: '03',
        title: 'Videography',
        description:
            'Short films, stop-motion, Unreal animations and the work behind the edit.',
        to: '/videography',
    },
    {
        number: '04',
        title: 'On Air',
        description:
            'Live moderation, radio production and streaming. Connecting with people in real time.',
        to: '/onair',
    },
    {
        number: '05',
        title: 'Development',
        description:
            'Applications, websites and experiments that bring creative ideas into code.',
        to: '/development',
    },
];

const skillGroups = [
    {
        number: '01',
        title: 'Visual creation',
        skills: [
            'Video production & editing',
            'Photography & visual storytelling',
            'Layout, typography & composition',
        ],
    },
    {
        number: '02',
        title: 'Technical exploration',
        skills: [
            'Web development with React & Vite',
            '3D software fundamentals',
            'Unreal Engine workflows',
        ],
    },
    {
        number: '03',
        title: 'Communication',
        skills: [
            'Live moderation & media presentation',
            'Creative marketing',
            'Content production',
        ],
    },
];

const About = () => (
    <main className="about-page">
        {/* INTRO */}

        <section
            className="about-hero"
            aria-labelledby="about-title"
        >
            <div className="about-hero__content">
                <span className="about-eyebrow">
                    JONAS / BEHIND THE WORK
                </span>

                <h1 id="about-title">
                    Hey, I'm
                    <br />
                    Jonas<span>.</span>
                </h1>

                <p className="about-hero__lead">
                    Somewhere between
                    <br />
                    creativity and technology.
                </p>

                <p className="about-hero__description">
                    I study Media Technology at the
                    Deggendorf Institute of Technology.
                    I make images, tell stories and build
                    things — on screen, behind the camera
                    and sometimes in front of a microphone.
                </p>

                <a
                    className="about-link"
                    href="#about-story"
                >
                    A LITTLE MORE ABOUT ME
                    <span aria-hidden="true">↓</span>
                </a>
            </div>

            <figure className="about-hero__portrait">
                <img
                    src="/images/about/me.webp"
                    alt="Portrait of Jonas"
                />

                <figcaption>
                    <span>JONAS</span>
                    <span>CREATING / EXPLORING / LEARNING</span>
                </figcaption>
            </figure>
        </section>

        {/* BACKGROUND */}

        <section
            id="about-story"
            className="about-section"
            aria-labelledby="about-story-title"
        >
            <div className="about-story">
                <div className="about-section-heading">
                    <span className="about-eyebrow">
                        01 / THE BACKGROUND
                    </span>

                    <h2 id="about-story-title">
                        It started
                        <br />
                        with curiosity.
                    </h2>
                </div>

                <div className="about-story__text">
                    <p className="about-story__lead">
                        Before these were university projects,
                        they were simply things I enjoyed doing.
                    </p>

                    <p>
                        Design, photography and video production
                        started as hobbies. During my Media
                        Technology studies, those interests
                        became practical work — with new tools,
                        shared projects and reasons to look
                        more closely at how things are made.
                    </p>

                    <p>
                        At THD, I've explored design fundamentals,
                        3D software and production workflows.
                        Much of what I've learned has come from
                        doing: working on film productions,
                        photographing events, creating marketing
                        content and taking on moderation.
                    </p>

                    <p>
                        I enjoy moving between these disciplines.
                        Each gives me a different way to approach
                        an idea and turn it into something
                        people can see, use or experience.
                    </p>

                    <div className="about-study">
                        <span className="about-eyebrow">
                            MY STUDIES
                        </span>
                        <strong>
                            Media Technology · B.Eng.
                        </strong>
                        <span>
                            Deggendorf Institute of Technology
                        </span>
                    </div>
                </div>
            </div>
        </section>

        {/* PORTFOLIO LINKS */}

        <section
            className="about-section"
            aria-labelledby="about-disciplines-title"
        >
            <div className="about-section-heading about-section-heading--wide">
                <div>
                    <span className="about-eyebrow">
                        02 / WHAT I DO
                    </span>

                    <h2 id="about-disciplines-title">
                        Different tools.
                        <br />
                        Shared curiosity.
                    </h2>
                </div>

                <p>
                    A camera, a canvas or a line of code.
                    The starting point changes.
                </p>
            </div>

            <div className="about-disciplines">
                {disciplines.map((discipline) => (
                    <Link
                        key={discipline.to}
                        className="about-discipline"
                        to={discipline.to}
                    >
                        <span
                            className="about-discipline__number"
                            aria-hidden="true"
                        >
                            {discipline.number}
                        </span>

                        <h3>{discipline.title}</h3>

                        <p>{discipline.description}</p>

                        <span
                            className="about-discipline__arrow"
                            aria-hidden="true"
                        >
                            ↗
                        </span>
                    </Link>
                ))}
            </div>
        </section>

        {/* EXPERIENCE */}

        <section
            className="about-section"
            aria-labelledby="about-experience-title"
        >
            <div className="about-section-heading">
                <span className="about-eyebrow">
                    03 / LEARNING BY DOING
                </span>

                <h2 id="about-experience-title">
                    Beyond the classroom.
                </h2>
            </div>

            <div className="about-experiences">
                <article className="about-experience">
                    <div className="about-experience__heading">
                        <span className="about-eyebrow">
                            FORMULA STUDENT / THD
                        </span>

                        <h3>Fast Forest</h3>

                        <span className="about-experience__role">
                            Marketing / Photography / Video
                        </span>
                    </div>

                    <div className="about-experience__text">
                        <p>
                            As part of the marketing team of
                            Fast Forest, THD's Formula Student
                            team, I created photographic and
                            video content for the team.
                        </p>

                        <p>
                            Working around real events and
                            projects gave me practical experience
                            in content production and visual
                            storytelling — with a team and
                            a shared purpose behind the work.
                        </p>
                    </div>
                </article>

                <article className="about-experience">
                    <div className="about-experience__heading">
                        <span className="about-eyebrow">
                            UNIVERSITY CINEMA / THD
                        </span>

                        <h3>Burning Cinema</h3>

                        <span className="about-experience__role">
                            Copywriting / Trailer Production
                        </span>
                    </div>

                    <div className="about-experience__text">
                        <p>
                            At THD's university cinema club,
                            I wrote and published the texts
                            announcing upcoming screenings.
                        </p>

                        <p>
                            Together with a fellow student,
                            I also started producing parody
                            trailers for some of the films
                            we screened — combining humour
                            with carefully produced video.
                        </p>

                        <div className="about-recognition">
                            <span className="about-eyebrow">
                                RECOGNITION
                            </span>

                            <p>
                                Our parody trailers received
                                an award from UniFilm for
                                their entertainment value
                                and production quality.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        {/* SKILLS */}

        <section
            className="about-section"
            aria-labelledby="about-skills-title"
        >
            <div className="about-section-heading">
                <span className="about-eyebrow">
                    04 / THE TOOLKIT
                </span>

                <h2 id="about-skills-title">
                    What I bring.
                </h2>
            </div>

            <div className="about-skills">
                {skillGroups.map((group) => (
                    <div
                        className="about-skill-group"
                        key={group.title}
                    >
                        <span className="about-eyebrow">
                            {group.number}
                        </span>

                        <h3>{group.title}</h3>

                        <ul>
                            {group.skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

        {/* OUTRO */}

        <section
            className="about-section about-section--outro"
            aria-labelledby="about-outro-title"
        >
            <span className="about-eyebrow">
                STILL EXPLORING
            </span>

            <h2 id="about-outro-title">
                More ideas.
                <br />
                More to make<span>.</span>
            </h2>

            <p>
                I'm especially interested in projects where
                creative production and technical work meet.
                Combining design, video and development
                is where I want to keep exploring.
            </p>

            <Link className="about-link" to="/design">
                EXPLORE MY PROJECTS
                <span aria-hidden="true">↗</span>
            </Link>
        </section>
    </main>
);

export default About;