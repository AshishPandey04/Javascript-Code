//Array 

const Arr = [1,2,4,2,5,"heje"] // in js array can have defferent types of value.
console.log(Arr);

const Arr2 = new Array(1,2,3,2,true)
console.log(Arr2);
console.log(Arr2[3]);

const heroes =["shaktiman", "mr.india"]
console.log(heroes.length);

// Array methods


Arr2.push(34)
Arr2.push(43)
Arr2.push("fhei")
console.log(Arr2)

Arr2.pop()
console.log(Arr2)

Arr2.unshift(0) // add element to starting of an array 
Arr2.shift() // remove element from starting of an array 
console.log(Arr2)


console.log(Arr2.includes(12))// does array includes the key , give a boolean return , questionary method
console.log(Arr2.includes(2))


console.log(Arr2.indexOf(2))// returns the index of the  first occurance of the value inside parenthesis.
console.log(Arr2.indexOf(12))

const newArr=Arr2.join()//Adds all the elements of an array into a string, separated by the specified separator string.
console.log(Arr2);
console.log(newArr); 
console.log(typeof newArr); 


// slice , splice 

console.log("A", Arr2);
const myn1=Arr2.slice(1,3) // here slice print from index number 1 to 3 where 3 is not included, 
// ** slice do not remove any element or doesn't change the actual array.
console.log(myn1);

console.log("B", Arr2);
const myn2=Arr2.splice(1,3)// here element of 3rd index is also included
// ** splice remove the elements from the actual array, it manupuilates original array 
console.log(myn2);
console.log("C",Arr2);








//The Array.prototype.filter() method in JavaScript is used to create a new array with all elements that pass a test implemented by the provided function. It does not modify the original array but returns a new array with the elements that satisfy the condition.

// let newArray = array.filter(callback(element, index, array));




// The Array.prototype.reduce() method in JavaScript is used to execute a reducer function on each element of the array, resulting in a single output value. This method is often used for summing values, finding averages, or combining elements into a single object or array.
// let result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);