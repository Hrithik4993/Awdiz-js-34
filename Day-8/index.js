// push example
var number= [1,2,3,4,5];
number.push(6);
console.log(number);

// pop example
var number=[1,2,3,4,5,6];
number.pop(6);
console.log(number);

// shift example
const name=["amit","suraj","rohit"];
name.shift();
console.log(name);

// unshift example
let colors=["red","yellow","orange"];
colors.unshift("blue");
console.log(colors);

// map example
let productprice=[500,1000,1500];
let pricewithgst=productprice.map((price)=>price*1.18)
console.log(productprice,"withoutgst");
console.log(pricewithgst,"pricewithgst")

// filter example
const numbers=[1,2,3,4,5,6];
const evennumbers= numbers.filter((numbers)=>numbers%2===0);
console.log(evennumbers,)
