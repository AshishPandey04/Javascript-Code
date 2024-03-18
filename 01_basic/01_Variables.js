// VARIABLES IN JAVASCRIPT

/*
const is used for a constant value 
When using const , variable is  required to be intialised at the time of declaration 
value cannot be changed further 
*/

/* 
Prefer not to use var 
bacause of issue in block scope and functional scope

 var is used in old browser 
*/

/*
 let is used when u don't want the value to be constant.
when using let , u can intialised the variable even after decleration  . 
 u can also change value of variable when using let 
*/

/*
In Javascript , a variable can be declared without using either of let , var or const . 
but it is not a good practice .
*/

const accountId = 1231
// accountId = 2 // not allowed as it is const 
console.log(accountId);


let accountEmail ="ajdsiwe@gmil.com"
var accountPassword = "12121"
accountCity ="Jaipur"
let accountState 

accountEmail="anhncna@gmaol.com"
accountPassword="24234"
accountCity="delhi"
accountState=1

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])




