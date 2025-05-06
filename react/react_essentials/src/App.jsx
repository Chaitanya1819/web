import Header from "./components/Header.jsx";
import Userinput from "./components/Userinput.jsx"
import Results from "./components/Results.jsx";
import { useState } from "react";

import './index.css';
function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration: 10,
});
const inputIsValid = userInput.duration>=1;
function handleChange(inputIdentifier ,newValue){
  setUserInput((preUserInput)=>{
      return{
          ...preUserInput,
          [inputIdentifier]:+newValue
      };
  });
}

  return ( <div>
    
    <Header />
    <Userinput userInput= {userInput} onChange = {handleChange}/>
    {!inputIsValid && <p className="center">Please enter  a valid input data of year greater than 0</p>}
    {inputIsValid &&<Results input= {userInput}/>}
    </div>
  );
}

export default App
