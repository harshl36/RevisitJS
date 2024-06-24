const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  // console.log(`${key} : ${myObject[key]}`);
  // console.log(myObject[key]);
  //    console.log(`${key} is shortcut for ${myObject[key]}`);
}

const candidates = ["Shyam", "Ram", "Dhanram", "Ghanshyam"];
for (const key in candidates) {
  // console.log(`${candidates[key]} is one of the element of myArray`);
}
// console.log(`Total elements in myArray are ${candidates}`);

// _______________________________________________________________________________________



// MAP is not iterable using forin loop 
// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("Fr", "France");


// for (const key in map) {
//     console.log(`Abbreviation for ${value} is ${key} of the ${map[]}`);
    
// }