// If statement

// if (condition) {

// }        basic syntax of IF statement

// if (2==="2") {
//     console.log(true);
// }
// else console.log(false);
// if (2=="2") {
//     console.log("Executed");
// }

// const isUserLoggedIN = true
// const temperature = 41

// if (temperature===50) {
//     console.log("Less then 50");
// }
// else console.log("Temperature is not less than 50");

// __________________________________________________________________________________________________________________________________________
// Notes -> (= assignment operator)
//          (== check if equal )
//          (=== Strict equal, also checks if the type)
//          (!= not equal)
//          ()

// __________________________________________________________________________________________________________________________________________
// const score = 200
// if (score>100) {
//     const power = "Fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);       // power is in the IF scope that's why it'll not be executed and thorw an error

// const score = 200
// const power = "Fly"
// if (score<100) {
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);       // it will be executed because the power has been decalred out of the scope

// __________________________________________________________________________________________________________________________________________
// Short hand notation

// const balance = 1000;

// if (balance >500) console.log("Yes");

// __________________________________________________________________________________________________________________________________________

// MULTIPLE CONDITIONS

// const balance = 1000;

// if (balance < 500) {
//   console.log("You are broke");
// } else if (balance < 800) {
//   console.log("You are doing okay");
// } else if (balance < 900) {
//   console.log("Okk OKK");
// } else console.log("YESSSS");


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard) {    //&& -> all conditu=ins must be true
    console.log("Allow to buy course");

}
if (loggedInFromGoogle || loggedInFromEmail){
console.log("User logged in");
} 