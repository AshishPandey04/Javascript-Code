

const myObject = {

    js :"Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

// forin

// for (const key in myObject) {
// //    console.log(key);
// console.log(`${key} shortcut is for ${myObject[key]}`);
// }




const programming=["js","c++","css" ]

for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}
// when we use array in forin loop here key gives u index number , where as in forof loop key gives u the value .


const map=new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('IN', "India")// unique value hold karta hain map
// console.log(map);

for (const key in object) {
  
}// map is not iterable so forin canot be used/



