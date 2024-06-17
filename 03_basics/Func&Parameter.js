// function SayMyName(){              //Declaration of a function
//     console.log("Harsh");
//     console.log("Lavania");
// }
// SayMyName()           // SayMyName -> Reference , () -> Execution


function AddTwoNumbers(number1, number2) {    //declare parameters
    console.log(number1+number2);
}
// AddTwoNumbers(5,6);      // pass (arguments)
// AddTwoNumbers(5,"6");      // if passed (arguments) has one input as string then the other parameter will be considered as string too and the output will be 56 instead of 11
// const result = AddTwoNumbers(5,3);
// console.log("Result is:", result); // console will only print the result but written an "undefined"

function AddTwoNumbers(number1, number2) {    //declare parameters
    // let result = number1+number2
    // return result;

    return number1+number2 // another way to return
}

const result = AddTwoNumbers(5,3);
// console.log("Result is:", result); // console will return the result as result is returned in the function itself


// passing usrname 
// function loginuserMessage(username){

//     if (username===undefined) {
//         console.log("Please enter the username");
//     }

//    else  return `${username} just logged in`
// }


function loginuserMessage(username){

    if (!username) {           // !username alternative of undefined
        console.log("Please enter the username");
    }

   else  return `${username} just logged in`
}

// console.log(loginuserMessage("Harsh"));
console.log(loginuserMessage());