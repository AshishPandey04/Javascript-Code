// obejct can be declered in two ways 1)object literals (normal form) 2)by using construction i.e called singleton since it is unique 
// Object.create is used to when using construction . 

// Object literals 

const mySym=Symbol("key1")
const JsUser={
    name:"ASHISH",
    "full name":"Ashish Kumar Pandey",
    mySym:"myKey1",// wrong way , output aajayega but iska datatype symbol nahi rha , string ki tarah hoga  
    // to use it like symbol use square bracket.
    [mySym]:"mykey2",
        age:21,
    location:"Jaipur",
    email:"ashish@google.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);// can't be accessed by '.' operator
console.log(JsUser.mySym);
console.log(typeof( JsUser.mySym));
console.log(JsUser[mySym]);// symbol can only be acssed by square bracket

JsUser.email="abhi@google.com"
console.log(JsUser.email);
// Object.freeze(JsUser) // now any change will not apply.
JsUser.name="abhi"
console.log(JsUser.name);
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
   
}
console.log(JsUser.greeting()); 

JsUser.greeting2= function(){
    console.log(`hello JS user , ${this.name}`);
   
}

console.log(JsUser.greeting2()); 