import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/main.scss';

const About: React.FC = () => {
    return (
        <div className="about-page">
            <Navbar />
            <div className="about">
            <div className="about-container">
                <div className="about-image"></div> {/* Hintergrundbild */}
                <main className="about-content">
                    <h1>Hey there! 👋</h1>
                    <p>
                        I'm Jonas, a 23-year-old from the beautiful region of Lower Bavaria,
                        currently pursuing a Bachelor of Engineering in Media Technology at the
                        Deggendorf Institute of Technology.
                    </p>
                    <p>
                        Before this, I spent three semesters at the University of Passau,
                        studying for a Bachelor of Science in Internet Computing. I originally
                        planned to stick with it, but… plans change, right?
                    </p>
                    <p>
                        Here’s the thing: My first degree, which started a bit rocky due to the
                        whole pandemic situation, just wasn’t giving me the spark I thought it
                        would. I absolutely love Passau – the campus, the vibe, and the people –
                        but when it came down to building my future, I realized I needed
                        something more inspiring.
                    </p>
                    <p>
                        So, I made the tough decision to follow my heart and pursue my original
                        dream in media technology, which led me to Deggendorf.
                    </p>
                    <p className="fun-fact">Fun fact: I didn’t get in at first. 😅</p>
                    <p>
                        Why? Well, after a bumpy time in Passau where I barely got any academic
                        achievements to show for it, I had a heart-to-heart with the
                        university’s admissions team. They reassured me that missing performance
                        records wouldn’t be an issue if I aced the upcoming exams.
                    </p>
                    <p className="plot-twist">
                        <strong>Plot twist:</strong> the exams came <em>after</em> the
                        application deadline.
                    </p>
                    <p className="highlight">Yep, I mentioned that in the meeting.</p>
                    <p>
                        And, well, you can guess what happened – I was rejected. No worries,
                        though! Now, I’m spending a few months working in special-purpose
                        machine engineering to gain some work experience and, of course, save up
                        a little cash. 💰
                    </p>
                    <p>
                        But hey, my skills aren’t just about the academic side of things. Over
                        the years, I've honed my craft in design and creativity, especially
                        with the Adobe Creative Cloud suite. Whether it's graphic design, video
                        editing, or photo manipulation, I know my way around the tools that many
                        content creators on YouTube and across the online world use to elevate
                        their content.
                    </p>
                    <p className="cta">
                        If you’re looking for someone who combines technical expertise with a
                        creative touch – I’m your guy. Let’s build something awesome together!
                        ✨
                    </p>
                </main>
            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer />
        </div>
    );
};

export default About;
