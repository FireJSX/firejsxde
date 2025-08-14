import React from 'react';

const UnsupportedBrowser = () => {
    return (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'white', backgroundColor: '#111', height: '100vh' }}>
            <h1>⚠️ Nicht unterstützter Browser</h1>
            <p>Diese Website funktioniert nicht im eingebetteten Instagram-Browser.</p>
            <p>Bitte öffne sie in deinem Standardbrowser:</p>
            <br />
            <p>
                <strong>Tippe oben rechts auf die drei Punkte &rarr; „Im Browser öffnen“</strong>
            </p>
        </div>
    );
};

export default UnsupportedBrowser;