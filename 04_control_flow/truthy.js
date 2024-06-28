const useremail="a@ashis.ai"

if(useremail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}



// falsy values 
// false,0,-0,Biginy 0n, "", null,undefined,NaN


// truthy value 
// "0",'false', " ", [],{},function(){},

const array=[]
if(array.length===0){
    console.log("empty array");
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("empty object");
}





// Nullish Coalescing Operator(??): null undefned

let cal1;

// cal1=5 ?? 10
// cal1= null ?? 
// cal1=undefined ?? 15

cal1= null?? 10 ?? 15


console.log(cal1);




// Terniary operator

condition ? true : false


const a=32

a>=30 ? console.log("greater than 30") : console.log("less than ");