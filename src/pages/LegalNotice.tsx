import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/main.scss';

const LegalNotice: React.FC = () => {
    return (
        <div>
            <Navbar />
            <main className="legal-notice">
                <h1>Legal Notice & Disclaimer</h1>

                <section>
                    <h2>1. Liability for Content</h2>
                    <p>
                        The content of this website has been created with the utmost care. However, I cannot
                        guarantee the accuracy, completeness, or timeliness of the content. As a service provider,
                        I am responsible for my own content on these pages in accordance with general laws.
                        However, I am not obligated to monitor third-party information provided or stored on
                        this website or to investigate circumstances that indicate illegal activity.
                    </p>
                </section>

                <section>
                    <h2>2. Liability for Links</h2>
                    <p>
                        This website may contain links to external websites over which I have no control.
                        Therefore, I cannot assume any liability for their content. The respective provider or
                        operator of the linked sites is always responsible for their content. At the time of
                        linking, no illegal content was identifiable. However, continuous monitoring of the linked
                        pages is not reasonable without concrete evidence of a violation. If any infringement
                        becomes known, such links will be removed immediately.
                    </p>
                </section>

                <section>
                    <h2>3. Copyright</h2>
                    <p>
                        The content and works created on this website are subject to copyright law.
                        Duplication, processing, distribution, or any form of commercialization beyond
                        the scope of copyright law requires prior written consent. Downloads and copies of
                        this site are permitted only for private, non-commercial use. If the content on this
                        website was not created by me, the copyrights of third parties are respected.
                    </p>
                </section>

                <section>
                    <h2>4. No Legal Advice</h2>
                    <p>
                        The information provided on this website does not constitute legal advice.
                        If you require legal assistance, please consult a qualified attorney.
                        I assume no liability for decisions made based on the information provided here.
                    </p>
                </section>

                <section>
                    <h2>5. Contact</h2>
                    <p>
                        If you notice any legal issues regarding this website, please inform me accordingly.
                        I will promptly review the matter and take appropriate action if necessary.
                    </p>
                </section>

                <p className="disclaimer">
                    By using this website, you agree to this disclaimer and its terms.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default LegalNotice;