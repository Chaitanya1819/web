//length
let greeting = "Welcome to my first project of jk"
console.log(greeting.length)
//uppercase
let upp = greeting.toUpperCase()
console.log("uppercase ="+upp)
//lowercase
let low =greeting.toLowerCase()
console.log("lowercase ="+low)
//index of character

console.log("index of o  is ="+greeting.indexOf('o'))
//slicing
console.log("slicing of a greeting is"+greeting.slice(0,9))

//another way to use slicing
email ='viratwinipl2025@gmail.com'
userName =email.slice(0,email.indexOf('@'))
console.log(userName)
//split
console.log(greeting.split(' '))
//for example 
fruits = 'Banana,Orange,Apple,mango'
console.log(fruits.split(','))

//number
let num = 45
console.log("Using number string ="+num.toString()+35)

//replace
console.log(greeting.replace('jk','java'))