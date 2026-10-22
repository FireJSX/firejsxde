
import React, {
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

import { useSearchParams } from 'react-router-dom';

import {
    photos,
    photoSeries,
    type Photo,
    type PhotoSeries,
} from '../data/photographyData';

import '../assets/styles/main.scss';

// --------------------------------------------------
// Helpers
// --------------------------------------------------

const getPhotoId = (photo: Photo): number => {
    const match = photo.src.match(/photo-(\d+)\.webp$/);
    return match ? Number(match[1]) : -1;
};

const formatDate = (date: string): string => {
    return new Date(`${date}T12:00:00`).toLocaleDateString(
        'en-GB',
        {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }
    );
};

const sortedPhotos = [...photos].sort(
    (a, b) => b.date.localeCompare(a.date)
);

const publishedSeries = photoSeries.filter(
    (series) => series.published
);

// --------------------------------------------------
// Photo Gallery
// --------------------------------------------------

interface PhotoGalleryProps {
    items: Photo[];
    onPhotoClick: (photo: Photo) => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
                                                       items,
                                                       onPhotoClick,
                                                   }) => {
    return (
        <div className="photography-gallery">
            {items.map((photo) => (
                <button
                    key={photo.src}
                    className="photography-gallery__item"
                    type="button"
                    onClick={() => onPhotoClick(photo)}
                    aria-label={`View photo: ${photo.description}, ${photo.location}`}
                >
                    <img
                        src={photo.src}
                        alt={photo.description || photo.location}
                        loading="lazy"
                        decoding="async"
                    />

                    <div className="photography-gallery__overlay">
                        <span className="photography-gallery__location">
                            {photo.location}
                        </span>

                        <span className="photography-gallery__date">
                            {formatDate(photo.date)}
                        </span>

                        <span className="photography-gallery__description">
                            {photo.description}
                        </span>

                        <span className="photography-gallery__view">
                            View photograph ↗
                        </span>
                    </div>
                </button>
            ))}
        </div>
    );
};

// --------------------------------------------------
// Photo Series Card
// --------------------------------------------------

interface SeriesCardProps {
    series: PhotoSeries;
    onClick: () => void;
    index: number;
}

const SeriesCard: React.FC<SeriesCardProps> = ({
                                                   series,
                                                   onClick,
                                                   index,
                                               }) => {
    return (
        <button
            className="photography-series-card"
            type="button"
            onClick={onClick}
            aria-label={`Open ${series.title}`}
        >
            <div className="photography-series-card__image">
                <img
                    src={series.cover}
                    alt={series.title}
                    loading="lazy"
                />

                <span className="photography-series-card__arrow">
                    ↗
                </span>
            </div>

            <div className="photography-series-card__details">
                <span className="photography-series-card__number">
                    {String(index + 1).padStart(2, '0')}
                </span>

                <div>
                    <h3>{series.title}</h3>
                    <p>{series.subtitle}</p>
                </div>

                <span className="photography-series-card__count">
                    {series.photoIds.length} PHOTOS
                </span>
            </div>
        </button>
    );
};

// --------------------------------------------------
// Photography Page
// --------------------------------------------------

const Photography: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [activePhoto, setActivePhoto] = useState<Photo | null>(
        null
    );

    const touchStartX = useRef<number | null>(null);
    const lightboxCloseRef = useRef<HTMLButtonElement | null>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    const seriesId = searchParams.get('series');

    // --------------------------------------------------
    // Series selection
    // --------------------------------------------------

    const activeSeries = useMemo(() => {
        return (
            publishedSeries.find(
                (series) => series.id === seriesId
            ) ?? null
        );
    }, [seriesId]);

    const featuredSeries = publishedSeries.find(
        (series) => series.featured
    );

    const otherSeries = publishedSeries.filter(
        (series) => !series.featured
    );

    const seriesPhotos = useMemo(() => {
        if (!activeSeries) {
            return [];
        }

        return activeSeries.photoIds
            .map((id) =>
                photos.find(
                    (photo) => getPhotoId(photo) === id
                )
            )
            .filter(
                (photo): photo is Photo => Boolean(photo)
            );
    }, [activeSeries]);

    // --------------------------------------------------
    // Lightbox navigation
    // --------------------------------------------------

    const lightboxPhotos = activeSeries
        ? seriesPhotos
        : sortedPhotos;

    const activePhotoIndex = activePhoto
        ? lightboxPhotos.findIndex(
            (photo) => photo.src === activePhoto.src
        )
        : -1;

    const openPhoto = (photo: Photo) => {
        previousFocusRef.current =
            document.activeElement instanceof HTMLElement
                ? document.activeElement
                : null;

        setActivePhoto(photo);
    };

    const closePhoto = () => {
        setActivePhoto(null);

        requestAnimationFrame(() => {
            previousFocusRef.current?.focus();
        });
    };

    const navigatePhoto = (direction: number) => {
        if (
            activePhotoIndex < 0 ||
            lightboxPhotos.length === 0
        ) {
            return;
        }

        const nextIndex =
            (
                activePhotoIndex +
                direction +
                lightboxPhotos.length
            ) % lightboxPhotos.length;

        setActivePhoto(lightboxPhotos[nextIndex]);
    };

    // --------------------------------------------------
    // Open / close photo series
    // --------------------------------------------------

    const openSeries = (id: string) => {
        setActivePhoto(null);
        setSearchParams({ series: id });
    };

    const closeSeries = () => {
        setActivePhoto(null);
        setSearchParams({});
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto',
        });
    }, [seriesId]);

    // --------------------------------------------------
    // Lightbox keyboard handling
    // --------------------------------------------------

    useEffect(() => {
        if (!activePhoto) {
            return;
        }

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                closePhoto();
                return;
            }

            if (
                activePhotoIndex >= 0 &&
                lightboxPhotos.length > 0
            ) {
                if (event.key === 'ArrowRight') {
                    event.preventDefault();

                    const nextIndex =
                        (activePhotoIndex + 1) %
                        lightboxPhotos.length;

                    setActivePhoto(lightboxPhotos[nextIndex]);
                }

                if (event.key === 'ArrowLeft') {
                    event.preventDefault();

                    const previousIndex =
                        (
                            activePhotoIndex -
                            1 +
                            lightboxPhotos.length
                        ) % lightboxPhotos.length;

                    setActivePhoto(
                        lightboxPhotos[previousIndex]
                    );
                }
            }

            // Keep keyboard focus inside the lightbox.
            if (event.key === 'Tab') {
                const dialog = document.querySelector(
                    '.photography-lightbox__content'
                );

                if (!dialog) {
                    return;
                }

                const focusableElements =
                    dialog.querySelectorAll<HTMLElement>(
                        'button:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])'
                    );

                if (focusableElements.length === 0) {
                    return;
                }

                const first = focusableElements[0];
                const last =
                    focusableElements[
                    focusableElements.length - 1
                        ];

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

        window.addEventListener(
            'keydown',
            handleKeyDown
        );

        return () => {
            document.body.style.overflow = previousOverflow;

            window.removeEventListener(
                'keydown',
                handleKeyDown
            );
        };
    }, [
        activePhoto,
        activePhotoIndex,
        lightboxPhotos,
    ]);

    useEffect(() => {
        if (activePhoto) {
            lightboxCloseRef.current?.focus();
        }
    }, [Boolean(activePhoto)]);

    // --------------------------------------------------
    // Rendering
    // --------------------------------------------------

    return (
        <main className="photography-page">
            {activeSeries ? (
                <>
                    {/* SERIES HERO */}

                    <section className="photography-series-hero">
                        <img
                            className="photography-series-hero__background"
                            src={activeSeries.cover}
                            alt=""
                        />

                        <div className="photography-series-hero__shade" />

                        <div className="photography-series-hero__content">
                            <button
                                type="button"
                                className="photography-back"
                                onClick={closeSeries}
                            >
                                ← ALL PHOTOGRAPHY
                            </button>

                            <div className="photography-series-hero__heading">
                                <span className="photography-eyebrow">
                                    PHOTO STORY /{' '}
                                    {activeSeries.photoIds.length}{' '}
                                    PHOTOGRAPHS
                                </span>

                                <h1>{activeSeries.title}</h1>

                                <p>{activeSeries.description}</p>
                            </div>
                        </div>
                    </section>

                    {/* SERIES GALLERY */}

                    <section className="photography-section photography-section--series">
                        <div className="photography-section__heading">
                            <div>
                                <span className="photography-eyebrow">
                                    THE SERIES
                                </span>

                                <h2>Through the lens.</h2>
                            </div>

                            <span className="photography-section__counter">
                                {String(seriesPhotos.length).padStart(
                                    2,
                                    '0'
                                )}{' '}
                                IMAGES
                            </span>
                        </div>

                        <PhotoGallery
                            items={seriesPhotos}
                            onPhotoClick={openPhoto}
                        />

                        <button
                            type="button"
                            className="photography-bottom-link"
                            onClick={closeSeries}
                        >
                            ← BACK TO ALL PHOTOGRAPHY
                        </button>
                    </section>
                </>
            ) : (
                <>
                    {/* MAIN HERO */}

                    <section className="photography-hero">
                        <img
                            className="photography-hero__background"
                            src="/images/photography/hero.webp"
                            alt=""
                        />

                        <div className="photography-hero__shade" />

                        <div className="photography-hero__content">
                            <span className="photography-eyebrow">
                                JONAS / VISUAL PORTFOLIO
                            </span>

                            <h1>
                                Photography<span>.</span>
                            </h1>

                            <p>
                                Places. People. Passing moments.
                                A collection of stories told through
                                my lens.
                            </p>

                            <a
                                className="photography-hero__scroll"
                                href="#featured"
                            >
                                EXPLORE MY WORK
                                <span>↓</span>
                            </a>
                        </div>

                        <span className="photography-hero__side-label">
                            SELECTED PHOTOGRAPHY
                        </span>
                    </section>

                    {/* FEATURED STORY */}

                    {featuredSeries && (
                        <section
                            id="featured"
                            className="photography-section photography-section--featured"
                        >
                            <div className="photography-section__heading">
                                <div>
                                    <span className="photography-eyebrow">
                                        01 / SELECTED WORK
                                    </span>

                                    <h2>Featured story.</h2>
                                </div>

                                <span className="photography-section__counter">
                                    A CLOSER LOOK
                                </span>
                            </div>

                            <button
                                type="button"
                                className="photography-featured"
                                onClick={() =>
                                    openSeries(featuredSeries.id)
                                }
                            >
                                <img
                                    src={featuredSeries.cover}
                                    alt={featuredSeries.title}
                                    loading="lazy"
                                />

                                <div className="photography-featured__shade" />

                                <div className="photography-featured__content">
                                    <span className="photography-eyebrow">
                                        FEATURED PHOTOGRAPHY PROJECT
                                    </span>

                                    <h3>{featuredSeries.title}</h3>

                                    <p>
                                        {featuredSeries.description}
                                    </p>

                                    <span className="photography-featured__action">
                                        EXPLORE SERIES
                                        <span>↗</span>
                                    </span>
                                </div>

                                <span className="photography-featured__index">
                                    01 /{' '}
                                    {String(
                                        publishedSeries.length
                                    ).padStart(2, '0')}
                                </span>
                            </button>
                        </section>
                    )}

                    {/* OTHER PHOTO STORIES */}

                    {otherSeries.length > 0 && (
                        <section className="photography-section">
                            <div className="photography-section__heading">
                                <div>
                                    <span className="photography-eyebrow">
                                        02 / COLLECTIONS
                                    </span>

                                    <h2>Photo stories.</h2>
                                </div>

                                <p className="photography-section__intro">
                                    More than individual frames.
                                    A collection of places, moods and
                                    moments.
                                </p>
                            </div>

                            <div className="photography-series-grid">
                                {otherSeries.map(
                                    (series, index) => (
                                        <SeriesCard
                                            key={series.id}
                                            series={series}
                                            index={index + 1}
                                            onClick={() =>
                                                openSeries(series.id)
                                            }
                                        />
                                    )
                                )}
                            </div>
                        </section>
                    )}

                    {/* COMPLETE PHOTO ARCHIVE */}

                    <section
                        id="archive"
                        className="photography-section photography-section--archive"
                    >
                        <div className="photography-section__heading">
                            <div>
                                <span className="photography-eyebrow">
                                    03 / THE ARCHIVE
                                </span>

                                <h2>All photography.</h2>
                            </div>

                            <span className="photography-section__counter">
                                {String(
                                    sortedPhotos.length
                                ).padStart(2, '0')}{' '}
                                PHOTOGRAPHS
                            </span>
                        </div>

                        <p className="photography-archive-intro">
                            An ongoing collection of photographs,
                            ordered from newest to oldest.
                        </p>

                        <PhotoGallery
                            items={sortedPhotos}
                            onPhotoClick={openPhoto}
                        />
                    </section>
                </>
            )}

            {/* FULLSCREEN PHOTO LIGHTBOX */}

            {activePhoto && (
                <div
                    className="photography-lightbox"
                    role="presentation"
                    onMouseDown={(event) => {
                        if (
                            event.target === event.currentTarget
                        ) {
                            closePhoto();
                        }
                    }}
                    onTouchStart={(event) => {
                        touchStartX.current =
                            event.touches[0].clientX;
                    }}
                    onTouchEnd={(event) => {
                        if (touchStartX.current === null) {
                            return;
                        }

                        const difference =
                            touchStartX.current -
                            event.changedTouches[0].clientX;

                        if (Math.abs(difference) > 60) {
                            navigatePhoto(
                                difference > 0 ? 1 : -1
                            );
                        }

                        touchStartX.current = null;
                    }}
                    onTouchCancel={() => {
                        touchStartX.current = null;
                    }}
                >
                    <div
                        className="photography-lightbox__content"
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Photograph from ${activePhoto.location}`}
                    >
                        {/* CLOSE BUTTON */}

                        <button
                            ref={lightboxCloseRef}
                            className="photography-lightbox__close"
                            type="button"
                            onClick={closePhoto}
                            aria-label="Close photograph"
                        >
                            ×
                        </button>

                        {/* IMAGE + NAVIGATION */}

                        <div className="photography-lightbox__image-wrapper">

                            {/* PREVIOUS PHOTO */}

                            <button
                                className="photography-lightbox__navigation photography-lightbox__navigation--previous"
                                type="button"
                                onClick={() => navigatePhoto(-1)}
                                aria-label="Previous photograph"
                            >
                                <span
                                    className="photography-lightbox__chevron photography-lightbox__chevron--left"
                                    aria-hidden="true"
                                />
                            </button>

                            <img
                                src={activePhoto.src}
                                alt={
                                    activePhoto.description ||
                                    activePhoto.location
                                }
                                draggable={false}
                            />

                            {/* NEXT PHOTO */}

                            <button
                                className="photography-lightbox__navigation photography-lightbox__navigation--next"
                                type="button"
                                onClick={() => navigatePhoto(1)}
                                aria-label="Next photograph"
                            >
                                <span
                                    className="photography-lightbox__chevron photography-lightbox__chevron--right"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>

                        {/* PHOTO INFORMATION */}

                        <div className="photography-lightbox__info">
                            <div>
                                <h3>{activePhoto.location}</h3>
                                <p>{activePhoto.description}</p>
                            </div>

                            <div className="photography-lightbox__meta">
                                <span>
                                    {formatDate(
                                        activePhoto.date
                                    )}
                                </span>

                                <span className="photography-lightbox__counter">
                                    {String(
                                        activePhotoIndex + 1
                                    ).padStart(2, '0')}
                                    {' / '}
                                    {String(
                                        lightboxPhotos.length
                                    ).padStart(2, '0')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Photography;
