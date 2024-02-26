function sum(a, b){
    return a + b;
}

function displayResult(data){
    console.log("Result of sum is " + data);
}

function displayResultPassive(data){
    console.log("Sum's result is " + data)
}

// You are only allowed to call one function

// callbacks: passing functions as arguments

function sum2(a, b, fnToCall){
    let ans = a + b;
    fnToCall(ans);
}

sum2(1,6, displayResult);
sum2(2, 3, displayResultPassive);