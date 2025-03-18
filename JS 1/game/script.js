let userScore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msgscr = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compuscore = document.querySelector("#comp-score");

choices.forEach((choice)=>{
    // console.log(choice); //printing all divs
    choice.addEventListener("click",()=>{
        // console.log("choice was clicked",choice.getAttribute("id"));   //for need to know id name also for that particular class
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});
const genCompchoice = ()=>{
    const options =["rock","Paper", "scissors"];
    //ock paper scissors this method is used for a function randomly needs to select any one
    const rdmidx= Math.floor(Math.random()*3);
    return options[rdmidx];
};

const drawGame= () => {
    // console.log("Game Was Drawn");
    msgscr.innerText= "Game was Drawn, Play Again";
    
    msgscr.style.backgroundColor ="black";
}


//need to create another function for comp needs to show output
const playgame = (userchoice)=>{
    console.log("userchoice =", userchoice);
    const compchoice = genCompchoice();
    console.log("compchoice =", compchoice);
    // 
    if(userchoice === compchoice){
        drawGame();
    }else{
        let userWin = true;
        if(userchoice === "rock"){
            //paper,scissors
            userWin = compchoice ==="paper" ? false : true;
        }else if(userchoice ==="paper"){
            //scissors,rock
            userWin = compchoice === "scissors" ? false : true;
        }else{
            //rock,paper
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin,compchoice,userchoice);
    }
};

const showWinner = (userWin,compchoice,userchoice) =>{
    if(userWin === true){
        userScore++;
        userscore.innerText= userScore;
        // console.log("you win!");
        msgscr.style.backgroundColor= "green";
        msgscr.innerText =`You win!  ${userchoice} beats ${compchoice}`;
    }else{
        compscore++;
        // console.log("you lose");
        compuscore.innerText = compscore;
        msgscr.innerText = `You Lose ${compchoice} beats your ${userchoice}`;
        msgscr.style.backgroundColor ="red";
    }
};

