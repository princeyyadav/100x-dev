// Good example of a promise

// async way
function goodAsyncFn(){
    let p = new Promise(function(resolve){
        setTimeout(resolve, 2000);
    });
    return p;
}

const value = goodAsyncFn();
console.log(value); // value is a promise
// So Simmy has promised Timmy to execute whatever resolve fn Timmy passes after 2s

value.then(function(){
    console.log("hi there from callback of Promise!");
})
// here my resolve/ callback fn is an anonymous fn which logs 'hi there' to console.
// here setTimeout is just waiting out
// but it could be replaced with other async fn as well like file reading. 
// goodAsyncFn is just a wrapper on top of setTimeout fn

// above is more readable because of then

// Simple way: without promise

function simpleAsyncFn(callback){
    console.log("waiting inside simpleAsyncFn!")
    setTimeout(callback, 2000);
}

function callback(){
    console.log("hi there from callback of SimpleAsyncFn!");
}

simpleAsyncFn(callback);