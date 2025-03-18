let fooditems = ["potato", "apples","tomato"];
// we can add at console as 
// fooditems.push("chips"); like wise
// we can multiple items also like fooditems.push("chips","chocos","sweets");

// fooditems.pop();
// then it will remove last elemnt from js

//  we can return deleted value also as 

let delvalue = fooditems.pop();
console.log("deleted",delvalue);
console.log(fooditems);
// toString used to convert an array into string
console.log(fooditems.toString());


let rcb = ["virat","siraj","abd","patidar"];
let lsg =["rahul","pooran","paddikal"];

let ipl = rcb.concat(lsg);
console.log(ipl);