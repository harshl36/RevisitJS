// function calculateCartPrice(...num1) {
//   //use rest operator  (...)
//   return num1;
// }

// console.log(calculateCartPrice(200,400,600));

// const user = {
//   //Object created
//   username: "harsh",
//   price: 559,
// };

// function handleObject(anyobject) {
//   console.log(
//     `Username is ${anyobject.username} and price is ${anyobject.price}`
//   ); //passed object in function
// }

// handleObject(user)
// handleObject({
//   username: "Sam",
//   price: 599,
// });

const MyNewArray = [200, 500, 1000, 2000];

function returnSecondValue(Array) {
  return Array[2];
}

// console.log(returnSecondValue(MyNewArray));
console.log(returnSecondValue([200,400,5000]));

// Note: use in the cases like adding number of items into the cart as you don't know how many items will be added further
