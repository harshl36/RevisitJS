// const name = "Harsh "
// const repoCount = 50

// // console.log(name + repoCount);

// // Use of Thatis, string interpolation

// // syntax of adding string in console.log is  ${}

// // console.log('My name is ${name} and my repo count is ${repoCount}');
// console.log(`Hello My name is ${name}and my repo count is ${repoCount}`);


// // decalaration of string using object 
// const gameName = new String('Harsh_fc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// methods of string 
/*console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,5)
console.log(anotherString);*/

const newStringOne ="    harsh    "
console.log(newStringOne.trim());
console.log(newStringOne);

const url = "https://google.com/harsh%20lavania"
console.log(url.replace('%20', '-')); 

console.log(url.includes('harsh'));
const NewOneString = 'harsh-lavania-2024'
console.log(NewOneString.split('-'));