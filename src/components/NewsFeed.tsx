import React, { useEffect, useState } from 'react';

const NewsFeed: React.FC = () => {
    const [newsItems, setNewsItems] = useState([
        { title: "News", content: "New Web-Design live now!", color: "rgba(83,152,255,0.1)", link: "https://firejsx.de/redesign/index.html" },
        { title: "News", content: "Other pages coming soon!", color: "rgba(255, 9, 20, 0.1)", link: "https://firejsx.de/redesign/index.html" },
        { title: "News", content: "All new Development page incoming!", color: "rgba(152,255,83,0.1)", link: "https://firejsx.de/redesign/development.html" }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [newsItems]);

    return (
        <div className="news-feed" style={{ background: newsItems[currentIndex].color }}>
            <h3 id="news-title">{newsItems[currentIndex].title}</h3>
            <div className="line"></div>
            <p id="news-content">{newsItems[currentIndex].content}</p>
            <button id="read-more-btn" onClick={() => window.location.href = newsItems[currentIndex].link}>Read More</button>
        </div>
    );
}

export default NewsFeed;
