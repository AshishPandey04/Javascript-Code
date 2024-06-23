// JS is a dynamically typed language , beacuse type checking takes place during runtime or execution time . In simple words we do not need to mention datatype of variable when it is declared. 

// datatypes are divided into two types based on how they are stored in memory and how they are accessed . 
// 1)primitive 
// 2)non-primitive

// # primitive( based on call by value )
        //    7 types: String, Number, Boolean, null , undefined, BigInt, Symbol

const id=Symbol('123')
const id2 = Symbol('123')

console.log(id === id2);
// symbol having same value still are different 


const bigNumber = 131646664n
// for BigInt just write n at last




    // # non- primitive 0R reference (call by reference )
         // Array, Object , function


// # array
    const heros =["shaktiman","doga", "ashish"]

// # object
let myObj= {
    name:"ashish",
    age:22,

}

//# function
const myFunction = function(){
    console.log("Hello World");
}
// console.log(myFunction())
myFunction()


// # to find or know datatypes 

console.log(typeof id2);
console.log(typeof heros);
console.log(typeof bigNumber);
console.log(typeof myObj);
console.log(typeof myFunction);

//  result of typeof 

// for null => object 
// or others it will be simple
// for array => object
// Functions are objects, but typeof treats them as a special case and thus return function


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory is of two types : Stack and Heap

// stack memory is used for primitive datatype
// heap => non- primitive

// jab bhi stack use hota hain tab variable ki copy milti hain , aur heap ke case me reference milta hain  original variable ka 

// STACK

let myYoutubename="Ashishkumar"

let anothername = myYoutubename // copy 
anothername="abhishkpandey"

console.log(myYoutubename);
console.log(anothername);
// original value mein change nahi aayega kyuki ki cope jayega anothername mein . 



// HEAP

let userOne ={
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne // reference

userTwo.email="ashish@google.com"

console.log(userOne.email);
console.log(userTwo.email);