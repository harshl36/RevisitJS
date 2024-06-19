
// {} -> scope
let a =300;
if (true) {
    let a=10
    const b=20
    // var c = 30
    console.log("Inner:", a);
}

// Note:- Content in thw { } is called block scope, and content outside and defined before the {} is called global scope

console.log(a);
// console.log(b);
// console.log(c);   //only var declaration can be fetched out of the scope