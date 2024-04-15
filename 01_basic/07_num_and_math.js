
// Decleration and intialization of number
const score = 400 
console.log(score);


// decleration and intialization of number using object , which explicitly set the datatype to number .

const balance = new Number(100.238942)
console.log(balance);



// changing number into string
console.log(balance.toString());
// Since, now it is converted into string , thus we can apply all the string methods to it .

console.log(balance.toString().length);

console.log(balance.toFixed(2)); // the value indicate the number of decimal places the input will have and it also round of the digits.


const otherNumber=12.789
console.log(otherNumber.toPrecision(3));

const hundreds=10000000
console.log(hundreds.toLocaleString());// american standards
console.log(hundreds.toLocaleString('en-IN'));// indian

//  +++++++++++++++++++++MATHS+++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));//give a positive outcome
console.log(Math.round(4.3));// round of the value to integer (no decimal place)
console.log(Math.round(4.6));
console.log(Math.ceil(2.2));// round of the value to next integer
console.log(Math.floor(2.9));// round of the value to previous integer
console.log(Math.sqrt(9));// finds square root 

console.log(Math.min(3,5,1,7,5));// finds min. value from the array 
console.log(Math.max(3,5,1,7,5));// finds the max. value from the array

console.log(Math.random());// it gives random values b/w 0 to 1 , where both 0 and 1 is not included
console.log(Math.floor(Math.random())); // math.floor will round of the value to lower integer value
console.log(Math.floor(Math.random()*10)); // multiplying 10 with math.random  will shift the decimal point to left side by one place, will have range b/w 0 to 10 , where 0 is included and 10 is exclusive
console.log(Math.floor(Math.random()*10) +1); // adding 1 with change range from 1 to 10 , now 10 is included.

// trick or formula for having random value b/w any range , very helpful while making a game on ludo and many more.

const min = 10 
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);
