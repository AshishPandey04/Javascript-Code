
// var c =300
let a=300
if(true){
    let a=10
    const b = 20 
    // var c= 30
    // d=32
    // console.log(a);

}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);



function one(){
    const username="Ashish"

    function two(){
        const website ="youtube";
        // console.log(username);
    }
    // console.log(website);

    two()
}
one()



//*******************INTERSTING**************** */

console.log(addOne(5));
function addOne(num){
return num+1
}



addTwo(5) //error when function in this way and tried to excess before
const addTwo = function(num){ 
    return num+2
}

// addTwo(5)