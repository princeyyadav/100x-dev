/*
Promises are syntactical sugar that make the async code slightly more readable

take the findSumtill100 method in setTimeout

How can we create an async fn of our own
creating a wrapper on top of async fn provided by JS

create a wrapper kiratsReadFil

*/
const fs = require('fs')

function myReadFile(cb){
    fs.readFile("a.txt", "utf-8", function(err, data){
        cb(data);
    })
}

function onDone(data){
    console.log(data);
}

myReadFile(onDone);


// Cleaner way

// my own async function

function kiratsReadFile(){
    console.log("inside kirat's readFile");
    return new Promise(function(resolve){
        console.log("inside Promise");
        fs.readFile("a.txt", "utf-8", function(err, data){
            console.log("before resolve");
            resolve(data);
        })
    })
}

kiratsReadFile().then(onDone);


/*
kiratsReadFile - is not requiring a callback fn
- creates an instance of Promise class
- first arg: is a callback fn
- then is called on Promise

just a flipped way to pass the callback fn
*/

var a = kiratsReadFile()
console.log(a);
a.then(onDone);

/*
Timmy - main thread
Simmy - webAPI
Timmy to Simmy - can oyu read a file, promise me?
Simmy returns a Promise Synchronously. It may or may not resolve yet.
That's why we were able to log the promise.
*/

/*
We can also do promise chaining.
*/