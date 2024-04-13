// JS is a dynamically typed language , beacuse type checking takes place during runtime or execution time . In simple words we do not need to mention datatype of variable when it is declared. 

// datatypes are divided into two types based on how they are stored in memory and how they are accessed . 
// 1)primitive 
// 2)non-primitive

// # primitive( based on call by value )
        //    7 types: String, Number, Boolean, null , undefined, BigInt, Symbol

const id=Symbol('123')
const id2 = Symbol('123')

console.log(id === id2);
// symbol having value still are different 


const bigNumber = 13123323234566664646664n
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