// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
//   console.log(num);
}

const greetings = "Hello World";
let greet = 1;
for (const say of greetings) {

    greet++;
//   console.log( `${greet} letter of greeting is: ${say}`);
}

//Maps
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

console.log(map);

for (const [key, value] of map) {   // for breaking the map data use [] to separate the words
    console.log(key, `:`, value);
}


const gameObject = {
'game1' :  `NFS`,
'game2' : 'IGI',
'game3' : 'Road Rash'
}

for (const gameIndex of gameObject) {
    console.log(gameIndex);
}