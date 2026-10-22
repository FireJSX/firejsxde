import React from 'react';
import '../assets/styles/main.scss';

const legalSections = [
    {
        id: 'content',
        number: '01',
        title: 'Liability for Content',
        text:
            'The content of this website has been created with the utmost care. However, I cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, I am responsible for my own content on these pages in accordance with general laws. However, I am not obligated to monitor third-party information provided or stored on this website or to investigate circumstances that indicate illegal activity.',
    },
    {
        id: 'links',
        number: '02',
        title: 'Liability for Links',
        text:
            'This website may contain links to external websites over which I have no control. Therefore, I cannot assume any liability for their content. The respective provider or operator of the linked sites is always responsible for their content. At the time of linking, no illegal content was identifiable. However, continuous monitoring of the linked pages is not reasonable without concrete evidence of a violation. If any infringement becomes known, such links will be removed immediately.',
    },
    {
        id: 'copyright',
        number: '03',
        title: 'Copyright',
        text:
            'The content and works created on this website are subject to copyright law. Duplication, processing, distribution, or any form of commercialization beyond the scope of copyright law requires prior written consent. Downloads and copies of this site are permitted only for private, non-commercial use. If the content on this website was not created by me, the copyrights of third parties are respected.',
    },
    {
        id: 'legal-advice',
        number: '04',
        title: 'No Legal Advice',
        text:
            'The information provided on this website does not constitute legal advice. If you require legal assistance, please consult a qualified attorney. I assume no liability for decisions made based on the information provided here.',
    },
    {
        id: 'contact',
        number: '05',
        title: 'Contact',
        text:
            'If you notice any legal issues regarding this website, please inform me accordingly. I will promptly review the matter and take appropriate action if necessary.',
    },
];

const LegalNotice: React.FC = () => (
    <main className="legal-page">
        <header className="legal-hero">
            <span className="legal-eyebrow">
                INFORMATION / LEGAL
            </span>

            <h1>
                Legal Notice<span>.</span>
            </h1>

            <p className="legal-hero__subtitle">
                Disclaimer &amp; copyright information.
            </p>
        </header>

        <div className="legal-layout">
            <aside className="legal-sidebar">
                <nav
                    className="legal-navigation"
                    aria-label="Legal notice contents"
                >
                    <span className="legal-eyebrow">
                        ON THIS PAGE
                    </span>

                    <ol>
                        {legalSections.map((section) => (
                            <li key={section.id}>
                                <a href={`#legal-${section.id}`}>
                                    <span aria-hidden="true">
                                        {section.number}
                                    </span>
                                    {section.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>
            </aside>

            <div className="legal-content">
                {legalSections.map((section) => (
                    <section
                        key={section.id}
                        id={`legal-${section.id}`}
                        className="legal-section"
                        aria-labelledby={`legal-${section.id}-title`}
                    >
                        <span className="legal-eyebrow">
                            {section.number} / DISCLAIMER
                        </span>

                        <h2 id={`legal-${section.id}-title`}>
                            {section.title}
                        </h2>

                        <p>{section.text}</p>
                    </section>
                ))}

                <footer className="legal-disclaimer">
                    <p>
                        By using this website, you agree to this
                        disclaimer and its terms.
                    </p>
                </footer>
            </div>
        </div>
    </main>
);

export default LegalNotice;