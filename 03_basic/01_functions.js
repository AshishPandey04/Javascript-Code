
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

function addTwoNumber(num1, num2) {
    //   console.log(  num1+num2);
    // let result= num1+num2
    // return result

    return num1 + num2
}

// addTwoNumber(3,4)
const result = addTwoNumber(3, 4)
// console.log("result:", result);

function loginUserMessage(username){
    if(!username){         
    
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Ashish"))
console.log(loginUserMessage())