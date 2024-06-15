// singleton - objects made by constructor
// Object.create

// if we declare an object from litterals then they are not Singleto
//object literas


const mySym =Symbol("Key1")
const JsUser ={
    name: "Harsh",
    "Full name": "Harsh Lavania",  //can't be access uisng object.
    age: 25,
    [mySym]:"myKey1",
    location: "Gurgaon",
    email: "harsh@mtsl.com",
    isLoggin: false,
    lastLoginDays:["Monday", "Saturday"]
}

// ways to acces an object 
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

//change detail of an object

JsUser.email="harsh@bpitindia";
// Object.freeze(JsUser)
JsUser.email="harsh@bpit";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JsUser");
}
JsUser.greeting2 = function(){
    console.log(`HELLO jsUSER, ${this.name}`);
}
// console.log(JsUser.greeting)
console.log(JsUser.greeting());
console.log(JsUser.greeting2());