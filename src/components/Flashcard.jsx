import React from 'react';
import './Flashcard.css'; // TODO: See if in right spot
import { useState } from 'react';

const Flashcard = (flashcardProps) => {
    const question =  flashcardProps.question;
    const answer = flashcardProps.answer;

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
            <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}
                 onClick={handleClick}>
                <div className="flashcard-front">
                    <p>{question}</p>
                </div>
                <div className="flashcard-back">
                    <p>{answer}</p>
                </div>
            </div>
    );
}

export default Flashcard;