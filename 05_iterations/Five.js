const coding = ["JS", "Ruby", "Java", "Python", "cpp"]


// coding.forEach(function (item){
//     console.log(item);         // since it is a call back function hence it will not have a name
// })                             // normal representation
// console.log("--------------------Separation--------------------");
// coding.forEach(item => {
//     console.log(item);         // arrow function representation
// })


// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach((item, index, arr) => {
// console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "JS"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Python",
        languageFileName: "Py"
    }
]
myCoding.forEach((item) => {
console.log(item.languageFileName, item.languageName);
})
