import { useState,useRef } from "react";
export default function Player(){
    const playerName=useRef();
    const [enteredName,setEnteredName] = useState(null);
    // const [submitted,setSubmitted]= useState(false);
        // function handlechange(event){
        //     setSubmitted(false);
        //     setEnteredName(event.target.value);
        // }
        function handleClick(){
            console.log(playerName.current.value);
            setEnteredName(playerName.current.value);
            playerName.current.vale='';
        }
    return(
        
        <section id ="player">
            <h2>Welcome {enteredName ?enteredName:'unKnown entity'}  </h2>
            <p>
                <input 
                ref={playerName}
                // onChange={handlechange} 
                type="text" 
                // value={enteredName} 
                />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}

