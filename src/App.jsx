import React from 'react';
import './App.css';
import Card from './components/Card';

const leagueChampions = [
  { hint: 'This champion is a yordle known as a hero who can disappear at whim.', champion: 'Teemo', difficulty: 'Easy' },
  { hint: 'This champion wields two huge axes and is known for spinning wildly into battle, also has a loud brother.', champion: 'Darius', difficulty: 'Easy' },
  { hint: 'This champion is a highly skilled marksman who uses a crossbow, hard to play.', champion: 'Vayne', difficulty: 'Hard' },
  { hint: 'This champion is able to heal in a large circle, normally seen flying around.', champion: 'Janna', difficulty: 'Medium' },
  { hint: 'This champion is a red haired swift assassin who excels at picking off vulnerable enemies.', champion: 'Katarina', difficulty: 'Easy' },
  { hint: 'This champion is a tanky support known for their crowd control abilities and shields, loves the cold.', champion: 'Braum', difficulty: 'Hard' },
  { hint: 'This champion is a powerful mage who can manipulate time and space.', champion: 'Zilean', difficulty: 'Easy' },
  { hint: 'This champion is a tricky trickster who can create copies of themselves.', champion: 'Shaco', difficulty: 'Medium' },
  { hint: 'This champion is an armored prince who charges into battle with a massive spear.', champion: 'JarvanIV', difficulty: 'Medium' },
  { hint: 'This champion is a fearsome pirate who hunts for treasure and battles with dual pistols.', champion: 'Miss Fortune', difficulty: 'Easy' },
];

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h2>League Of Legends Champion Heads Up</h2>
        <h3>How much league have you played? Guess the champion based on the information given</h3>
        <h4>Number of Total Cards: {leagueChampions.length}</h4>
        <Card leagueChampions={leagueChampions} />
      </div>
    </div>
  );
}

export default App;
