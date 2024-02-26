// Variables

var a = 1;
let b = 2;
console.log(a);
console.log(b);

const c = 1; // adds safety to code; 
// c = 2; can't do this
console.log(c);

//Primitive datatypes
let firstName = "Princey";
let age = 18;
let isMarried = false;
console.log("This person name is " + firstName + 
" and their age is " + age)

if (isMarried == true){
    console.log(firstName + " is married.");
}
else{
    console.log(firstName + " is not married.")
}

// Loops
// Write a program that counts/ sums from 1 - 100
let answer = 0;
for (let i = 1; i <= 100; i++){
    answer = answer + i;
}
console.log("Sum upto 100 is " + answer)

// Complex primitives

// Array

// Print the even numbers in an array
const ages = [21, 22, 23, 24];
for (let i = 0; i < ages.length; i++){
    if (ages[i] % 2 == 0){
        console.log(ages[i]);
    }
}

// Print the greatest number in an array

// Objects

const user1 = {
    fname: "princey",
    gender: "female"
}
console.log(user1["fname"])

// Array of objects

const allUsers = [
    {
        fname: "princey",
        gender: "female"
    },
    {
        fname: "harkirat",
        gender: "male"
    },
    {
        fname: "toji",
        gender: "male"
    }
]

for (i=0; i<allUsers.length; i++){
    if (allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["fname"])
        console.log(allUsers[i].fname)
    }
}

// Functions: abstract out logic in he program

function sum(a, b){
    return a + b;
}

const value = sum(1, 2)
console.log(value);

// how thread is running: line 81, 85, 82, 88
