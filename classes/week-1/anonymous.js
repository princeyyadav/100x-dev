function cube(n){
    return n * n * n;
}

function square(n){
    return n * n;
}

function sumOfSquare(a, b){
    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2;
}

function sumOfCube(a, b){
    const val1 = cube(a);
    const val2 = cube(b);
    return val1 + val2;
}

function sumOfSomething(a, b, fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2; 
}

// callback: passing fn as arguement
let a = 2;
let b = 2;
let ans = sumOfSomething(a, 2, square);
console.log("Sum of Square of " + a  + " and " + b + " is " + ans)

ans = sumOfSomething(a, b, cube)
console.log("Sum of Cube of " + a  + " and " + b + " is " + ans)

// anonymous functions: function that don have name 
// if fn is to be called only once
// when fns are passed like this..
ans = sumOfSomething(a, b, function (n){
    return n*n;
})
console.log(ans)