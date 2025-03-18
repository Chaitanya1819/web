// declaring variables
// The var keyword was used in all JavaScript code from 1995 to 2015.

// The let and const keywords were added to JavaScript in 2015.

// The var keyword should only be used in code written for older browsers.
// constant we will not able to change it
const age =18
// console.log(age)
console.log("Age =", age)
//var we are able to change values 
var my_age =12
my_age = 14
console.log("my_age =:", my_age)
// let 
let score = 30
score = 100
console.log("virat scored runs =", score)

//string
let username = 'Ab Deviliers'
console.log(username)
let greeting ='welcome '+username
console.log(greeting)

// number
let userage = 20, usernumber ='18'//number added as string
console.log(userage+18)
console.log(usernumber+19)
//boolean (True or False) & On or Off
is_qualified = false

//null
let user_bio = null  //no data has been assigned to it

//undefined
// console.log(myusername)

//naming variable
// username  
// When to Use var, let, or const?
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.