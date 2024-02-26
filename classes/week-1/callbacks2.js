function calculate(a, b, arithmeticOperation){
    let ans = arithmeticOperation(a,b);
    return ans;
}

function sum(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide (a, b){
    return a/b;
}

let ans = calculate(2, 3, multiply);
console.log(ans);
ans = calculate(10, 5, divide);
console.log(ans);