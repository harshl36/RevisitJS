const promise1 = new Promise(function (resolve, reject) {
  // Do any async task
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promise1.then(function () {
  console.log("Promise consumed");
}); //consumption of the promise

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("aynsc task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("promise 2 consumed");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "harshl36", email: "harshlavania36@gmail.com" });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "harsh", password: "123" });
    } else {
      reject("ERROR: Something went wrong"); //gives error
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("The promise is either resolved or rejected");
  });
//Note: .Then is directly related to resolve

const Promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Lavania", password: "123" });
    } else {
      reject("ERROR: JS went wrong"); //gives error
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    const response = await Promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise5();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();   // conversion of format also takes time so it is important to make it awaik
//     console.log(data);
//   } catch (error) {
//     console.log("Data is not received", error);
//   }
// }
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log( error);
  });
