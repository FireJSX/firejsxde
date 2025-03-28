import React, { useState, useEffect, useRef } from 'react';

const TextContainer = () => {
    const [text, setText] = useState('');
    const currentLetterIndex = useRef(0);
    const [counter, setCounter] = useState(1);

    const texts = [
        "Welcome to my website",
        "Regards, Jonas 'FireJSX' Vogel"
    ];

    const typeText = () => {
        const currentText = texts[counter - 1];
        const currentLetter = currentText[currentLetterIndex.current];

        if (currentLetter !== undefined) {
            setText((prev) => prev + currentLetter);
            currentLetterIndex.current++;
        }

        if (currentLetterIndex.current < currentText.length) {
            setTimeout(typeText, 200);
        } else {
            setTimeout(() => {
                if (counter === 1) {
                    setCounter(2);
                } else {
                    setCounter(1);
                }

                currentLetterIndex.current = 0;
                setText('');
            }, 800);
        }
    };

    useEffect(() => {
        typeText();
    }, [counter]);

    return (
        <div className="typewriter-container">
            <div id="text-container">
                <span>{text}</span><span className="cursor">|</span>
            </div>
        </div>
    );
};

export default TextContainer;
