// for example if we want to store a names of 5 students in a class and there marks also
let classes =["Virat","Ab Devilliers", "Ms Dhoni", "Sachin", "Rohit"];
// In object key was mainly matters where as in arrays position/index.

console.log(classes);
console.log(classes.length);
const index = classes.findIndex((item)=>{
    return item === 'Sachin';
});

console.log(index);

for(let idx =0;idx<classes.length;idx++){
    console.log(classes[idx]);
}

//for-of loop 
for (let cricketer of classes){
    console.log(cricketer);
    //we can print with properties also
    console.log(cricketer.toUpperCase());
}

// For a given array with marks of students --> [85,97,44,37,76,60] 
// find average of entire class.

let students = [85,97,44,37,76,60];
let sum=0;
for(let i=0;i<students.length;i++){
    
    sum = sum + students[i];
}
let avg = sum/students.length;
console.log("average of students marks are ",avg);
