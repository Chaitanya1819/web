//creating functions
function greetings(){
    let username = "virat kohli"

    console.log("Welcome"+" "+username)
}


//calling function
greetings();

//Arrow function
let greeting = () => {
    let user= "Ab Devilliers"
    console.log(user)
}

function countvowels(word){
    let count = 0;
    for(const char of word){
        if(char ==='a' || 
           char ==='e' || 
           char ==='i' || 
           char ==='o' || 
           char ==='u' ){
            count++;
        }
    }

    console.log(count);
}