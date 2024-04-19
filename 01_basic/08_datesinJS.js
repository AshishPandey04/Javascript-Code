// dates 

let Mydate = new Date()
console.log(Mydate); // BAHUT AJEEB SA OUTPUT DE RHA THAT IS NOT UNDERSTANBLE BY US . 
// so LETS TRY TO CHANGE THE OUTPUT TO STRING. 

console.log(Mydate.toString());// provide both date and time (time according to universal time)
console.log(Mydate.toDateString());// only gives date 
console.log(Mydate.toISOString()); 
console.log(Mydate.toJSON());// return similar value to ISO string.A string representing the given date in the date time string format according to universal time, or null when the date is invalid.
console.log(Mydate.toLocaleDateString());// gives only date but in numeric form eg 2/3/24 (mon/date/year)
console.log(Mydate.toLocaleString()); // gives both date and time in numeric form .(according to universal time)(mon/date/year)

// Date is an object in js . so typeof => object.



// // let myCreatedDate= new Date('April 19, 2024 11:37:32 UTC')
let myCreatedDate= new Date("04-19-2024") //(mon/date/year)

// let myCreatedDate= new Date(2024,3,19,11,43,23) //Date(year: number, monthIndex: number, date?: number | undefined, hours?: number | undefined, minutes?: number | undefined, seconds?: number | undefined, ms?: number | undefined)
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toString());


//TIME
let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor( Date.now()/1000));// to convert time value from ms to sec . usually we get value in ms . 

let newDate= new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getDay());//day's index. starting from monday(1) 
console.log(newDate.getMonth());// gives month's index
console.log(newDate.getMonth()+1);// to get normal month number

newDate.toLocaleString('default',{
    weekday:"long" // use ctrl+space to see all the options.
})// by doing this we can customize the output . can do for one and more than one property