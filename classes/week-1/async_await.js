// real benefit of promises
// Again syntactical sugar, still uses callbacks/Promises under the hood
// working of callstack, eventLoop, callback queue is all the same

// Normal Syntax: using Promise

function myAsyncFn(){
    let p = new Promise(function(resolve){
        // some async logic here!
        resolve("hi there from main!");
    })
    return p;
}

function main(){
    myAsyncFn().then(function(data){
        console.log(data);
    })
}

main();
/**
main goes into callstack
myAsyncFn goes into callstack
myAsyncFn pops out from callstack and returns a promise
anonymous fn is put in callback queue
event loop fetches anonymous fn from callback queue to callstack
logs hi there on console
main pops out of callstack
**/

// Async await
function myAsyncFn2(){
    let p = new Promise(function(resolve){
        // do some async logic here!
        console.log("waiting for 3s")
        setTimeout(function(){
            resolve("hi there main2!")
        }, 3000);       
    });
    return p;
}

async function main2(){
    const value = myAsyncFn2();
    console.log(value);
}   

main2();
// here value is a promise in pending state
// it waits for 3s and then promise is returned to main2
// resolve is put in callback queue
// but not pulled from there by eventloop

async function main3(){
    const value = await myAsyncFn2();
    console.log(value+" from main3");
    // we got rid of .then syntax and no callbacks
    // if a fn is returning a promise, we can put await infront of it
    // then we can do whatever we want with the returned data
}   

main3();