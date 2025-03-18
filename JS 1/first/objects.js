//creating objects
let user = {
    'firstName':'Chaitu',
    'lastName':'Bejjanki',
    'email':'chaitanyabejjanki@gmail.com',
    'fullname': function(){
        return this.firstName+" "+this.lastName
    }
}
console.log(user)

//Accessing elements
let email,firstName,lastName,fullname
email = user.email
firstName =user.firstName
// we can also write like it 
firstName = user['firstName']
lastName = user.lastName
console.log("first name is :"+firstName)
// you can write like this
// console.log("first name :", firstName)
fullName = user.fullname()
console.log(fullName)

//adding and modifying elements
user.address ='3440 S Cottege grove'
console.log(user)

user.firstName="Chaitanya"
console.log(user)