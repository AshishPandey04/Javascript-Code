
function sayMyName() {
    console.log("A");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("s");
    console.log("h");
}
// sayMyName   yeh hain function ka reference

// sayMyName() // execution


// function addTwoNumber(num1,num2){
//   console.log(  num1+num2);

// }
// addTwoNumber(9,4)




function addTwoNumber(num1, num2) {
    //   console.log(  num1+num2);
    // let result= num1+num2
    // return result

// function mein return ke baad koi bhi code likha ho within function woh execute nahi hoga 
// console.log("asas");

    // return num1 + num2 
}


// const result = addTwoNumber(3, 4)
// console.log("result:", result);

function loginUserMessage(username){
    if(!username){         
    
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}
function loginUserMessage(username="sam"){//defualt value in this case fark nahi parta hain user username de ya na de , agr nahi dega toh sam is the username .
    if(!username){         
    
        // console.log("please enter a username");
        return
    }

    // return `${username} just logged in`
}

// console.log(loginUserMessage("Ashish"))

console.log(loginUserMessage()) // jab kuch nahi pass karte hain toh undefined aata hain username , undefined ata hain


function calculateCartPrice(val, val2, ...num1  ){// ... is a rest operator use to take many values as input
    // this method is use to take many prameter in function

    return num1

}

// console.log(calculateCartPrice(200,300,400,4222));


const user={
    username:"ash",
    price:211
}
function handleObject(anyobject){
    
    console.log(`username is ${anyobject.username} and price is ${anyobject.price }`);

}

// handleObject(user)
// handleObject({
//     username:"var",
//     price:399
// })


const newArray=[200, 400, 243,439]

function returnSecondValue(getArray){

    return getArray[1]

}

// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([3,2,5,2,2]));





