import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/main.scss';

type Feature = { title: string; description: string };
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

// WINDOWS ARCHIVE START
const windowsParts = [
    {
        "name": "TrailerPlannerDesktop.zip.001",
        "size": 25165824
    },
    {
        "name": "TrailerPlannerDesktop.zip.002",
        "size": 22005522
    }
];

const loadWindowsArchive = async (
    signal: AbortSignal,
    onProgress: (percentage: number) => void
): Promise<Blob> => {
    const chunks: Blob[] = [];
    const total = windowsParts.reduce((sum, part) => sum + part.size, 0);
    let completed = 0;

    for (const part of windowsParts) {
        const response = await fetch(
            `/downloads/${part.name}?v=38c293fb`,
            { signal }
        );

        if (!response.ok) {
            throw new Error('The Windows download is currently unavailable. Please try again later.');
        }

        const blob = await response.blob();
        if (blob.size !== part.size) {
            throw new Error('The download was incomplete. Please try again.');
        }

        chunks.push(blob);
        completed += blob.size;
        onProgress(Math.round((completed / total) * 100));
    }

    return new Blob(chunks, { type: 'application/zip' });
};
// WINDOWS ARCHIVE END

const WindowsDownload: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState('');
    const controllerRef = useRef<AbortController | null>(null);

    useEffect(() => () => {
        controllerRef.current?.abort();
    }, []);

    const handleDownload = async () => {
        if (controllerRef.current) return;

        const controller = new AbortController();
        controllerRef.current = controller;
        setIsLoading(true);
        setProgress(0);
        setError('');

        try {
            const archive = await loadWindowsArchive(
                controller.signal,
                setProgress
            );
            if (controller.signal.aborted) return;

            const url = URL.createObjectURL(archive);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'TrailerPlannerDesktop.zip';
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.setTimeout(() => URL.revokeObjectURL(url), 60000);
        } catch (downloadError) {
            if (!controller.signal.aborted) {
                setError(downloadError instanceof Error
                    ? downloadError.message
                    : 'The download could not be prepared. Please try again.');
            }
        } finally {
            if (controllerRef.current === controller) {
                controllerRef.current = null;
            }
            if (!controller.signal.aborted) setIsLoading(false);
        }
    };

    return (
        <div className="development-windows-download">
            <button
                className="development-action"
                type="button"
                onClick={handleDownload}
                disabled={isLoading}
                aria-busy={isLoading}
                aria-describedby="trailerplanner-windows-note"
            >
                {isLoading ? 'PREPARING WINDOWS DOWNLOAD…' : 'DOWNLOAD FOR WINDOWS'}
                <span aria-hidden="true">{isLoading ? `${progress}%` : '↓'}</span>
            </button>
            <p className="development-download-status" role="status">
                {isLoading ? 'Preparing your ZIP file. Please keep this page open.' : ''}
            </p>
            {error && <p className="development-download-error" role="alert">{error}</p>}
        </div>
    );
};

// DINO ARCHIVE START
const dinoParts = [
    {
        "name": "dinorunner.zip.001",
        "size": 25165824
    },
    {
        "name": "dinorunner.zip.002",
        "size": 25165824
    },
    {
        "name": "dinorunner.zip.003",
        "size": 6696402
    }
];

const loadDinoArchive = async (
    signal: AbortSignal,
    onProgress: (percentage: number) => void
): Promise<Blob> => {
    const chunks: Blob[] = [];
    const total = dinoParts.reduce((sum, part) => sum + part.size, 0);
    let completed = 0;

    for (const part of dinoParts) {
        const response = await fetch(
            `/downloads/${part.name}?v=e92ad208`,
            { signal }
        );

        if (!response.ok) {
            throw new Error('The game download is currently unavailable. Please try again later.');
        }

        const blob = await response.blob();
        if (blob.size !== part.size) {
            throw new Error('The download was incomplete. Please try again.');
        }

        chunks.push(blob);
        completed += blob.size;
        onProgress(Math.round((completed / total) * 100));
    }

    return new Blob(chunks, { type: 'application/zip' });
};
// DINO ARCHIVE END

const DinoDownload: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState('');
    const controllerRef = useRef<AbortController | null>(null);

    useEffect(() => () => {
        controllerRef.current?.abort();
    }, []);

    const handleDownload = async () => {
        if (controllerRef.current) return;

        const controller = new AbortController();
        controllerRef.current = controller;
        setIsLoading(true);
        setProgress(0);
        setError('');

        try {
            const archive = await loadDinoArchive(
                controller.signal,
                setProgress
            );
            if (controller.signal.aborted) return;

            const url = URL.createObjectURL(archive);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'dinorunner.zip';
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.setTimeout(() => URL.revokeObjectURL(url), 60000);
        } catch (downloadError) {
            if (!controller.signal.aborted) {
                setError(downloadError instanceof Error
                    ? downloadError.message
                    : 'The download could not be prepared. Please try again.');
            }
        } finally {
            if (controllerRef.current === controller) {
                controllerRef.current = null;
            }
            if (!controller.signal.aborted) setIsLoading(false);
        }
    };

    return (
        <div className="development-windows-download">
            <button
                className="development-action"
                type="button"
                onClick={handleDownload}
                disabled={isLoading}
                aria-busy={isLoading}
                aria-describedby="development-dino-note"
            >
                {isLoading ? 'PREPARING GAME DOWNLOAD…' : 'DOWNLOAD GAME'}
                <span aria-hidden="true">{isLoading ? `${progress}%` : '↓'}</span>
            </button>
            <p className="development-download-status" role="status">
                {isLoading ? 'Preparing your ZIP file. Please keep this page open.' : ''}
            </p>
            {error && <p className="development-download-error" role="alert">{error}</p>}
        </div>
    );
};

const trailerPlanner: Project = {
    id: 'trailerplanner',
    number: '01',
    title: 'TrailerPlanner',
    category: 'ANDROID / WINDOWS / FILMMAKING',
    description: 'An app for filmmakers, available on Android and Windows. Break down reference videos, organise shots and scenes, and plan your next reproduction — frame by frame.',
    image: '/images/development/TrailerPlanner.webp',
    imageAlt: 'TrailerPlanner app icon',
    featuresTitle: 'Plan every frame.',
    download: '/downloads/TrailerPlanner.apk',
    features: [
        { title: 'Create & Edit Projects', description: 'Add a new project or open and edit an existing one.' },
        { title: 'Store Multiple Projects', description: 'Manage different projects easily.' },
        { title: 'Import Videos', description: 'Quickly import videos from your phone.' },
        { title: 'Timeline Generation', description: 'Instantly generate timelines from your imported video or build them manually.' },
        { title: 'Manual Timeline Frames', description: 'Change a frame picture manually using an image from your phone.' },
        { title: 'Shot View', description: 'Edit every frame with its location, roles, description and camera settings.' },
        { title: 'Scene View', description: 'Create individual scenes and edit each one.' },
    ],
};

const otherProjects: Project[] = [
    {
        id: 'connectapp', number: '02', title: 'ConnectApp',
        category: 'ANDROID / CONTACT SHARING',
        description: 'Your next connection starts with a scan. Create, save and share personal and professional contact profiles using QR codes.',
        image: '/images/development/ConnectApp.webp', imageAlt: 'ConnectApp app icon',
        featuresTitle: 'Scan. Share. Connect.', download: '/downloads/ConnectApp.apk',
        features: [
            { title: 'Create & Edit Profiles', description: 'Add personal and business contact details.' },
            { title: 'Store Multiple Profiles', description: 'Manage different contact profiles easily.' },
            { title: 'Import Contacts', description: 'Quickly import contacts from your phone book.' },
            { title: 'QR Code Generation', description: 'Instantly generate QR codes for easy profile sharing.' },
            { title: 'Scan & Connect', description: 'Scan QR codes to seamlessly save contacts.' },
            { title: 'Set Default Profile', description: 'Mark a default profile for quick sharing.' },
            { title: 'Sleek UI/UX', description: 'Modern and intuitive Material Design for a smooth experience.' },
        ],
    },
    {
        id: 'dinorunner', number: '03', title: 'DinoRunner',
        category: 'PYTHON / PYGAME / 2D GAME',
        description: 'One more run. A 2D endless runner built with Pygame. Control your dino, avoid obstacles and chase the highest score possible.',
        image: '/images/development/dino-icon.webp', imageAlt: 'DinoRunner game icon',
        featuresTitle: 'How to play.',
        features: [
            { title: 'Start the Game', description: 'Press SPACE to begin.' },
            { title: 'Jump', description: 'Press SPACE to jump over obstacles.' },
            { title: 'Move', description: 'Press A/D to move your dino.' },
            { title: 'Pause', description: 'Press ESC to open the pause menu.' },
            { title: 'Quit', description: 'Press F12 or close the window.' },
        ],
    },
];

const ProjectFeatures = ({ project }: { project: Project }) => (
    <div className="development-features">
        <div className="development-features__heading">
            <span className="development-eyebrow">
                {project.id === 'dinorunner' ? 'THE CONTROLS' : 'THE FEATURES'}
            </span>
            <h3>{project.featuresTitle}</h3>
            {project.id === 'trailerplanner' && (
                <p className="development-feature-scope">Android app features</p>
            )}
        </div>
        <ul className="development-features__list">
            {project.features.map((feature, index) => (
                <li key={feature.title}>
                    <span className="development-features__number" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <div><h4>{feature.title}</h4><p>{feature.description}</p></div>
                </li>
            ))}
        </ul>
    </div>
);

const ProjectDownload = ({ project }: { project: Project }) => {
    if (project.id === 'trailerplanner') {
        return (
            <div className="development-download">
                <div className="development-platform-downloads">
                    <a className="development-action" href={project.download} download>
                        DOWNLOAD FOR ANDROID <span aria-hidden="true">↓</span>
                    </a>
                    <WindowsDownload />
                </div>
                <div className="development-download__note" id="trailerplanner-windows-note">
                    <p>Windows: Download the ZIP, extract the entire folder, then launch <strong>TrailerPlanner.exe</strong> inside the TrailerPlanner folder.</p>
                </div>
            </div>
        );
    }

    if (project.download) {
        return <a className="development-action" href={project.download} download>
            DOWNLOAD APK <span aria-hidden="true">↓</span>
        </a>;
    }

    return (
        <div className="development-download">
            <DinoDownload />
            <div className="development-download__note" id="development-dino-note">
                <p>Download the ZIP, extract it, then launch <strong>dinorunner.exe</strong>. Please keep this page open while your download is being prepared.</p>
            </div>
        </div>
    );
};

const Development: React.FC = () => (
    <main className="development-page">
        <section className="development-hero" aria-labelledby="development-title">
            <img className="development-hero__background" src="/images/development/background.webp" alt="" />
            <div className="development-hero__shade" />
            <div className="development-hero__content">
                <span className="development-eyebrow">JONAS / DEVELOPMENT PORTFOLIO</span>
                <h1 id="development-title">Development<span>.</span></h1>
                <p>Ideas. Code. Creation. Applications and experiments built to turn an idea into something real.</p>
                <a className="development-action" href="#development-featured">EXPLORE MY WORK <span aria-hidden="true">↓</span></a>
            </div>
            <span className="development-hero__side-label" aria-hidden="true">SELECTED DEVELOPMENT</span>
        </section>

        <section id="development-featured" className="development-section development-section--featured" aria-labelledby="development-featured-title">
            <div className="development-section__heading">
                <div><span className="development-eyebrow">01 / SELECTED WORK</span><h2 id="development-featured-title">Featured project.</h2></div>
                <span className="development-section__counter">A CLOSER LOOK</span>
            </div>
            <article id={trailerPlanner.id} className="development-featured" aria-labelledby="trailerplanner-title">
                <div className="development-featured__overview">
                    <div className="development-featured__content">
                        <span className="development-eyebrow">{trailerPlanner.category}</span>
                        <h3 id="trailerplanner-title">{trailerPlanner.title}</h3>
                        <p>{trailerPlanner.description}</p>
                        <ProjectDownload project={trailerPlanner} />
                    </div>
                    <figure className="development-featured__visual">
                        <img src={trailerPlanner.image} alt={trailerPlanner.imageAlt} loading="lazy" />
                        <figcaption>FROM REFERENCE TO REPRODUCTION</figcaption>
                    </figure>
                    <span className="development-featured__index" aria-hidden="true">01 / 03</span>
                </div>
                <ProjectFeatures project={trailerPlanner} />
            </article>
        </section>

        <section className="development-section development-section--projects" aria-labelledby="development-projects-title">
            <div className="development-section__heading">
                <div><span className="development-eyebrow">02 / MORE TO EXPLORE</span><h2 id="development-projects-title">Other projects.</h2></div>
                <p className="development-section__intro">Different ideas. Different challenges. The same curiosity to create.</p>
            </div>
            <div className="development-projects">
                {otherProjects.map((project) => (
                    <article key={project.id} id={project.id} className="development-project" aria-labelledby={`${project.id}-title`}>
                        <div className="development-project__overview">
                            <figure className="development-project__visual">
                                <img src={project.image} alt={project.imageAlt} loading="lazy" />
                                <figcaption>{project.category}</figcaption>
                            </figure>
                            <div className="development-project__content">
                                <span className="development-eyebrow">{project.number} / {project.category}</span>
                                <h3 id={`${project.id}-title`}>{project.title}</h3>
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
