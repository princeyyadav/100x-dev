// synchronous
/*
one after other, sequential, only one thing is happening at a time

Asynchronous
Happens in parts
Multiple things are context switching with others

Async fns vs async fns

Some intuition:
Human body is single threaded:
we can only do one task at a time
But we can context switch between tasks or we can delegate tasks to other people

Same thing is with JS
JS is single threaded 
but it can multi-task or 
context switch or 
delegate task to others

EXAMPLE: 
Make maggie:
Boil water
Cut maggie packet
Chop veggies
Buy ketchup from market

Sequential way: 
one thing at a time (37m)

Async way: 12m
Boil water
Delegates buying ketchup
Cut maggie packet
Chops veggies


Real world example of async function:
Reading files from file system
We dont run it on main javascript thread

Gyst:
Even if single threaded, we can delegate/ context switching
By using async functions, JS can delegate or context switch

setTimeout -> global func JS provides, webAPI
- run a specific function after some duration
- settimeout is async fn

*/

function findSum(n){
    let sum = 0;
    for (let i=0; i<=100; i++){
        sum = sum + i;
    }
    return sum;
}

function findSumTill100(){
    console.log(findSum(100));
}

setTimeout(findSumTill100, 1000);
console.log("hello world!")

/*
setTimeout is an async fn
when control comes to line 65
setTimeout is executed in async manner: it waits for 1000ms and then executes the passed / callback fn
Thus, hello world gets printd first
then the sum of 100 numbers gets printed

setTimeout is not a busywait or sync sleep
*/

// Common async fns provided in JS
/* 
setTimeout
fs.readFile - to read file from your filesystem
Fetch - to fetch some data from an API endpoint
*/

const fs = require("fs");
// filesystem module

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})
console.log("hi there!");

let a=0;
for(let i=0; i<1000000000; i++){
    a++;
}
console.log("hi there 2");

/*
only when the main thread is idle 
then it goes back to pending callbacks.
Main thread first finishes the task at hand
That's why hi there 2 gets printed first then 
hi from a.txt gets printed!
*/