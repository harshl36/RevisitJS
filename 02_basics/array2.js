const marvelHeros = ["Thor","Loki", "IronMan","Spiderman"]
const DCHeros = ["Batman","superman", "Flash"]


//inseting an array in another array
// marvelHeros.push(DCHeros) //it creates another array within the array
// console.log(marvelHeros);

//Now if want to print an element from the merged array then we have to give it's index in doible brackets

// console.log(marvelHeros[4][2]); //printing first elemenet of another array that has been merged

// const allheros =marvelHeros.concat(DCHeros) // cconcet also merge arrays but return a new combined array
// console.log(allheros);

// const all_new_heros = [...marvelHeros, ...DCHeros]
// console.log(all_new_heros);

// const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = anotherArray.flat(Infinity); //flat() = merge subarrays within the array
// console.log(real_another_array); 


console.log(Array.isArray("Harsh"))
console.log(Array.from("Harsh")); //converts a string into an array
console.log(Array.from({name: "Harsh"})); //returns blank array , inresting

let score1=100;
let score2=200
let score3=300

console.log(Array.of(score1, score2,score3)); // returns the various elements in an array