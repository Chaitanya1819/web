let user= {
    name:"chaitu",
    age: 24,
    greet(){
        console.log("Hello");
    }
}

class User {
    constructor(name,age){
        this.name =name,
        this.age = age
    }
    greet(){
        console.log("Hello Hi How are you?");
    }

}

let user1 = new User("virat",37);
console.log(user1);
user1.greet();

// destructering
const [firstName, lastName] = ["Virat","Kohli"];
// we can write like above instead of
// const arr = ["Virat","Kohli"];
// const firstName = arr[0];
// const lastName = arr[1];
console.log(firstName,lastName);

//for objects also we can write like this

const {name:userName, age} ={
    name:"chaitu",
    age:23
};

console.log(userName);
// const user= {
//     name:"chaitu",
//     age:23
// }

// const name =user.name;
// const age = user.age;

//spread operator 
const rcb =["virat","ABD","Maxi","Yuzi"];

const csk = ["dhoni","Faf","jaddu"]
const mteams = [rcb,csk];
const mergeteams = [...rcb,...csk];
console.log(mteams);
console.log(mergeteams);

const extendedUser = {
    isadmin : true,
    ...user
}
console.log(extendedUser);