// const descipter = Object.getOwnPropertyDescriptor(Math, "PI")


// console.log(descipter);

const chai = {
    names: 'Ginger chai',
    price: 200,
    isAvailable: true,


    orderchai:function(){
        console.log("Chai nahi bani");
    }
}
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, "names"));

// Object.defineProperty(chai, 'names', {
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "names"));    //changed the acces of the properties

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key}:${value}`);
    }
}