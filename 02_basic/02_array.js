const marvel_heroes=["spiderman","hulk","ironman"]
const dc_heroes=["superman","batman","flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]); // not a good practise . 

// const newArr=  marvel_heroes.concat(dc_heroes)
// console.log(newArr);

// spread operator
const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);

const another_array= [1,2,3,[4,5,6],7,8,[9,10,[0,3]]]
const real_another_array= another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("ashish"));
console.log(Array.from("ashish"));
console.log(Array.from({name:"ashish"})); // object ke kiss attribute ka array banana hain specifyt karna hota hain , varna empty array return hoga , 


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));