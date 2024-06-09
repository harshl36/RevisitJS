// stack (Primitive) callbyvalue, Heap (Non-Primitive)

let myCollegename ="BPIT"

let anothername= myCollegename
anothername = "IPU"

console.log(myCollegename);
console.log(anothername);

let student1 = {
    email: "Student1@bpitindia.com",
    enrollment: "0420802820",
    class: "ECE"
}
let student2 = student1
student2.enrollment ="04320802820"

console.log(student1.enrollment);
console.log(student2.enrollment);