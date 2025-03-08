import React from 'react';
import Card from './components/Card';
import { useState } from 'react';
import { flashcardData } from './flashcardData.js';

const App = () => {
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  let flashcard = flashcardData[currentFlashcard];

  return (
    <div>
      <h1>Study Backend Development & the JDBC</h1>
      <h3>Use flashcards to test your knowledge of SQL, HTTP, and the Java Database Connectivity API!</h3>
      <h4>Card #</h4>
      
      <Card/>

      <button>&#11164;</button>
      <button>&#11166;</button>
    </div>
  );
}

export default App;