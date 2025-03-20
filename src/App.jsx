import React from 'react';
import Flashcard from './components/Flashcard';
import AnswerBox from './components/AnswerBox';
import { useState } from 'react';
import { flashcardData } from './flashcardData.js';
import './App.css';

const App = () => {
  //setCurrentFlashcard takes currentFlashcard plus some processing on it
  //and returns it for useState?
  const [currentFlashcard, setNextFlashcard] = useState(0);
  const [inputs, setInputs] = useState({'attemptedAnswer': ''});
  const [correct_answer, setCheckedAnswer] = useState('');

  let flashcard = flashcardData[currentFlashcard];

  const handleNewFlashcard = () => {
    setInputs({'attemptedAnswer': ''}) // Clear the state of the user inputs
    setCheckedAnswer(''); // Change the state of the checked answer
    getNextFlashcard(); // Get the next flashcard
    //setTrueAnswer(); // Set a more specific true answer
    }

  const getNextFlashcard = () => {
      let randomFlashcardIndex = Math.floor(Math.random() * flashcardData.length)
      setNextFlashcard(randomFlashcardIndex)
      }

  const checkAnswer = () => {
    if(!flashcardData[currentFlashcard].answer.includes(inputs['attemptedAnswer'])){
      alert('Incorrect');
    }
      else{
      setCheckedAnswer('');
      alert('Correct');
    }
  }
        

  function handlePreviousClick() {
    setNextFlashcard(currentFlashcard - 1);
  }

  function handleNextClick() {
    setNextFlashcard(currentFlashcard + 1);
  }

  return (
    <div className="app">
      <h1>Study Backend Development & the JDBC</h1>
      <h3>Use flashcards to test your knowledge of SQL, HTTP, and the Java Database Connectivity API!</h3>
      <h4>Card no. {currentFlashcard + 1} of {flashcardData.length}</h4>
      
      <Flashcard question = {flashcardData[currentFlashcard].question}
            answer = {flashcardData[currentFlashcard].answer}/>
<br></br>
      <form className="flex-container">
        <div className="mini-flex-container">
          <div className="answer-space" 
               id={correct_answer}>
                {inputs["attemptedAnswer"]}
          </div>
          <AnswerBox
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState,
              [e.target.name]:[e.target.value]
            }))}
            label="attemptedAnswer"
            currentVal={inputs["attemptedAnswer"]}
          />
        </div>
      </form>
      <button type ="new-flash-card-button"
              className="button newflashcard" 
              onClick={handleNewFlashcard}>
                🔀
      </button>
      <button onClick={handlePreviousClick}>◀️</button>
      <button onClick={handleNextClick}>▶️</button>
      <button type="submit"
              className="button submit"
              onClick={checkAnswer}>Check Answer</button>
    </div>
  );
}

export default App;