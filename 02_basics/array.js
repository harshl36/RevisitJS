//Array

// ways to decalre an array 

const Myarr = [0,1,2,3,4,5] //way 1
// const myHeros = ["Shaktiman", "Naagraj"] // way 2 taking string
// const Myarr2 = new Array(1,2,3,4,5) // using NEW keyword

// console.log(Myarr[0]); //printing element at a specific index
// console.log(myHeros.length);


// Array methods

// Myarr.push(6) //insert element in the array as Array is dynamic in JS
// Myarr.push(7)
// Myarr.pop(); // Will delete the last element of the array

// Myarr.unshift(9) //insert value in front of the array in staring, but the problem is it shifts all the element of the array
// Myarr.shift() // Will delete the last element of the array


// console.log(Myarr.includes(9)); //check if value is there or not
// console.log(Myarr.indexOf(5)); // tells the index of a specific element

// const newArray = Myarr.join()
// console.log(newArray); // converts array into string
// console.log(Myarr);

// SLICE, SPLICE

console.log("A", Myarr);

const myNA = Myarr.slice(1,3);
console.log(myNA);
console.log("B", Myarr);

const myNA2 = Myarr.splice(1,3);
console.log("C", Myarr);

console.log(myNA2);