import React, { useState } from 'react';

function Card({ leagueChampions }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [correctGuesses, setCorrectGuesses] = useState(0);

  const currentChampion = leagueChampions[currentCardIndex];

  const handleNext = () => {
    let randomIndex = currentCardIndex;
    while (randomIndex === currentCardIndex) {
      randomIndex = Math.floor(Math.random() * leagueChampions.length);
    }
    setCurrentCardIndex(randomIndex);
    setShowHint(true);
    setUserGuess('');
    setFeedback('');
  };

  const handleBack = () => {
    const prevIndex = (currentCardIndex - 1 + leagueChampions.length) % leagueChampions.length;
    setCurrentCardIndex(prevIndex);
    setShowHint(true);
    setUserGuess('');
    setFeedback('');
  };

  const handleFlip = () => {
    setShowHint(!showHint);
  };

  const handleGuess = () => {
    if (userGuess.toLowerCase() === currentChampion.champion.toLowerCase()) {
      setFeedback('Correct!');
      setCorrectGuesses(correctGuesses + 1); // Increment the counter
    } else {
      setFeedback('Incorrect. Try again.');
      setCorrectGuesses(0);
    }
  };

  const handleCardClick = (e) => {
    // Check if the click target is not an input or button element
    if (!e.target.matches('input, button')) {
      handleFlip();
    }
  };

  return (
    <div className="card-container">
      <div className={`card ${showHint ? '' : 'flipped'}`} onClick={handleCardClick}>
        <div className="card-content">
          <div onClick={handleCardClick}>
            {showHint ? (
              <div>
                <p>Hint: {currentChampion.hint}</p>
                <p>Difficulty: {currentChampion.difficulty}</p>
              </div>
            ) : (
              <div>
                <h3>Champion: {currentChampion.champion}</h3>
              </div>
            )}
          </div>
          <div className='card-input'>
            <input
              type="text"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              placeholder="Place your answer here..."
            />
            <button onClick={handleGuess}>Submit</button>
            <p>{feedback}</p>
          </div>
        </div>
      </div>
      <div className="card-buttons">
        <button onClick={handleBack}>Prev Card</button>
        <button onClick={handleFlip}>Flip Card</button>
        <button onClick={handleNext}>Next Card</button>
      </div>
      <div><p>Current Streak: {correctGuesses}</p></div>
    </div>
  );
}

export default Card;
