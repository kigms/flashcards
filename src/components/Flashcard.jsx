import React from 'react';
import './Flashcard.css'; // TODO: See if in right spot

const Flashcard = (flashcardProps) => {
    const question =  flashcardProps.question;
    const answer = flashcardProps.answer;

    return (
        // onClick event?
        <div className="flashcard">
            <p>Question</p>
        </div>
    );
}

export default Flashcard;