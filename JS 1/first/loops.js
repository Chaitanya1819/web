//for loop
let sum =0;
for(let i=1;i<=6;i++){
sum = sum +i;
console.log("HI Aravind");
}
console.log("sum is equal to",sum);

//while loop
let j =1;
while(j<=5){
    console.log("Hello naruto");
    j++;
}

//do-while loop
let k = 1;
do{
    console.log("Hello saksuke");
    k++;
}while(k<=5);

//for-of loop
let str="Narutoshippuden";
let size =0;
for(let l of str){
    console.log("l=",l);
    size++;
}

console.log("string size=",size);

let student= {
    name: "Chaitanya",
    age:20,
    cgpa:8.9,
    ispass:true
};

for(let key in student){
    console.log("key=",key,"vale=", student[key]);
}