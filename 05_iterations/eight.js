// reduce 

const myNums =[1,2,3]

let intialValue = 0;

// const Ans  = myNums.reduce(function( acc , currentValue){
//     console.log(`acc:${acc} and currentValue :${currentValue}`);
//     return acc+currentValue
// },intialValue)


const Ans  = myNums.reduce(( acc , currentValue)=> {
    console.log(`acc:${acc} and currentValue :${currentValue}`);
    return acc+currentValue
},intialValue)

console.log(Ans);