


export default function GameBoard({onSelectSquare,board}){
  

    
// const [gameBoard,setGameBoard] = useState(initalGameBoard);
// function handleSelectSquare(rowIndex,colIndex){
//     setGameBoard((prevGameBoard)=>{
//         const updatedBoard =[...prevGameBoard.map(row=>[...row])];
//         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//         return updatedBoard;

//     });
//     onSelectSquare();
// }
    return <ol id ="game-board" className="highlight-player">
        {board.map((row,rowIndex)=> (
            <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex) =>( 
                    <li key ={colIndex}>
                        <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}


    {/* <li>
        <ol>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </li>
    <li>
        <ol>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </li>
    <li>
        <ol>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </li>
     */}
    </ol>
}