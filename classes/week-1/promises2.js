// understanding more about the promise class

var d = new Date();
console.log(d.getTime());
console.log(d.getDate());

/* 
Promise is also a class
but to initialise it we need to pass a fn which again requires function
Promise on high level has three states: 
Pending, resolved, rejected

*/
// function onDone(data){
//     console.log(data);
// }

var d = new Promise(function(resolve){
    resolve("hi there");
});

console.log(d);
// below is a dummy resolve fn which gets resolved almost immediately

function kiratAsyncFunction(){
    return new Promise(function(resolve){
        resolve("hi there!");
    });
}

const p = kiratAsyncFunction(); // returns a promise
console.log(p);
p.then(function(data){
    console.log(data);
    let newData = data + " Princey";
    console.log(newData);
})

// here resolve is an anonymous fn
// which prints the passed data
// then appends princey to data and logs it


/*
Try to marinate both sides of promise:
1. creating an async fn
2. calling on the promise
*/

/* In the above example we aren't doing anything fancy.
Our promise is simply is passing some data to resolve. The data is 'hi there'
and the resolve fn is simply logging it.
We aren't really doing anything asynchronous in the above example
We could also achieve the same via below code:
*/

function someAsyncFn(){
    let data = "hi there";
    return data;
}

const data = someAsyncFn();
let resolve = console.log;
console.log(resolve);
resolve(data);

// here 'hi there Princey' gets printed after the main thread completes its execution
// only when it is idle, the event loop picks resolve from callback queue and exeutes it.

