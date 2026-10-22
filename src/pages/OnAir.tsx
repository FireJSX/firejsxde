
import React, { useState } from 'react';
import '../assets/styles/main.scss';

interface LiveProject {
    id: string;
    title: string;
    description: string;
    videoId: string;
    details: string[];
}

const liveProjects: LiveProject[] = [
    {
        id: 'comedy-night',
        title: 'Comedy Night',
        description:
            'I co-hosted a live event streamed on YouTube, featuring comedian Florian Simbeck.',
        videoId: 'o5hx7mIg6W0',
        details: [
            'Role: Host / Moderator',
            'Platform: YouTube Live',
            'Live Audience',
        ],
    },
    {
        id: 'hypnosis',
        title: 'Hypnosis',
        description:
            'I co-hosted a live event streamed on YouTube, covering a hypnosis performance.',
        videoId: 'KZKp9CMvEHk',
        details: [
            'Role: Host / Moderator',
            'Platform: YouTube Live',
            'Live Audience',
        ],
    },
];

const OnAir: React.FC = () => {
    const [twitchLoaded, setTwitchLoaded] = useState(false);
    const [activeVideos, setActiveVideos] = useState<string[]>([]);

    // Twitch needs the actual hostname as the parent parameter.
    // Works with localhost, firejsx.de and www.firejsx.de.
    const twitchParent = window.location.hostname;

    const twitchUrl =
        `https://player.twitch.tv/?channel=firejsx` +
        `&parent=${encodeURIComponent(twitchParent)}` +
        `&autoplay=false&muted=true`;

    const playVideo = (id: string) => {
        setActiveVideos((previous) =>
            previous.includes(id) ? previous : [...previous, id]
        );
    };

    return (
        <main className="onair-page">

            {/* MAIN HERO */}

            <section className="onair-hero">
                <img
                    className="onair-hero__background"
                    src="/images/onair/Banner.webp"
                    alt=""
                />

                <div className="onair-hero__shade" />

                <div className="onair-hero__content">
                    <span className="onair-eyebrow">
                        JONAS / LIVE & BROADCAST
                    </span>

                    <h1>
                        On Air<span>.</span>
                    </h1>

                    <p>
                        Live entertainment. Real moments.
                        Connecting with people on and off camera.
                    </p>

                    <a
                        href="#onair-twitch"
                        className="onair-hero__scroll"
                    >
                        EXPLORE ON AIR
                        <span>↓</span>
                    </a>
                </div>

                <span className="onair-hero__side-label">
                    STREAMING & MODERATION
                </span>
            </section>

            {/* TWITCH STREAM */}

            <section
                id="onair-twitch"
                className="onair-section"
            >
                <div className="onair-section__heading">
                    <div>
                        <span className="onair-eyebrow">
                            01 / LIVE STREAMING
                        </span>

                        <h2>Live on Twitch.</h2>
                    </div>

                    <span className="onair-section__counter">
                        GAMING & CONVERSATIONS
                    </span>
                </div>

                <div className="onair-feature">
                    <div className="onair-feature__info">
                        <span className="onair-eyebrow">
                            TWITCH / FIREJSX
                        </span>

                        <h3>Let's go live.</h3>

                        <p>
                            I stream gaming sessions, interesting
                            talks and much more. Tune in and
                            join the conversation!
                        </p>

                        <a
                            href="https://www.twitch.tv/firejsx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="onair-link"
                        >
                            VISIT MY TWITCH CHANNEL
                            <span>↗</span>
                        </a>
                    </div>

                    <div className="onair-feature__player">
                        {twitchLoaded ? (
                            <iframe
                                src={twitchUrl}
                                title="Firejsx Twitch Stream"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                            />
                        ) : (
                            <button
                                type="button"
                                className="onair-twitch-preview"
                                onClick={() => setTwitchLoaded(true)}
                                aria-label="Load Twitch stream"
                            >
                                <span className="onair-twitch-preview__tag">
                                    TWITCH / FIREJSX
                                </span>

                                <span className="onair-play">
                                    <span className="onair-play__triangle" />
                                </span>

                                <span className="onair-twitch-preview__label">
                                    LOAD STREAM
                                </span>
                            </button>
                        )}
                    </div>
                </div>

                <p className="onair-privacy-note">
                    Loading the stream connects to Twitch.
                </p>
            </section>

            {/* LIVE MODERATION */}

            <section className="onair-section onair-section--moderation">
                <div className="onair-section__heading">
                    <div>
                        <span className="onair-eyebrow">
                            02 / LIVE MODERATION
                        </span>

                        <h2>Behind the microphone.</h2>
                    </div>

                    <p className="onair-section__intro">
                        Hosting live events, entertaining audiences
                        and making every moment count.
                    </p>
                </div>

                <div className="onair-projects">
                    {liveProjects.map((project, index) => {
                        const isPlaying = activeVideos.includes(project.id);

                        return (
                            <article
                                className="onair-project"
                                key={project.id}
                            >
                                <div className="onair-project__heading">
                                    <span className="onair-project__number">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <div>
                                        <span className="onair-eyebrow">
                                            DOSCHAUHER.TV / LIVE EVENT
                                        </span>

                                        <h3>{project.title}</h3>
                                    </div>
                                </div>

                                <div className="onair-project__layout">
                                    <div className="onair-project__video">
                                        {isPlaying ? (
                                            <iframe
                                                src={`https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1&rel=0`}
                                                title={project.title}
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen
                                            />
                                        ) : (
                                            <button
                                                type="button"
                                                className="onair-video-preview"
                                                onClick={() => playVideo(project.id)}
                                                aria-label={`Play ${project.title}`}
                                            >
                                                <img
                                                    src={`https://i.ytimg.com/vi/${project.videoId}/hqdefault.jpg`}
                                                    alt=""
                                                    loading="lazy"
                                                />

                                                <span className="onair-play">
                                                    <span className="onair-play__triangle" />
                                                </span>

                                                <span className="onair-video-preview__label">
                                                    WATCH EVENT
                                                </span>
                                            </button>
                                        )}
                                    </div>

                                    <div className="onair-project__info">
                                        <p className="onair-project__description">
                                            {project.description}
                                        </p>

                                        <span className="onair-eyebrow">
                                            EVENT DETAILS
                                        </span>

                                        <ul>
                                            {project.details.map(
                                                (detail, detailIndex) => (
                                                    <li key={detailIndex}>
                                                        <span>
                                                            {String(detailIndex + 1).padStart(2, '0')}
                                                        </span>

                                                        <p>{detail}</p>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <p className="onair-privacy-note">
                    Playing an event video connects to YouTube.
                    Video previews are retrieved from YouTube.
                </p>
            </section>

            {/* OUTRO */}

            <section className="onair-outro">
                <span className="onair-eyebrow">
                    THE SHOW GOES ON
                </span>

                <h2>See you on air.</h2>

                <p>
                    From streaming to live moderation —
                    always looking forward to the next experience.
                </p>
            </section>
        </main>
    );
};

export default OnAir;
