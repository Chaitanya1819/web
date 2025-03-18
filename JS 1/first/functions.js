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

greeting()
//Argurements, returning a value

let calculate = (x,y) =>{
    console.log("x is ",x)
    console.log("y is ",y)
    return x*y
}
// we can write above function short cut as 
// let calculate = (x,y) => x * y
let total = calculate(20,5)
console.log("x*y is "+total)

let welcome = (userName) => "welcome"+" "+ userName
let userName ="Maxwell"
let welcomeuser = welcome(userName)
console.log(welcomeuser)

const printhello = () =>{
    console.log("Hello Rahul");
};

function sum(a,b) {
    return a+b;
}

function mul(a,b) {
    // return a*b;
    console.log("a*b ="+ a*b);
}

let mularr = (a,b) => {
    console.log(a*b);
}

// we can also return values in arrow functions

const arrmul = (a,b) =>{
    return a*b;
}

function myfunc(num) {
    return num;
}
// it is common we can use function to use parameteres and we can return that parameter

// in same if we create another function
function abc(){
    console.log("hello");
}

// we can use that function as a parameter
function myFunc(abc){
    return abc;
}

// A call back is a function passed as an argument to another function.

let arr = [1,2,3,4,5];
arr.forEach(function printval(val) {// use of value parameter is value at each index
    console.log(val);
})

let array = [18,17,19];

array.forEach((val) => {
    let num =val*val;
    console.log(num);
});

function vowelcnt(str){
    let count=0;
    for(const char of str){
        if( char === "a"||
            char ==="i" ||
            char ==="e" || 
            char ==="o" || 
            char ==="u"){
            count++;
        }
    
    }
    console.log("no of vowels in a given string is ="+count)
}
let nums = [43,54,66];

nums.map((val) => {
       console.log(val);
});


let newArray = nums.map((val) => {
    return val;
}); 
console.log(newArray);

const a1 = [1,3,4,5,6];

const opt= a1.reduce((res,cur)=>{
    return res+cur;
})
console.log(opt);

// WAP to return students who scored greater than 90 + score using filter method
let marks =[87,94,93,76,99,100,89];

let output = marks.filter((val)=>{
    return val>90;
});
console.log(output);

//wap to take  a number n as input from user. create an array of numbers from 1 to n.
// use the reduce method to calculate sum of all numbers in array
//use the reduce method to calculate product of all numbers in array
let n = prompt("enter a number=");

let arrn =[];

for(let i=1;i<=n;i++){
    arrn[i-1]=i; //1(0), 2(1),3(2)  it means 1  is stored in 0 index viceversa.
}
console.log(arrn);

let sumn = arrn.reduce((res,cur)=>{
    return res+cur;
});

let factorial = arrn.reduce((res,cur)=>{
    return res*cur;
})
console.log(sumn);
console.log(factorial);