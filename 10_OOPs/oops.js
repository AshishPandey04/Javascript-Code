
const user ={ //object literal means creating a object literally
    username:"Ashish",
    loginCount:5,
    signedIn:true,

    getUserdetails:function(){
        // console.log("Gor user details");
        // console.log(`username:${this.username}`);
        console.log(this);
    }
}

// console.log(user.username)
// console.log(user.signedIn)
// user.getUserdetails();
// console.log(this );


// const promiseOne=newPromise()
// const date = new Date()
// new is the constructor fun (yeh humko yeh allow karta hain ki wk object ke diffrent instances bna paaye 
// it is similar to C++ , where we can create many objects dependend on one class)



function User(username, loginCount,isLoggedIn){
    this.username=username // isme left side wala variable hain
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }
    return this
}

const userOne =new User("hitesh",12,true)

// const userTwo= User("ash",23,false)
const userTwo= new User("ash",23,false)
console.log(userOne.constructor);
// console.log(userTwo);

// when we use new ek naya object create hota hain
// step 2 ek constructor fn call hota hain  new key word ke karan aur yeh jitne bhi arguments hain sabko objects meon pack kar ke de deta hain
// step 3 jinte this ke andar hain woh constructor mein chale jate hain fir hame mil jate hain


//instanceof 