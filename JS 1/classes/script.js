let student = {
    FullName : "ChaitanyaBejjanki",
    Marks:74.5,
    PrintMarks: function(){
        console.log("Yours Marks is :",this.Marks); //student.marks 
    },
};

// using of prototype
const employee = {
    calavg(){
        console.log("the avg is 51.16")
    }
};

const karannair = {
    runs:4000,
    calavg(){
        console.log("the avg is 75.8%");
    }
};

const virat = {
    runs:37000
};
const sachin = {
    runs:50000
};
const MSD = {
    runs:27000
};

karannair.__proto__ = employee;
virat.__proto__ = employee;
sachin.__proto__ = employee;
MSD.__proto__ = employee;

class Toyotacar{
    constructor(brand){
        console.log("new object created");
        this.brand = brand;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    // setBrand(brand){
    //     this.brandName = brand;
    // }
}

let rav4 = new Toyotacar("rav4");
// rav4.setBrand("rav4");
let fortuner = new Toyotacar("fortuner");
// fortuner.setBrand("fortuner");

class Parent{
    hello(){
        console.log("Hello Hi Are You");
    }

}

class Child extends Parent{

}

let obj1 = new Child();

class Person {
    constructor(name){
        this.name = name;
        // console.log("homo sapiens");
        this.species = "homo sapiens";
    }
    eat(){
        console.log("Eat ")
    }
    sleep(){
        console.log("It's time for your sleep");
    }
}

class Engineer extends Person{
    constructor(name){
        super(name); // to invoke parent class constructor
        // this.name=name;
    }
    work(){
        console.log("start working, build some code for client");
    }
}

let engobj = new Engineer("chaitu");