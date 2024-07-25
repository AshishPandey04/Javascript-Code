
const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // Database call , cryptography , network

    setTimeout(function(){
      
        console.log("Async task completed")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 ");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Ashish",email:"Ashish@gmail.com"});
    },1000)
})
promiseThree.then(function(e){
console.log(e);
})


const promiseFour=new Promise(function(resolve,reject){
setTimeout(function(){
    let error = true;
    if(!error){
        resolve({username:"ASh",password:"123"})
    }
    else{
        reject("ERROR: something went error")
    }
},1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);

}).catch(function(e){
    console.log(e);
}).finally(()=>console.log("The promise is either resolved orrejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"JAVASCRIPT",password:"123"})
        }
        else{
            reject("ERROR: JS went error")
        }
    },1000)
})


async function conseumePromiseFive(){
   try {
    const response= await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }

}
conseumePromiseFive();



// async function getALLusers(){
//    try {
//     const response = await fetch('https:\\jsonplaceholder.typicode.com/users');
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
// }

// getALLusers();

fetch('https://api.github.com/users/AshishPandey04')
.then((response)=>{
    return response.json()
})
.then((data)=> console.log(data))
.catch((error)=> console.log(error))

