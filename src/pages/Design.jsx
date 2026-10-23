import React, {
    useEffect,
    useRef,
    useState,
} from 'react';

import '../assets/styles/main.scss';

// --------------------------------------------------
// Project data
// --------------------------------------------------

const createImages = (folder, count, label) =>
    Array.from({ length: count }, (_, index) => ({
        src: `/images/design/${folder}/${String(index + 1).padStart(2, '0')}.webp`,
        alt: `${label} — view ${index + 1}`,
    }));

const projects = [
    {
        id: 'apple-glasses',
        title: 'Apple Glasses',
        category: 'PRODUCT CONCEPT / ILLUSTRATION',
        description:
            'An exploration of wearable technology. A camera-equipped pair of glasses, developed as a university product concept for the Apple brand.',
        introduction:
            'The assignment was to develop a new product for an existing brand. Together with Emelie Zellner, I explored a pair of smart glasses and how its camera, audio components and supporting accessories could form a coherent product concept.',
        contribution:
            'My contribution focused on the Illustrator artwork for the camera lens and temple. The side view was developed together.',
        credits:
            'University group project with Emelie Zellner.',
        note:
            'Independent university concept. Not an official Apple product or commissioned project.',
        tools: 'Adobe Illustrator / Product Visualisation',
        cover: '/images/design/apple-glasses/cover.webp',
        coverAlt: 'Exploded camera lens illustration for Apple Glasses',
        galleryTitle: 'Inside the concept.',
        images: createImages(
            'apple-glasses',
            9,
            'Apple Glasses concept presentation'
        ),
    },
    {
        id: 'who-i-am',
        title: 'Who I Am',
        category: 'EDITORIAL / PRINT DESIGN',
        description:
            'A personal story that unfolds. A self-portrait told through typography, photographs and a folding concept.',
        introduction:
            'This personal flyer follows a journey of change and self-discovery. Self-portraits on the outside evolve as the flyer opens, while an extended timeline connects the experiences on the inside.',
        contribution:
            'I developed the layout and folding concept, combining my own photographs, illustrations and earlier visual work. Red graphic elements and a continuous timeline connect the different stages.',
        credits: 'Individual university project.',
        tools: 'Layout / Typography / Photography / Folding Concept',
        cover: '/images/design/who-i-am/01.webp',
        coverAlt: 'Who I Am flyer cover with portrait and red graphic elements',
        galleryTitle: 'A story that unfolds.',
        images: [
            ...createImages(
                'who-i-am',
                5,
                'Who I Am flyer'
            ),
            {
                src: '/images/design/folding-concept/02.webp',
                alt: 'Image sequence explaining the flyer folding concept',
            },
        ],
    },
    {
        id: 'russian-rumble',
        title: 'Russian Rumble',
        category: 'ILLUSTRATION / VISUAL STORYTELLING',
        description:
            'A satirical comic exploring justice through a deliberate reversal of familiar roles.',
        introduction:
            'Created around Article 8 of the Universal Declaration of Human Rights: the right to an effective remedy. The comic deliberately reverses the roles of Putin and Navalny as a satirical device.',
        contribution:
            'I created all illustrations, the page layouts and the hand-drawn speech bubbles. Leon Schlanke transferred my layouts and artwork into Adobe InDesign.',
        credits:
            'Illustration & Layout: Jonas Vogel · Adobe InDesign Implementation: Leon Schlanke',
        note:
            'Political satire. The reversed character portrayals are fictional and form part of the concept.',
        tools: 'Illustration / Page Layout / Adobe InDesign',
        cover: '/images/design/russian-rumble/02.webp',
        coverAlt: 'Illustrated pages from the Russian Rumble comic',
        galleryTitle: 'Read the comic.',
        images: createImages(
            'russian-rumble',
            6,
            'Russian Rumble — spread'
        ),
    },
    {
        id: 'chefchen',
        title: 'Chefchen',
        category: 'UI / UX / INTERACTIVE PROTOTYPE',
        description:
            'An app concept brought to life in Figma. Explore its screens and try the swipe interaction.',
        introduction:
            'Chefchen is a university app design project developed in Figma. The prototype connects the interface screens into an interactive experience, including a swipe interaction.',
        contribution:
            'The project explores interface design and how a user moves through the app. You can try the prototype below.',
        credits: 'University project.',
        tools: 'Figma / Interface Design / Prototyping',
        galleryTitle: 'Try it yourself.',
        images: [],
    },
];

const featuredProject = projects[0];

const earlyCategories = [
    {
        id: 'banner',
        title: 'Banners',
        count: 6,
        prefix: 'banner',
    },
    {
        id: 'thumbnail',
        title: 'Thumbnails',
        count: 5,
        prefix: 'thumbnail',
    },
    {
        id: 'skinrender',
        title: '3D Renders',
        count: 31,
        prefix: 'skinrender',
    },
];

const figmaEmbed =
    'https://embed.figma.com/proto/ThAFdElJrWgA38bzHyMseX/md1ss25t10-Chefchen?node-id=88-3106&starting-point-node-id=1%3A146&embed-host=share';

const figmaLink =
    'https://www.figma.com/proto/ThAFdElJrWgA38bzHyMseX/md1ss25t10-Chefchen?node-id=88-3106&starting-point-node-id=1%3A146';

// --------------------------------------------------
// Component
// --------------------------------------------------

const Design = () => {
    const [activeProjectId, setActiveProjectId] = useState(null);
    const [earlyCategory, setEarlyCategory] = useState('banner');
    const [prototypeLoaded, setPrototypeLoaded] = useState(false);
    const [lightbox, setLightbox] = useState(null);

    const projectHeadingRef = useRef(null);
    const lightboxRef = useRef(null);
    const lightboxCloseRef = useRef(null);

    const projectTriggerRef = useRef(null);
    const lightboxTriggerRef = useRef(null);
    const overviewScrollRef = useRef(0);
    const restoreOverviewRef = useRef(false);
    const touchStartRef = useRef(null);

    const activeProject = projects.find(
        (project) => project.id === activeProjectId
    );

    const selectedCategory = earlyCategories.find(
        (category) => category.id === earlyCategory
    );

    const earlyImages = Array.from(
        { length: selectedCategory.count },
        (_, index) => ({
            src: `/images/gallery/${selectedCategory.id}/${selectedCategory.prefix}${index + 1}.webp`,
            alt: `${selectedCategory.title} — early work ${index + 1}`,
        })
    );

    const openProject = (project, event) => {
        projectTriggerRef.current = event.currentTarget;
        overviewScrollRef.current = window.scrollY;

        setPrototypeLoaded(false);
        setActiveProjectId(project.id);
    };

    const closeProject = () => {
        restoreOverviewRef.current = true;
        setPrototypeLoaded(false);
        setActiveProjectId(null);
    };

    useEffect(() => {
        if (activeProjectId) {
            window.scrollTo({ top: 0, behavior: 'instant' });
            projectHeadingRef.current?.focus({
                preventScroll: true,
            });
        } else if (restoreOverviewRef.current) {
            restoreOverviewRef.current = false;

            window.scrollTo({
                top: overviewScrollRef.current,
                behavior: 'instant',
            });

            projectTriggerRef.current?.focus({
                preventScroll: true,
            });
        }
    }, [activeProjectId]);

    const openLightbox = (images, index, event) => {
        lightboxTriggerRef.current = event.currentTarget;
        setLightbox({ images, index });
    };

    const closeLightbox = () => {
        setLightbox(null);
        touchStartRef.current = null;

        lightboxTriggerRef.current?.focus({
            preventScroll: true,
        });
    };

    const navigateLightbox = (direction) => {
        setLightbox((current) => {
            if (!current) return current;

            return {
                ...current,
                index:
                    (current.index +
                        direction +
                        current.images.length) %
                    current.images.length,
            };
        });
    };

    const isLightboxOpen = Boolean(lightbox);

    useEffect(() => {
        if (!isLightboxOpen) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        lightboxCloseRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeLightbox();
            }

            if (event.key === 'ArrowRight') {
                event.preventDefault();
                navigateLightbox(1);
            }

            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                navigateLightbox(-1);
            }

            if (event.key === 'Tab') {
                const buttons =
                    lightboxRef.current?.querySelectorAll(
                        'button:not(:disabled)'
                    );

                if (!buttons?.length) return;

                const first = buttons[0];
                const last = buttons[buttons.length - 1];

                if (
                    event.shiftKey &&
                    document.activeElement === first
                ) {
                    event.preventDefault();
                    last.focus();
                } else if (
                    !event.shiftKey &&
                    document.activeElement === last
                ) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener(
                'keydown',
                handleKeyDown
            );
        };
    }, [isLightboxOpen]);

    const renderGallery = (images, extraClass = '') => (
        <div className={`design-gallery ${extraClass}`}>
            {images.map((image, index) => (
                <button
                    key={image.src}
                    type="button"
                    className="design-gallery__item"
                    onClick={(event) =>
                        openLightbox(images, index, event)
                    }
                    aria-label={`Enlarge ${image.alt}`}
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                    />

                    <span
                        className="design-gallery__overlay"
                        aria-hidden="true"
                    >
                        <span>
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>VIEW ↗</span>
                    </span>
                </button>
            ))}
        </div>
    );

    return (
        <main className="design-page">
            {activeProject ? (
                <>
                    {/* PROJECT HEADER */}

                    <section
                        className={`design-project-hero ${
                            activeProject.id === 'chefchen'
                                ? 'design-project-hero--chefchen'
                                : ''
                        }`}
                    >
                        <div className="design-project-hero__inner">
                            <button
                                type="button"
                                className="design-link"
                                onClick={closeProject}
                            >
                                ← ALL DESIGN
                            </button>

                            <div className="design-project-hero__heading">
                                <span className="design-eyebrow">
                                    {activeProject.category}
                                </span>

                                <h1
                                    ref={projectHeadingRef}
                                    tabIndex={-1}
                                >
                                    {activeProject.title}
                                    <span>.</span>
                                </h1>

                                <p>{activeProject.description}</p>
                            </div>
                        </div>

                        {activeProject.cover && (
                            <div className="design-project-hero__visual">
                                <img
                                    src={activeProject.cover}
                                    alt={activeProject.coverAlt}
                                />
                            </div>
                        )}
                    </section>

                    {/* PROJECT CONTEXT */}

                    <section className="design-section">
                        <div className="design-project-info">
                            <div>
                                <span className="design-eyebrow">
                                    THE PROJECT
                                </span>
                                <h2>Behind the design.</h2>
                            </div>

                            <div className="design-project-info__text">
                                <p>{activeProject.introduction}</p>
                                <p>{activeProject.contribution}</p>

                                <dl className="design-project-meta">
                                    <div>
                                        <dt>DISCIPLINE / TOOLS</dt>
                                        <dd>{activeProject.tools}</dd>
                                    </div>
                                    <div>
                                        <dt>CREDITS</dt>
                                        <dd>{activeProject.credits}</dd>
                                    </div>
                                </dl>

                                {activeProject.note && (
                                    <p className="design-project-note">
                                        {activeProject.note}
                                    </p>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* ARTWORK / PROTOTYPE */}

                    <section className="design-section design-section--work">
                        <div className="design-section__heading">
                            <div>
                                <span className="design-eyebrow">
                                    {activeProject.id === 'chefchen'
                                        ? 'INTERACTIVE EXPERIENCE'
                                        : 'THE WORK'}
                                </span>

                                <h2>{activeProject.galleryTitle}</h2>
                            </div>

                            {activeProject.images.length > 0 && (
                                <span className="design-counter">
                                    {String(
                                        activeProject.images.length
                                    ).padStart(2, '0')}{' '}
                                    VIEWS
                                </span>
                            )}
                        </div>

                        {activeProject.id === 'chefchen' ? (
                            <div className="design-prototype">
                                {prototypeLoaded ? (
                                    <iframe
                                        title="Chefchen interactive Figma prototype"
                                        src={figmaEmbed}
                                        allowFullScreen
                                    />
                                ) : (
                                    <div className="design-prototype__intro">
                                        <span className="design-eyebrow">
                                            FIGMA PROTOTYPE
                                        </span>
                                        <h3>Meet Chefchen.</h3>
                                        <p>
                                            Explore the interface and
                                            try the swipe interaction.
                                        </p>
                                        <button
                                            type="button"
                                            className="design-link"
                                            onClick={() =>
                                                setPrototypeLoaded(true)
                                            }
                                        >
                                            TRY PROTOTYPE
                                            <span aria-hidden="true">
                                                ↗
                                            </span>
                                        </button>
                                    </div>
                                )}

                                <a
                                    className="design-link design-prototype__external"
                                    href={figmaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    OPEN IN FIGMA
                                    <span aria-hidden="true">↗</span>
                                </a>
                            </div>
                        ) : (
                            renderGallery(
                                activeProject.images,
                                activeProject.id === 'russian-rumble'
                                    ? 'design-gallery--comic'
                                    : 'design-gallery--project'
                            )
                        )}

                        <button
                            type="button"
                            className="design-link design-back-bottom"
                            onClick={closeProject}
                        >
                            ← BACK TO ALL DESIGN
                        </button>
                    </section>
                </>
            ) : (
                <>
                    {/* MAIN HERO */}

                    <section className="design-hero">
                        <img
                            className="design-hero__background"
                            src="/images/design/apple-glasses/cover.webp"
                            alt=""
                        />

                        <div className="design-hero__shade" />

                        <div className="design-hero__content">
                            <span className="design-eyebrow">
                                JONAS / DESIGN PORTFOLIO
                            </span>

                            <h1>
                                Design<span>.</span>
                            </h1>

                            <p>
                                Concepts. Stories. Experiences.
                                Exploring ideas through illustration,
                                print and digital design.
                            </p>

                            <a
                                href="#design-featured"
                                className="design-link"
                            >
                                EXPLORE MY WORK
                                <span aria-hidden="true">↓</span>
                            </a>
                        </div>

                        <span className="design-hero__side-label">
                            SELECTED DESIGN
                        </span>
                    </section>

                    {/* FEATURED PROJECT */}

                    <section
                        id="design-featured"
                        className="design-section design-section--featured"
                    >
                        <div className="design-section__heading">
                            <div>
                                <span className="design-eyebrow">
                                    01 / SELECTED WORK
                                </span>
                                <h2>Featured project.</h2>
                            </div>

                            <span className="design-counter">
                                A CLOSER LOOK
                            </span>
                        </div>

                        <button
                            type="button"
                            className="design-featured"
                            onClick={(event) =>
                                openProject(featuredProject, event)
                            }
                        >
                            <img
                                src={featuredProject.cover}
                                alt={featuredProject.coverAlt}
                                loading="lazy"
                            />

                            <div className="design-featured__shade" />

                            <div className="design-featured__content">
                                <span className="design-eyebrow">
                                    UNIVERSITY PRODUCT CONCEPT
                                </span>

                                <h3>Apple Glasses</h3>

                                <p>{featuredProject.description}</p>

                                <span className="design-featured__action">
                                    EXPLORE PROJECT
                                    <span aria-hidden="true">↗</span>
                                </span>
                            </div>

                            <span className="design-featured__index">
                                01 / 04
                            </span>
                        </button>
                    </section>

                    {/* OTHER PROJECTS */}

                    <section className="design-section">
                        <div className="design-section__heading">
                            <div>
                                <span className="design-eyebrow">
                                    02 / EXPLORATIONS
                                </span>
                                <h2>Selected projects.</h2>
                            </div>

                            <p className="design-section__intro">
                                From a printed page to an interactive
                                screen. Different ways to tell a story.
                            </p>
                        </div>

                        <div className="design-project-grid">
                            {projects.slice(1).map((project, index) => (
                                <button
                                    key={project.id}
                                    type="button"
                                    className="design-project-card"
                                    onClick={(event) =>
                                        openProject(project, event)
                                    }
                                >
                                    <div
                                        className={`design-project-card__image ${
                                            project.id === 'chefchen'
                                                ? 'design-project-card__image--chefchen'
                                                : ''
                                        }`}
                                    >
                                        {project.cover ? (
                                            <img
                                                src={project.cover}
                                                alt={project.coverAlt}
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="design-chefchen-cover">
                                                <span>UI / UX EXPLORATION</span>
                                                <strong>Chefchen.</strong>
                                                <span>
                                                    INTERACTIVE FIGMA PROTOTYPE
                                                </span>
                                            </div>
                                        )}

                                        <span
                                            className="design-project-card__arrow"
                                            aria-hidden="true"
                                        >
                                            ↗
                                        </span>
                                    </div>

                                    <div className="design-project-card__details">
                                        <span className="design-counter">
                                            {String(index + 2).padStart(
                                                2,
                                                '0'
                                            )}
                                        </span>

                                        <div>
                                            <span className="design-project-card__category">
                                                {project.category}
                                            </span>
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* EARLY WORK */}

                    <section
                        id="design-early-work"
                        className="design-section design-section--archive"
                    >
                        <div className="design-section__heading">
                            <div>
                                <span className="design-eyebrow">
                                    03 / BEFORE UNIVERSITY
                                </span>
                                <h2>Early work.</h2>
                            </div>

                            <span className="design-counter">
                                42 DESIGNS
                            </span>
                        </div>

                        <p className="design-archive-intro">
                            Where it started. Minecraft renders,
                            YouTube banners and thumbnails created
                            before university.
                        </p>

                        <div
                            className="design-filters"
                            role="group"
                            aria-label="Early work categories"
                        >
                            {earlyCategories.map((category) => (
                                <button
                                    key={category.id}
                                    type="button"
                                    aria-pressed={
                                        earlyCategory === category.id
                                    }
                                    onClick={() =>
                                        setEarlyCategory(category.id)
                                    }
                                >
                                    {category.title}
                                    <span>
                                        {String(category.count).padStart(
                                            2,
                                            '0'
                                        )}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {renderGallery(
                            earlyImages,
                            earlyCategory === 'banner'
                                ? 'design-gallery--banners'
                                : ''
                        )}
                    </section>
                </>
            )}

            {/* LIGHTBOX */}

            {lightbox && (
                <div
                    className="design-lightbox"
                    onClick={(event) => {
                        if (event.target === event.currentTarget) {
                            closeLightbox();
                        }
                    }}
                >
                    <div
                        ref={lightboxRef}
                        className="design-lightbox__content"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Design image viewer"
                    >
                        <button
                            ref={lightboxCloseRef}
                            type="button"
                            className="design-lightbox__close"
                            onClick={closeLightbox}
                            aria-label="Close image"
                        >
                            ×
                        </button>

                        <div
                            className="design-lightbox__image"
                            onTouchStart={(event) => {
                                touchStartRef.current = {
                                    x: event.touches[0].clientX,
                                    y: event.touches[0].clientY,
                                };
                            }}
                            onTouchEnd={(event) => {
                                const start = touchStartRef.current;
                                touchStartRef.current = null;

                                if (!start) return;

                                const deltaX =
                                    start.x -
                                    event.changedTouches[0].clientX;
                                const deltaY =
                                    start.y -
                                    event.changedTouches[0].clientY;

                                if (
                                    Math.abs(deltaX) > 60 &&
                                    Math.abs(deltaX) > Math.abs(deltaY)
                                ) {
                                    navigateLightbox(
                                        deltaX > 0 ? 1 : -1
                                    );
                                }
                            }}
                            onTouchCancel={() => {
                                touchStartRef.current = null;
                            }}
                        >
                            <img
                                src={
                                    lightbox.images[lightbox.index].src
                                }
                                alt={
                                    lightbox.images[lightbox.index].alt
                                }
                                draggable={false}
                            />

                            {lightbox.images.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        className="design-lightbox__navigation design-lightbox__navigation--previous"
                                        onClick={() =>
                                            navigateLightbox(-1)
                                        }
                                        aria-label="Previous image"
                                    >
                                        <span
                                            className="design-chevron design-chevron--left"
                                            aria-hidden="true"
                                        />
                                    </button>

                                    <button
                                        type="button"
                                        className="design-lightbox__navigation design-lightbox__navigation--next"
                                        onClick={() =>
                                            navigateLightbox(1)
                                        }
                                        aria-label="Next image"
                                    >
                                        <span
                                            className="design-chevron design-chevron--right"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </>
                            )}
                        </div>

                        <div
                            className="design-lightbox__info"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            <p>
                                {lightbox.images[lightbox.index].alt}
                            </p>
                            <span>
                                {String(
                                    lightbox.index + 1
                                ).padStart(2, '0')}
                                {' / '}
                                {String(
                                    lightbox.images.length
                                ).padStart(2, '0')}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Design;