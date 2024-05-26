/*
Javascript architecture:
How JS tracks which fn to execute next

latentflip.com/loupe
to undertand how JS call stack/event loop/ callback queue interact with each other.

call stack: all fns get placed here when code is synchronous

for loop sums to 10

move sum code in a fn

--
async call
Kamla didi: webAPI sction
why webAPI: it's really not JS
setTimeout is a webAPI. Not part of original JS stack. Was built for browser n stuff 
setTimeout fn 
- after 5s we print from insidr async fn

for loop summing to 10

console.log a

Event loop job is to check if there is any fn sitting in callback queue.
Once the main thread is idle, event loop executes nd pulls any fn sitting in callback queue and put it on call stack and that is how things get rendered


Put another setTimeout of 10s

Real use of call back is in async functions
makes more sense in case of async fn
*/



