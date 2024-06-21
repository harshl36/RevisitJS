// "This" keyword refers to the object that is currently executing or calling the function.

const user = {
  username: "Harsh",
  userid: 52345,

  welcomeMessage: function () {
    console.log(`${this.username} ,welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()
// console.log(this);


// function chai() {
//     let username ="Harsh"
//     console.log(this.username);  //it will through undefined as it is a function not an object
// }
// chai()

// const chai = function () {
//     let username = "Harsh"
//     console.log(this.username);

// }
// chai()
// const chai = () => {             //Declaration of an arraow function
//     let username = "Harsh"
//     console.log(this);
// }
// chai()


// const addTwo = (num1, num2) => {     //Basic Declaration of an arrow function
//     return num1+num2;
// }  

// console.log(addTwo(3,4))


// const addTwo = (num1, num2) => num1+num2;  //Implicit Return
// const addTwo = (num1, num2) => (num1+num2);  //another way to declare using parentheses
const addTwo = (num1, num2) => ({username: "Harsh"}) // object should be wrapped in parantheses otherwise it will return an undefined
console.log(addTwo(3,4))


