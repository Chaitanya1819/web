import { useState,useRef } from "react";
import ResultModule from "./ResultModule.jsx";

export default function TimerChallenge({title,targetTime}){
    const[timerExpired,setTimerExpired] = useState(false);
    const[timerStarted,setTimerStarted] = useState(false);
    const timer = useRef();
    const dialog = useRef();
    function handleStart (){
        
    timer.current=setTimeout(()=>{setTimerExpired(true);
        dialog.current.showModal();
    }, targetTime*1000);
    setTimerStarted(true);
    }
    function handleStop(){
        clearTimeout(timer.current);

    }
    return (
    <>
    {timerExpired && <ResultModule ref ={dialog}targetTime={targetTime} result ="loss"/>}
       <section className='challenge'>

        
        <h2>{title}</h2>
        {timerExpired && <p>You Lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime> 1? 's':''}
        </p>
        <p>
            <button onClick={timerStarted?handleStop:handleStart}>
                { timerStarted?'Stop':'Start'} Challenge
            </button>
        </p>
        <p className={timerStarted?'active':undefined}> 
            { timerStarted?'Time is Running ...':'Timer Inactive'} /Timer inactive</p>

        </section>
    </>)
}