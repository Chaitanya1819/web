import { useState } from "react";
import Log from "./components/Log.jsx";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
function App() {

  
  const [gameTurns, setGameTurns] = useState([]);

  const [activePlayer, setActivePlayer] = useState('X');
  
  function handleSelectSquare(rowIndex,colIndex){
    setActivePlayer((curActivePlayer)=>curActivePlayer === 'X'?'O':'X');
    setGameTurns((prevTurns) =>{
      let currentPlayer = 'X';
      if(prevTurns.length > 0 && prevTurns[0].player ==='X'){
        currentPlayer = '0';

      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player:currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return <main>
    <div id ="game-container">
      <ol id="players" className="highlight-player">
        <Player  initialName ="Player 1" symbol ="X" isActive={activePlayer === 'X'}></Player>
        
        <Player  initialName ="Player 2" symbol ="O" isActive={activePlayer === 'O'}></Player>
      </ol>
      <GameBoard  onSelectSquare={handleSelectSquare} turns ={gameTurns}/>
    </div>
    <Log turns ={gameTurns}/>
  </main>;
}

export default App;
