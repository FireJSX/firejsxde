import React from 'react';
import '../assets/styles/main.scss';

type Feature = {
    title: string;
    description: string;
};

type Project = {
    id: string;
    number: string;
    title: string;
    category: string;
    description: string;
    image: string;
    imageAlt: string;
    featuresTitle: string;
    features: Feature[];
    download?: string;
};

const dinoArchives = [
    'dinorunner.z01',
    'dinorunner.z02',
    'dinorunner.zip',
];

const handleDinoDownload = () => {
    dinoArchives.forEach((fileName) => {
        const link = document.createElement('a');

        link.href = `/downloads/${fileName}`;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        link.remove();
    });
};

const trailerPlanner: Project = {
    id: 'trailerplanner',
    number: '01',
    title: 'TrailerPlanner',
    category: 'ANDROID / FILMMAKING',
    description:
        'An Android app for filmmakers. Break down reference videos, organise shots and scenes, and plan your next reproduction — frame by frame.',
    image: '/images/development/TrailerPlanner.webp',
    imageAlt: 'TrailerPlanner app icon',
    featuresTitle: 'Plan every frame.',
    download: '/downloads/TrailerPlanner.apk',
    features: [
        {
            title: 'Create & Edit Projects',
            description:
                'Add a new project or open and edit an existing one.',
        },
        {
            title: 'Store Multiple Projects',
            description:
                'Manage different projects easily.',
        },
        {
            title: 'Import Videos',
            description:
                'Quickly import videos from your phone.',
        },
        {
            title: 'Timeline Generation',
            description:
                'Instantly generate timelines from your imported video or build them manually.',
        },
        {
            title: 'Manual Timeline Frames',
            description:
                'Change a frame picture manually using an image from your phone.',
        },
        {
            title: 'Shot View',
            description:
                'Edit every frame with its location, roles, description and camera settings.',
        },
        {
            title: 'Scene View',
            description:
                'Create individual scenes and edit each one.',
        },
    ],
};

const otherProjects: Project[] = [
    {
        id: 'connectapp',
        number: '02',
        title: 'ConnectApp',
        category: 'ANDROID / CONTACT SHARING',
        description:
            'Your next connection starts with a scan. Create, save and share personal and professional contact profiles using QR codes.',
        image: '/images/development/ConnectApp.webp',
        imageAlt: 'ConnectApp app icon',
        featuresTitle: 'Scan. Share. Connect.',
        download: '/downloads/ConnectApp.apk',
        features: [
            {
                title: 'Create & Edit Profiles',
                description:
                    'Add personal and business contact details.',
            },
            {
                title: 'Store Multiple Profiles',
                description:
                    'Manage different contact profiles easily.',
            },
            {
                title: 'Import Contacts',
                description:
                    'Quickly import contacts from your phone book.',
            },
            {
                title: 'QR Code Generation',
                description:
                    'Instantly generate QR codes for easy profile sharing.',
            },
            {
                title: 'Scan & Connect',
                description:
                    'Scan QR codes to seamlessly save contacts.',
            },
            {
                title: 'Set Default Profile',
                description:
                    'Mark a default profile for quick sharing.',
            },
            {
                title: 'Sleek UI/UX',
                description:
                    'Modern and intuitive Material Design for a smooth experience.',
            },
        ],
    },
    {
        id: 'dinorunner',
        number: '03',
        title: 'DinoRunner',
        category: 'PYTHON / PYGAME / 2D GAME',
        description:
            'One more run. A 2D endless runner built with Pygame. Control your dino, avoid obstacles and chase the highest score possible.',
        image: '/images/development/dino-icon.webp',
        imageAlt: 'DinoRunner game icon',
        featuresTitle: 'How to play.',
        features: [
            {
                title: 'Start the Game',
                description: 'Press SPACE to begin.',
            },
            {
                title: 'Jump',
                description:
                    'Press SPACE to jump over obstacles.',
            },
            {
                title: 'Move',
                description: 'Press A/D to move your dino.',
            },
            {
                title: 'Pause',
                description:
                    'Press ESC to open the pause menu.',
            },
            {
                title: 'Quit',
                description:
                    'Press F12 or close the window.',
            },
        ],
    },
];

const ProjectFeatures = ({
                             project,
                         }: {
    project: Project;
}) => (
    <div className="development-features">
        <div className="development-features__heading">
            <span className="development-eyebrow">
                {project.id === 'dinorunner'
                    ? 'THE CONTROLS'
                    : 'THE FEATURES'}
            </span>

            <h3>{project.featuresTitle}</h3>
        </div>

        <ul className="development-features__list">
            {project.features.map((feature, index) => (
                <li key={feature.title}>
                    <span
                        className="development-features__number"
                        aria-hidden="true"
                    >
                        {String(index + 1).padStart(2, '0')}
                    </span>

                    <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

const ProjectDownload = ({
                             project,
                         }: {
    project: Project;
}) => {
    if (project.download) {
        return (
            <a
                className="development-action"
                href={project.download}
                download
            >
                DOWNLOAD APK
                <span aria-hidden="true">↓</span>
            </a>
        );
    }

    return (
        <div className="development-download">
            <button
                className="development-action"
                type="button"
                onClick={handleDinoDownload}
                aria-describedby="development-dino-note"
            >
                DOWNLOAD GAME
                <span aria-hidden="true">↓</span>
            </button>

            <div
                className="development-download__note"
                id="development-dino-note"
            >
                <p>
                    The game downloads as a split archive.
                    Keep all three files in the same folder,
                    then extract <strong>dinorunner.zip</strong>.
                    If prompted, allow multiple downloads.
                </p>
            </div>
        </div>
    );
};

const Development: React.FC = () => (
    <main className="development-page">
        {/* MAIN HERO */}

        <section
            className="development-hero"
            aria-labelledby="development-title"
        >
            <img
                className="development-hero__background"
                src="/images/development/background.webp"
                alt=""
            />

            <div className="development-hero__shade" />

            <div className="development-hero__content">
                <span className="development-eyebrow">
                    JONAS / DEVELOPMENT PORTFOLIO
                </span>

                <h1 id="development-title">
                    Development<span>.</span>
                </h1>

                <p>
                    Ideas. Code. Creation.
                    Applications and experiments built
                    to turn an idea into something real.
                </p>

                <a
                    className="development-action"
                    href="#development-featured"
                >
                    EXPLORE MY WORK
                    <span aria-hidden="true">↓</span>
                </a>
            </div>

            <span
                className="development-hero__side-label"
                aria-hidden="true"
            >
                SELECTED DEVELOPMENT
            </span>
        </section>

        {/* FEATURED PROJECT */}

        <section
            id="development-featured"
            className="development-section development-section--featured"
            aria-labelledby="development-featured-title"
        >
            <div className="development-section__heading">
                <div>
                    <span className="development-eyebrow">
                        01 / SELECTED WORK
                    </span>

                    <h2 id="development-featured-title">
                        Featured project.
                    </h2>
                </div>

                <span className="development-section__counter">
                    A CLOSER LOOK
                </span>
            </div>

            <article
                id={trailerPlanner.id}
                className="development-featured"
                aria-labelledby="trailerplanner-title"
            >
                <div className="development-featured__overview">
                    <div className="development-featured__content">
                        <span className="development-eyebrow">
                            {trailerPlanner.category}
                        </span>

                        <h3 id="trailerplanner-title">
                            {trailerPlanner.title}
                        </h3>

                        <p>{trailerPlanner.description}</p>

                        <ProjectDownload
                            project={trailerPlanner}
                        />
                    </div>

                    <figure className="development-featured__visual">
                        <img
                            src={trailerPlanner.image}
                            alt={trailerPlanner.imageAlt}
                            loading="lazy"
                        />

                        <figcaption>
                            FROM REFERENCE TO REPRODUCTION
                        </figcaption>
                    </figure>

                    <span
                        className="development-featured__index"
                        aria-hidden="true"
                    >
                        01 / 03
                    </span>
                </div>

                <ProjectFeatures project={trailerPlanner} />
            </article>
        </section>

        {/* MORE PROJECTS */}

        <section
            className="development-section development-section--projects"
            aria-labelledby="development-projects-title"
        >
            <div className="development-section__heading">
                <div>
                    <span className="development-eyebrow">
                        02 / MORE TO EXPLORE
                    </span>

                    <h2 id="development-projects-title">
                        Other projects.
                    </h2>
                </div>

                <p className="development-section__intro">
                    Different ideas. Different challenges.
                    The same curiosity to create.
                </p>
            </div>

            <div className="development-projects">
                {otherProjects.map((project) => (
                    <article
                        key={project.id}
                        id={project.id}
                        className="development-project"
                        aria-labelledby={`${project.id}-title`}
                    >
                        <div className="development-project__overview">
                            <figure className="development-project__visual">
                                <img
                                    src={project.image}
                                    alt={project.imageAlt}
                                    loading="lazy"
                                />

                                <figcaption>
                                    {project.category}
                                </figcaption>
                            </figure>

                            <div className="development-project__content">
                                <span className="development-eyebrow">
                                    {project.number} / {project.category}
                                </span>

                                <h3 id={`${project.id}-title`}>
                                    {project.title}
                                </h3>

                                <p>{project.description}</p>

                                <ProjectDownload project={project} />
                            </div>
                        </div>

                        <ProjectFeatures project={project} />
                    </article>
                ))}
            </div>
        </section>
    </main>
);

export default Development;