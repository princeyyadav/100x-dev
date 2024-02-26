function greet(){
    console.log("hello word!!")
}

function greetAlien(){
    console.log("hello alien!!")
}

setTimeout(greet, 3 * 1000);

setInterval(greetAlien, 1*1000);