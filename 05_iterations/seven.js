
const myNumbers =[1,2,3,4,5,6,7,8,9,10]

//  const newNums=myNumbers.map((num)=>num+10 )

// map is  similar to filter



// const newNums = []
// myNumbers.forEach((num)=>{
//     num = num +10
//     newNums.push(num)
// })



//  console.log(newNums);



// chaining 

const newNums = myNumbers
         
         .map((num)=> num*10)
         .map((num)=> num+1)
        .filter((num)=> num>40)

console.log(newNums);

