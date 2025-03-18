// let promice = new Promise((resolve,reject) =>{
//     console.log("This is a Promise");
//     reject("we have some error");
// });

// function getdata(data, getNextdata){
//     return new promice ((resolve,reject)=>{
//         setTimeout(()=>{
//             // console.log("data",data);
//             resolve("rejected");
//             if(getNextdata){
//                 getNextdata();
//             }

//         },2000);
//     });
// }

// const getpromise = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         resolve("123");
//     });

// };

// let promise = getpromise();
// //if promise is resolve then we can use it
// promise.then((res)=>{
//     console.log("promise fullfilled",res);
// });

// promise.catch((err)=>{
//     console.log('rejected',err);
// });

function Api(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather data");
            resolve(250);
        },3000);
    });
}

async function getweatherdata(){
    await Api();

}