let score = "33abc"
console.log(typeof score);
// console.log(typeof(score));//  can also write like this , in this case it is called method as it is written b/w parenthesis.

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // Nan (not a number)

// "33"=> 33
//"33abc"=>NaN(not a number)
//true=>1;false=>0
//undefined=>NaN
// null=>0


let isLoggedIn = "ashish"  

let booleanIsLoggedIn = Boolean(isLoggedIn) 
console.log(typeof booleanIsLoggedIn) 
console.log( booleanIsLoggedIn)

// 1=> true ; 0=>false
//""=> false
//"ashish"=> true

let someNumber= 33
let stringNumber= String(someNumber)
console.log(typeof stringNumber)
console.log( stringNumber)


let bigIntNumber= BigInt(someNumber)
console.log(typeof bigIntNumber)
console.log( bigIntNumber)

// ****************Operations*********************

let value=3
let negValue= -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); //power
console.log(6/1);
console.log(6%4);

let str1="hello"
let str2=" ashish"
let str3= str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");// pehla aur dusra number add ho ja rha , fir pta chala tisra string hain , so ab woh kuch nahi kar sakte isliye unhone string ko bhi number maan liya .

console.log(+true);// adding + gives the answer in binary . i.e 1 
console.log(+"");


let num1, num2,num3

num1=num2=num3=2+2
console.log(num1);

let gameCounter=100
let x=gameCounter++;
console.log(x);
console.log(gameCounter)


