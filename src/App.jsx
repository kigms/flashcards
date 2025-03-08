import React from 'react';
import Flashcard from './components/Flashcard';
import { useState } from 'react';
import { flashcardData } from './flashcardData.js';

const App = () => {
  //setCurrentFlashcard takes currentFlashcard plus some processing on it
  //and returns it for useState?
  const [currentFlashcard, setNextFlashcard] = useState(0);
  let flashcard = flashcardData[currentFlashcard];

  function handlePreviousClick() {
    setNextFlashcard(currentFlashcard - 1);
  }

  function handleNextClick() {
    setNextFlashcard(currentFlashcard + 1);
  }

  return (
    <div>
      <h1>Study Backend Development & the JDBC</h1>
      <h3>Use flashcards to test your knowledge of SQL, HTTP, and the Java Database Connectivity API!</h3>
      <h4>Card no. {currentFlashcard + 1} of {flashcardData.length}</h4>
      
      <Flashcard question = {flashcardData[currentFlashcard].question}
            answer = {flashcardData[currentFlashcard].answer}/>

      <button onClick={handlePreviousClick}>&#11164;</button>
      <button onClick={handleNextClick}>&#11166;</button>
    </div>
  );
}

export default App;