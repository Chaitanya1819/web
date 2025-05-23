import logo from './logo.svg';
import './App.css';
import TimerChallenge from './components/TimerChallenge.jsx';
import Player from './/components/Player.jsx';
import { useState } from 'react';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Player/>
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime ={1}/>
        <TimerChallenge title="NOT Easy" targetTime ={5}/>
        <TimerChallenge title="Getting Tough" targetTime ={10}/>
        <TimerChallenge title="Pros Only" targetTime ={15}/>
      </div>
    </div>
  );
}

export default App;
