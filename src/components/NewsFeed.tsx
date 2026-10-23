import React from 'react';
import { Link } from 'react-router-dom';

type NewsItem = {
    id: string;
    category: string;
    title: string;
    content: string;
    link: string;
    linkLabel: string;
};

// Add new updates at the beginning of this array.
const newsItems: NewsItem[] = [
    {
        id: 'about-update',
        category: 'ABOUT / WEBSITE UPDATE',
        title: 'Behind the work.',
        content:
            'The updated About page brings together my background, university experience and the different disciplines I work in.',
        link: '/about',
        linkLabel: 'EXPLORE ABOUT',
    },
    {
        id: 'videography-update',
        category: 'VIDEOGRAPHY / WEBSITE UPDATE',
        title: 'Stories in motion.',
        content:
            'Explore the updated Videography page with selected film projects, project details and videos.',
        link: '/videography',
        linkLabel: 'EXPLORE VIDEOGRAPHY',
    },
    {
        id: 'photography-update',
        category: 'PHOTOGRAPHY / WEBSITE UPDATE',
        title: 'A new perspective.',
        content:
            'Discover the redesigned Photography page, featuring photo stories, the complete archive and a closer look at each image.',
        link: '/photography',
        linkLabel: 'EXPLORE PHOTOGRAPHY',
    },
    {
        id: 'development-update',
        category: 'DEVELOPMENT / WEBSITE UPDATE',
        title: 'From idea to application.',
        content:
            'TrailerPlanner, ConnectApp and DinoRunner have a new home on the updated Development page.',
        link: '/development',
        linkLabel: 'EXPLORE DEVELOPMENT',
    },
];

const NewsFeed: React.FC = () => (
    <section
        id="home-news"
        className="home-section home-section--divided home-news"
        aria-labelledby="home-news-title"
    >
        <div className="home-section__heading">
            <div>
                <span className="home-eyebrow">
                    04 / WHAT'S NEW
                </span>

                <h2 id="home-news-title">
                    Latest updates.
                </h2>
            </div>

            <span className="home-counter">
                {String(newsItems.length).padStart(2, '0')}{' '}
                UPDATES
            </span>
        </div>

        <div className="home-news__grid">
            {newsItems.map((item, index) => (
                <article
                    className="home-news__item"
                    key={item.id}
                    aria-labelledby={`news-${item.id}`}
                >
                    <div className="home-news__meta">
                        <span className="home-eyebrow">
                            {item.category}
                        </span>

                        <span
                            className="home-counter"
                            aria-hidden="true"
                        >
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>

                    <h3 id={`news-${item.id}`}>
                        {item.title}
                    </h3>

                    <p>{item.content}</p>

                    <Link
                        className="home-link"
                        to={item.link}
                    >
                        {item.linkLabel}
                        <span aria-hidden="true">↗</span>
                    </Link>
                </article>
            ))}
        </div>
    </section>
);

export default NewsFeed;