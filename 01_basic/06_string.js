0const name="Ashish"
const repoCount= 50

console.log(name + repoCount + " Value");

console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName= new String('Ashish Kumar pandey')

console.log(gameName[0]);
console.log(gameName[6]);
console.log(gameName[8]);
console.log(typeof gameName);
console.log(gameName.__proto__); // prototype {}=> object.
console.log(gameName.length);
console.log(gameName.toLocaleLowerCase());
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(11));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 8)// 8 excluded
console.log(newString);

const anotherString = gameName.slice(-15, 9) // both excluded
// minus value piche se count hoga aur positive value samne se (starting index, end index)
console.log(anotherString);


const newStringOne = "     Ashish   "
console.log(newStringOne);
console.log(newStringOne.trim()); // spaces hta deta hain jo meaning less hain. That is starting space and end space remove kar deta hain

const url = "htpps://ashish.com/ashish%20pandey"
console.log(url.replace('%20', '_'));
console.log(url.includes('ashish'));
console.log(url.includes('abhi'));

console.log(gameName.split(' ')) // split based on dash but it can be based on any value.
console.log(gameName.split('h')) // split based on dash but it can be based on any value.
let fruit = "mango"
console.log(fruit.italics());
console.log(fruit.bold());





