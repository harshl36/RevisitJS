const userEmail ="harsh@gmail.com"


// if (userEmail) {           // suppose that the string is the condition value itself
//     console.log("Got user email");
// }
// else console.log("Don't have the user email");



// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN  

//Truthy Values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length ===0){
//     console.log("Array is Empty");
// }         //way to check if the array is empty


// const emptyObj = {}

// if (Object.keys(emptyObj).length ===0) {
//     console.log("Object is empty");
// }

//  NUllish Coalescing Operator (??) : null undefined

let val1;
let val2;
let val3;
val1 = 5 ?? 10       
val2 = null ?? 5; // returns 5 by removing null or undefined from the values
val3 = undefined ?? 5; // returns 5 by removing null or undefined from the values


// console.log(val1);
// console.log(val2); 


// Terniary Operator

// condition ? true : false  syntax

const iceTeaPrice =100

iceTeaPrice <=80 ? console.log("Less than 80"): console.log("More Than 80");