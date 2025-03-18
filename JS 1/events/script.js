// let btn1 = document.querySelector("#bt1");

// // btn1.onclick =(event) =>{
// //     console.log("button was clicked");
// //     alert("Hello!");
// //     console.log(event);
// //     console.log(event.type);
// //     console.log(event.target);
// //     console.log(event.clientX,event.clientY);
// // }
// // console.log(b1);

// btn1.addEventListener("click",()=>{
//     console.log("button was clicked");
// });

// btn1.addEventListener("click",()=>{
//     console.log("button was clicked --handler2");
// });

// btn1.removeEventListener("click", ()=>{
//     console.log("button was clicked --handler2");
// });
// //to remove above arrow function we neet declare above aroow function with const
// const handler3 = ()=>{
//     console.log("button was clicked --handler3");
// }

// btn1.addEventListener("click", handler3);
// btn1.removeEventListener("click", handler3);

// let di = document.querySelector("div");

// di.onmouseover =() =>{
//     console.log("you are on inside div");
// }

let mode = document.querySelector(".toggle");

let currentmode = "light";
mode.addEventListener("click",()=>{
    if(currentmode ==="light"){
        currentmode = "dark";
        document.body.style.backgroundColor ="black";
        // document.querySelector("body").style.backgroundColor ="black";
    }else{
        currentmode="light";
        
        document.body.style.backgroundColor= "white";
    }
    console.log(currentmode);
});
