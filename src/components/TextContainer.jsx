import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/textcontainer.css';  // Wenn du CSS separat auslagerst

const TextContainer = () => {
    const [text, setText] = useState('');  // Zustand für den aktuellen Text
    const currentLetterIndex = useRef(0);  // Referenz für den aktuellen Buchstaben-Index
    const [counter, setCounter] = useState(1);  // Counter für den Text (1 = Text 1, 2 = Text 2)

    const texts = [
        "Welcome to my website",
        "Regards, Jonas 'FireJSX' Vogel"
    ];  // Die beiden Texte

    // Typewriter-Funktion, die jedes Zeichen tippt
    const typeText = () => {
        const currentText = texts[counter - 1];  // Aktuellen Text je nach Counter holen
        const currentLetter = currentText[currentLetterIndex.current];  // Den aktuellen Buchstaben holen

        if (currentLetter !== undefined) {
            setText((prev) => prev + currentLetter);  // Füge den Buchstaben zum Text hinzu
            currentLetterIndex.current++;  // Den Buchstaben-Index erhöhen
        }

        if (currentLetterIndex.current < currentText.length) {
            // Wenn noch Buchstaben zu tippen sind, rufen wir die Funktion mit einer Verzögerung wieder auf
            setTimeout(typeText, 200);  // 200ms Verzögerung für das nächste Zeichen (langsamer)
        } else {
            // Wenn der Text vollständig getippt wurde, wechsel zum nächsten Text
            setTimeout(() => {
                if (counter === 1) {
                    // Wenn wir den ersten Text beendet haben, setze den Counter auf 2 für den zweiten Text
                    setCounter(2);
                } else {
                    // Wenn der zweite Text beendet wurde, setze den Counter auf 1 zurück
                    setCounter(1);
                }

                currentLetterIndex.current = 0;  // Zurücksetzen des Buchstaben-Index
                setText('');  // Den Text zurücksetzen
            }, 1000);  // 1 Sekunde Pause nach dem Text
        }
    };

    useEffect(() => {
        typeText();  // Starte den Typing-Effekt beim Laden der Komponente
    }, [counter]);  // Der Effekt wird erneut ausgeführt, wenn der Counter sich ändert

    return (
        <div id="text-container">
            <span>{text}<span className="cursor">|</span></span>  {/* Der getippte Text mit Cursor (Unterstrich) */}
        </div>
    );
};

export default TextContainer;
