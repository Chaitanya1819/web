// let age = 17;
// let result = age >= 18? "adult":"notadult";
// console.log(result)
//get user to input a number using promt ("Enter a number":) check if a number is multiply of 5 or not? 
// let num = prompt("Enter a Number:");
// console.log("your entered number is",num);
// if(num%5 === 0){
//     console.log("it will divided by 5");
// }
// else{
//     console.log("Number is not multiple of 5");
// }
let score =prompt("Enter a number :");

if (score >= 80 &&  score<=100){
    console.log("you got A grade and your score is =",score);
}
else if (score >= 70 &&  score<=79){
    console.log("you got B grade and your score is =",score);
}
else if (score >= 60 &&  score<=69){
    console.log("you got C grade and your score is =",score);
}
else if (score >= 50 &&  score<=59){
    console.log("you got D grade and your score is =",score);
}
else if(score >= 0 &&  score<=49) {
    console.log("you got E grade and your score is =",score);
}
else{
    console.log("please enter scorebetween  0 to 100");
}