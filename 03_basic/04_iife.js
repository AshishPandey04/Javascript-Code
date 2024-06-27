// immediately invoked function expressions

// we use iife bacause 1) for immediately excution of function ,2) to not get polluted by global scope


// function chai(){
//     console.log(`db connected`);
// }
// chai() // yeha bhi immediate  excution ho rha par pollution dur nahi ho rha 


(function chai(){
    //named iife : kyuki function ka naam hain
    console.log(`db connected`);
})() ; 
// use semicolon to end this varna next iife error show karega


// ()() yeha first parenthesis mein hum function likhenge aur dusra ho gya excution call.

( (name)=>{
    console.log(`db connected two ${name}`);
})( 'ashish') 