// let newh = document.querySelector("#headt");
// console.dir(newh.innerText);
// newh.innerText = newh.innerText+" from apna college students";

// let divs = document.querySelectorAll(".box");
// let idx=1;
// for(div of divs){
//     div.innerText = `unique value of ${idx}`;
//     idx++;
// }
// console.log(divs[0].innerText);

// let newd = document.querySelector("div");
// console.log(newd.style.backgroundColor = "green");
// console.log(newd.getAttribute("class"));
// console.log(newd.setAttribute("class","Newclass"));

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// console.log(newBtn);

// let newd = document.querySelector("div");
// newd.append(newBtn);
// newd.prepend(newBtn);
// newd.after(newBtn);
// newd.before(newBtn);
// newd.remove();

//qs1
let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.color="white";
newBtn.style.backgroundColor = "red";

let newb = document.querySelector("body");
newb.prepend(newBtn);

//qs2
let ncl = document.createElement("class");
ncl.innerText ="newclass";

let p = document.querySelector("p");
p.append(ncl);