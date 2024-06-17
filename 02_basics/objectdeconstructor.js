
// Both gives same reuslt as empty but 
// const tinderUser = new Object()       //This is a singletron object
const tinderUser = {}                 // but this is not a singletron object

tinderUser.Id= "123abc"
tinderUser.name= "Dhruv"
tinderUser.isLoggedin= false;



// console.log(tinderUser);

const regularUser = {              //nested object
    email: "Dhruv@gmail.com",
    fullname:{
        userFullname:{
            firstName : "Dhruv",
            lastName : "Narang"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstName); //nested accessing

const obj1={1: "a", 2:"b"}
const obj2={3: "a", 4:"b"}

// const obj3= Object.assign(obj1, obj2) // returns a merged array but all the values will be in obj1
// const obj3= Object.assign({}, obj1, obj2)  // returns a merged array but all the values will be in empty array

// const obj3 = {...obj1, ...obj2}   // spreads and combine 
// console.log(obj3);


// Form of data received from the database
const users = [
    {
        id:1,
        email: "harsh@gmail.com"
    },
    {
        id:2,
        email: "lavania@gmail.com"
    },
    {
        id:3,
        email: "advait@gmail.com"
    }
]

// console.log(users);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // return varaibles/keys in an array
// console.log(Object.values(tinderUser)); // return values in an array
// console.log(Object.entries(tinderUser)); // return first as key and second as value in an array

// console.log(tinderUser.hasOwnProperty('isLoggedin')); // check if the object has the defined value or not also this is case sensitive

//_________________________________________________________________________________________________________________________________________________
//Object Destructuring 

const course = {
    coursename: "Js in Hindi",
    curseprice: "999",
    instructor: "Harsh"
}

// course.instructor

const{instructor}= course
console.log(instructor);