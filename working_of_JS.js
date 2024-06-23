// Three types of Execution Contexts
// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context

// JS code runs in two phases
// 1. Memory phase/ memory creation phase/ creation phase
// 2. Execution phase

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

//Steps to execute a code in JS
// 1. Global execution i.e alloted in "THIS" keyword
// 2. Memory Phase -> memory allocation for all variables
    // Val1 -> undefined
    // Val2 -> Undefined
    // addNum -> function definition
    // reult1 -> undefined
    // reult2 -> undefined
    // this is called first cycle 
// 3. Execution Phase
    // called the second cycle 
    // val1 <- 10
    // val2 <- 5
    // addNum <-  New variable environment + execution thread
          // now again both cycles will be made fot the function execution
    // ----> Memory Phase <---- //
    // val1 -> undefined      
    // val2 -> undefined    
    // total -> undefined
    // ----> Execution Phase <---- //
    // num1 -> 10
    // num2 -> 5
    // total -> 15
    // return total in global executionional context
// Global execution context will be deleted after execution
// 3. Execution Phase    (returned to the exection phase for result2)
    // called the second cycle 
    // val1 <- 10
    // val2 <- 5
    // addNum <-  New variable environment + execution thread
    // result1 <- 15
    // result2 <- repeatition of the process from step 3

// ------------------------------------------------------------------------------------------------

// call stack, one by one exection of functions in global execution and works on LIFO 