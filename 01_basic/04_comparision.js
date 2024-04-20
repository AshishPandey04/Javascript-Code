console.log(2>1)
console.log(2>=1)
console.log(2==1)
console.log(2<1)

//do not compare different data type  becuase it gives unpredectable result 
// console.log("2">1);
// console.log("02">1);
// console.log("2">"1");
// // console.log(2>"1"); 



console.log(null>0);
console.log(null>=0);
console.log(null==0);
// the reason is that an equality check ==,and < > work differently from <= >=.
// comparision convert null to a number , treating as 0, thats why null>=0 is true and null>0 is false

console.log(undefined==0);
console.log(undefined>=0);


// === strict check , check equality and also the datatype
console.log("2"===2);