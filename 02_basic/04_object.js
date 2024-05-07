// singleton object 

const tinderUser = new Object()

tinderUser.name="Sam"
tinderUser.id="123ad"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser={
    Email:"asda@gmail.com",
    fullname: {
        userfullname:{
            firstname:"ashu",
            lastname:"pandey"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.lastname);
// console.log(regularUser.Email);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"3",4:"d"}
// const obj3 ={obj1,obj2} 

//  const obj3 =obj1+obj2

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2}

// console.log(obj3);


const user =[
    {
        id: 1,
        email : "asa@gmail.com"
    },
    {
        id: 1,
        Email: "asa@gmail.com"
    },
    {
        id:1,
        Email:"asa@gmail.com"
    },
]

// user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//OBJECT DESTRUCTURING
const course ={
    courseName:"JS in hindi ",
    price :"999",
    courseInstructor:"Hitesh "
}

console.log(course);

// course.courseInstructor
//OR
const {courseInstructor : instructor}= course
// console.log(courseInstructor);
console.log(instructor);



//JSON format  API - api can be in object format or array 
// {
//     "name":"ashish",
//     "courseName":"js ",
//     "price":"free"
// }

[
    {},
    {},
    {}
]
