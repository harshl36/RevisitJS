// Reduced method


// const myNums = [1, 2, 3];

// let initialVal = 0;           //Initialize the array with a value let 0 here
// const myTotal = myNums.reduce(function (acc, currVal) {    // accumulator store the initial value, currVal -> current element of the array
//   return acc + currVal;       // the initial value first go to accumulator and will get add to current value in the first go/loop,                                
// }, initialVal);               // then the value generated by the addition will be the initial value and it will again go into the accumulator in the second go, and so on
// console.log(myTotal);




// using arrow function
          
// const myTotal = myNums.reduce((acc, currVal) => acc+currVal, 0)    // accumulator store the initial value, currVal -> current element of the array                   
// console.log(myTotal);


// example

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);