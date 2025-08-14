import React from 'react';

const UnsupportedBrowser = () => {
    return (
        <div style={{
            padding: '2rem',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f8f8f8',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <h2 style={{ fontSize: '1.8rem', color: '#d63031' }}>
                Instagram-Browser wird nicht unterstützt
            </h2>
            <p style={{ marginTop: '1rem', fontSize: '1.1rem', color: '#333' }}>
                Bitte öffne diese Seite in deinem Standardbrowser (z.&nbsp;B. Chrome oder Safari).
            </p>
            <p style={{ marginTop: '1rem', color: '#666' }}>
                Klicke oben rechts auf die <strong>drei Punkte</strong> und wähle <em>„Im Browser öffnen“</em>.
            </p>
        </div>
    );
};

export default UnsupportedBrowser;
