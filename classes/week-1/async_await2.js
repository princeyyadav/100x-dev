// cleaner way

function myAsyncFn(){
    let p = new Promise(function(resolve){
        // some async logic here
        setTimeout(function(){
            resolve("hi there!"), 2000
        });
    });
    return p;
}

async function main(){
    const value = await myAsyncFn();
    console.log(value);
    console.log("hi there 1"); //gets printed after 2s

}

main();
console.log("hi there outside main")
let a=0;
for (let i=0; i<10; i++){
    a = a+i;
    console.log(a)
}
console.log(a);
// await can only be used in inside async fn
// that's why we defined a main fn
// any fn that needs to be awaited, has to be async
// we got rid of .then syntax and callback in promise

// when we put await in front of Promise it gets resolved ?

/**
 * 
 * main is an async fn in callstack
 * (meanwhile setTimeout is executing for 2s)
 *
 * hi there from outside gets executed
 * loop gets executed
 * once loop is idle, control goes to main once 2s are over
 */