import { useState } from "react"
export default function Player({initialName, symbol,isActive,onChangeName}){
    const [isEditing,setIsEditing]= useState(false);
    const[playerName,setPlayerName] =useState(initialName);
    let editablePlayerName = <span className="player-name">{playerName}</span>
    if(isEditing){
      editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
    }
    function handlebuttonclick(){
        setIsEditing((editing) => !editing);
        if(isEditing)
        onChangeName(symbol,playerName);
      }

    function handleChange(event){
      // console.log(event);
      console.log(event.target.value);
      setPlayerName(event.target.value);
    }
    return(
    <li className={isActive ? 'active':'undefined'}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handlebuttonclick}>{ isEditing ? 'Save':'Edit'}</button>
          </li>)
}