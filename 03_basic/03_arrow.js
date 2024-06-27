
const user={
    username:"ashish",
    price:999,

    welcomeMessage: function(){
console.log(`${this.username}, welcome to website`)
console.log(this)
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

console.log(this);    // on node output is {} i.e empty object Whereas in browser  it is window . 



// function Chai (){
//     let username="ash"
//     console.log(this.username);
// }
// Chai()




// const chai =  function(){
//     let username="ash"
//         console.log(this.username);
// }

// chai()



// const chai =  () =>{
//     let username="ash"
//         console.log(this.username);
// }
// chai()

// conat addTwo =(num1,num2) => {
// rewturn num1+num2

// }

// const addTwo =(num1,num2) =>  num1+num2


// const addTwo =(num1,num2) =>  (num1+num2)


const addTwo =(num1,num2) =>  ({username:"asd"}) // object ko return krne ke liye




console.log(addTwo(3,5))




