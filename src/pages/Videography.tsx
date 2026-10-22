
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../assets/styles/main.scss';

interface VideoProject {
    id: string;
    title: string;
    description: string;
    details: string[];
    url: string;
    vertical: boolean;
    category: string;
    featured?: boolean;
}

const videos: VideoProject[] = [
    {
        id: '21-degg-street',
        title: 'Trailer-Parody: 21 Degg Street',
        description:
            'In collaboration with a fellow student I produced this trailer as a marketing placement',
        details: ['Regie', 'Postproduction', 'Screenplay'],
        url: 'https://www.youtube.com/embed/M-xdlzS1GNo',
        vertical: false,
        category: 'TRAILER PARODY',
        featured: true,
    },
    {
        id: 'totpool',
        title: 'Trailer-Parody: Totpool',
        description:
            'In collaboration with a fellow student I produced this trailer as a marketing placement',
        details: ['Regie', 'Postproduction', 'Screenplay'],
        url: 'https://www.youtube.com/embed/K2dTNKe0aC4',
        vertical: false,
        category: 'TRAILER PARODY',
    },
    {
        id: 'der-groesste-showmann',
        title: 'Trailer-Parody: Der groesste Showmann',
        description:
            'In collaboration with a fellow student I produced this trailer as a marketing placement',
        details: ['Regie', 'Postproduction', 'Screenplay'],
        url: 'https://www.youtube.com/embed/thyGiP0ZxJo',
        vertical: false,
        category: 'TRAILER PARODY',
    },
    {
        id: 'bob-advertisement',
        title: '3D Advertisement - Mediadesign 2',
        description:
            "'B.O.B. - Big Ocean B(u)oy' – a thoughtfully conceived fictional brand with a marketing strategy.",
        details: [
            'Task: Create a C2C Product and advertise it',
            'Focus: C2C, marketing, brand design',
            'Role: Idea, editing, 3D-Modelling, animation, Sound-Design',
        ],
        url: 'https://www.youtube.com/embed/ow8CdcC90Bg',
        vertical: false,
        category: '3D & MOTION DESIGN',
    },
    {
        id: 'fast-forest-recruiting',
        title: 'Fast Forest Recruiting Intro',
        description:
            'This intro was the first part of our recruiting presentation.',
        details: [
            'Task: Informative and catchy intro to our presentation',
            'Focus: Informations, team, emotions, fun',
            'Role: Editing, camera, post-production, idea',
        ],
        url: 'https://www.youtube.com/embed/DtW8utpbVlI',
        vertical: false,
        category: 'PROMOTIONAL FILM',
    },
    {
        id: 'the-scheining',
        title: 'Trailer-Parody: The Scheining',
        description:
            'In collaboration with a fellow student I produced this trailer as a marketing placement',
        details: ['Regie', 'Storytelling', 'Screenplay'],
        url: 'https://www.youtube.com/embed/3NVigI59R_8',
        vertical: false,
        category: 'TRAILER PARODY',
    },
    {
        id: 'hochschul-musical-3',
        title: 'Trailer-Parody: Hochschul Musical 3',
        description:
            'In collaboration with a fellow student I produced this trailer as a marketing placement',
        details: ['Regie', 'Storytelling', 'Screenplay'],
        url: 'https://www.youtube.com/embed/kT_u2mJszzw',
        vertical: false,
        category: 'TRAILER PARODY',
    },
    {
        id: 'subaru-360',
        title: '3D Modeling: Subaru 360',
        description:
            'A realistic 3D model of the 1958 Subaru 360 – including camera animation.',
        details: [
            'Modeling in 3DS Max',
            'Animation & camera movement',
        ],
        url: 'https://www.youtube.com/embed/JiVVNME7nx4',
        vertical: false,
        category: '3D & ANIMATION',
    },
    {
        id: 'city-dragon',
        title: 'City Dragon (Unreal Engine)',
        description:
            'My first self-made animation in Unreal Engine.',
        details: [
            'Unreal Sequencer',
            'Vertical format (9:16)',
            'Introduction to VFX & animation',
        ],
        url: 'https://www.youtube.com/embed/vFsmsbbMJKE',
        vertical: true,
        category: '3D & ANIMATION',
    },
    {
        id: 'a-shot-of-nature',
        title: 'A Shot of Nature (Stop Motion)',
        description:
            'A humorous stop-motion film about cake competitions – our interpretation of the Olympics.',
        details: [
            'Frame-by-frame animation with DSLR',
            'Self-made set design & props',
            'Adobe After Effects & Audition',
        ],
        url: 'https://www.youtube.com/embed/_AslhtH-BpA',
        vertical: false,
        category: 'STOP MOTION',
    },
    {
        id: 'slip-up',
        title: 'Semester Film – 1st Semester',
        description:
            "'Slip Up' – completely without dialogue – shows the power of visual storytelling.",
        details: [
            'Task: Film without speech',
            'Focus: Emotions, facial expressions, editing',
            'Role: Screenplay, camera, lighting, editing',
        ],
        url: 'https://www.youtube.com/embed/cXw2elejLPc',
        vertical: false,
        category: 'SHORT FILM',
    },
];

// --------------------------------------------------
// Helpers
// --------------------------------------------------

const getYouTubeId = (url: string): string => {
    const match = url.match(/\/embed\/([^?&/]+)/);
    return match ? match[1] : '';
};

const getThumbnail = (video: VideoProject): string => {
    const id = getYouTubeId(video.url);
    return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
};

const getEmbedUrl = (video: VideoProject): string => {
    const id = getYouTubeId(video.url);

    return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
};

const featuredVideo = videos.find((video) => video.featured);

const otherVideos = videos.filter((video) => !video.featured);

// --------------------------------------------------
// Video Card
// --------------------------------------------------

interface VideoCardProps {
    video: VideoProject;
    index: number;
    onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
                                                 video,
                                                 index,
                                                 onClick,
                                             }) => {
    return (
        <button
            type="button"
            className="videography-card"
            onClick={onClick}
            aria-label={`Explore ${video.title}`}
        >
            <div className="videography-card__image">
                <img
                    src={getThumbnail(video)}
                    alt={video.title}
                    loading="lazy"
                    decoding="async"
                />

                <span className="videography-card__category">
                    {video.category}
                </span>

                <span className="videography-card__arrow">
                    ↗
                </span>

                <div className="videography-card__overlay">
                    <span>EXPLORE PROJECT</span>
                </div>
            </div>

            <div className="videography-card__details">
                <span className="videography-card__number">
                    {String(index).padStart(2, '0')}
                </span>

                <div className="videography-card__text">
                    <h3>{video.title}</h3>
                    <p>{video.category}</p>
                </div>
            </div>
        </button>
    );
};

// --------------------------------------------------
// Videography Page
// --------------------------------------------------

const Videography: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [playerActive, setPlayerActive] = useState(false);

    const projectId = searchParams.get('project');

    const activeProject =
        videos.find((video) => video.id === projectId) ?? null;

    const openProject = (id: string) => {
        setPlayerActive(false);
        setSearchParams({ project: id });
    };

    const closeProject = () => {
        setPlayerActive(false);
        setSearchParams({});
    };

    useEffect(() => {
        setPlayerActive(false);

        window.scrollTo({
            top: 0,
            behavior: 'auto',
        });
    }, [projectId]);

    return (
        <main className="videography-page">
            {activeProject ? (
                <>
                    {/* PROJECT HERO */}

                    <section className="videography-project-hero">
                        <img
                            src={getThumbnail(activeProject)}
                            alt=""
                            className="videography-project-hero__background"
                        />

                        <div className="videography-project-hero__shade" />

                        <div className="videography-project-hero__content">
                            <button
                                type="button"
                                className="videography-back"
                                onClick={closeProject}
                            >
                                ← ALL VIDEOGRAPHY
                            </button>

                            <div className="videography-project-hero__heading">
                                <span className="videography-eyebrow">
                                    {activeProject.category}
                                </span>

                                <h1>{activeProject.title}</h1>

                                <p>{activeProject.description}</p>
                            </div>
                        </div>
                    </section>

                    {/* VIDEO PLAYER */}

                    <section className="videography-section videography-section--project">
                        <div className="videography-section__heading">
                            <div>
                                <span className="videography-eyebrow">
                                    01 / WATCH THE FILM
                                </span>

                                <h2>The film.</h2>
                            </div>
                        </div>

                        <div
                            className={`videography-player ${
                                activeProject.vertical
                                    ? 'videography-player--vertical'
                                    : ''
                            }`}
                        >
                            {playerActive ? (
                                <iframe
                                    key={activeProject.id}
                                    src={getEmbedUrl(activeProject)}
                                    title={activeProject.title}
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            ) : (
                                <button
                                    type="button"
                                    className="videography-player__preview"
                                    onClick={() => setPlayerActive(true)}
                                    aria-label={`Play ${activeProject.title}`}
                                >
                                    <img
                                        src={getThumbnail(activeProject)}
                                        alt=""
                                    />

                                    <span className="videography-player__play">
                                        <span className="videography-player__triangle" />
                                    </span>

                                    <span className="videography-player__label">
                                        PLAY FILM
                                    </span>
                                </button>
                            )}
                        </div>

                        <p className="videography-player__notice">
                            Playing this video connects to YouTube.
                        </p>
                    </section>

                    {/* PROJECT INFORMATION */}

                    <section className="videography-section videography-section--information">
                        <div className="videography-project-info">
                            <div className="videography-project-info__intro">
                                <span className="videography-eyebrow">
                                    02 / BEHIND THE PROJECT
                                </span>

                                <h2>Behind the scenes.</h2>

                                <p>{activeProject.description}</p>
                            </div>

                            <div className="videography-project-info__details">
                                <span className="videography-eyebrow">
                                    PROJECT DETAILS
                                </span>

                                <ul>
                                    {activeProject.details.map(
                                        (detail, index) => (
                                            <li key={index}>
                                                <span>
                                                    {String(index + 1).padStart(
                                                        2,
                                                        '0'
                                                    )}
                                                </span>

                                                <p>{detail}</p>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="videography-bottom-link"
                            onClick={closeProject}
                        >
                            ← BACK TO ALL PROJECTS
                        </button>
                    </section>
                </>
            ) : (
                <>
                    {/* MAIN HERO */}

                    <section className="videography-hero">
                        <img
                            className="videography-hero__background"
                            src="/images/videography/hero.webp"
                            alt=""
                        />

                        <div className="videography-hero__shade" />

                        <div className="videography-hero__content">
                            <span className="videography-eyebrow">
                                JONAS / VISUAL PORTFOLIO
                            </span>

                            <h1>
                                Videography<span>.</span>
                            </h1>

                            <p>
                                Moving images. Creative ideas.
                                Stories brought to life.
                            </p>

                            <a
                                href="#featured-video"
                                className="videography-hero__scroll"
                            >
                                EXPLORE MY FILMS
                                <span>↓</span>
                            </a>
                        </div>

                        <span className="videography-hero__side-label">
                            SELECTED FILM PROJECTS
                        </span>
                    </section>

                    {/* FEATURED PROJECT */}

                    {featuredVideo && (
                        <section
                            id="featured-video"
                            className="videography-section videography-section--featured"
                        >
                            <div className="videography-section__heading">
                                <div>
                                    <span className="videography-eyebrow">
                                        01 / SELECTED WORK
                                    </span>

                                    <h2>Featured film.</h2>
                                </div>

                                <span className="videography-section__counter">
                                    A CLOSER LOOK
                                </span>
                            </div>

                            <button
                                type="button"
                                className="videography-featured"
                                onClick={() =>
                                    openProject(featuredVideo.id)
                                }
                            >
                                <img
                                    src={getThumbnail(featuredVideo)}
                                    alt={featuredVideo.title}
                                />

                                <div className="videography-featured__shade" />

                                <div className="videography-featured__content">
                                    <span className="videography-eyebrow">
                                        FEATURED VIDEO PROJECT
                                    </span>

                                    <h3>{featuredVideo.title}</h3>

                                    <p>{featuredVideo.description}</p>

                                    <span className="videography-featured__action">
                                        EXPLORE PROJECT
                                        <span>↗</span>
                                    </span>
                                </div>

                                <span className="videography-featured__index">
                                    01 / {String(videos.length).padStart(2, '0')}
                                </span>
                            </button>
                        </section>
                    )}

                    {/* PROJECT COLLECTION */}

                    <section className="videography-section">
                        <div className="videography-section__heading">
                            <div>
                                <span className="videography-eyebrow">
                                    02 / COLLECTION
                                </span>

                                <h2>Selected projects.</h2>
                            </div>

                            <p className="videography-section__intro">
                                From short films and parodies to
                                animation, advertising and motion design.
                            </p>
                        </div>

                        <div className="videography-grid">
                            {otherVideos.map((video, index) => (
                                <VideoCard
                                    key={video.id}
                                    video={video}
                                    index={index + 2}
                                    onClick={() => openProject(video.id)}
                                />
                            ))}
                        </div>
                    </section>

                    {/* END NOTE */}

                    <section className="videography-section videography-section--outro">
                        <span className="videography-eyebrow">
                            MORE TO COME
                        </span>

                        <h2>
                            Every frame
                            <br />
                            tells a story.
                        </h2>

                        <p>
                            An evolving collection of filmmaking,
                            animation and creative experiments.
                        </p>
                    </section>
                </>
            )}
        </main>
    );
};

export default Videography;
