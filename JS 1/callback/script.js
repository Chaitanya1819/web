// function sum(a,b) {
//     console.log(a+b);
// }

// function calc(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calc(18,17,sum);

// //callback example 
// const hello = ()=>{
//     console.log("Hello! Hi How Are You?")
// }

// setTimeout(hello,3000);
//this is example of callback hello function output will print after 3 sec


//using callback hell
// function getdata(data){
//     setTimeout(()=>{
//         console.log("your data is",data);
//     },2000);
// }

//using callback

function getdata(data, getNextdata){
    setTimeout(()=>{
        console.log("your data is",data);
        if(getNextdata){
            getNextdata();
        }
    },2000);
}

// we can declare a callback function in function like wise 
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3);
    });
});