/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

// Was the example for recursion used in training, works well for small numbers but larger numbers take longer
function fib(n) {
    if (n <= 1 ){
        return n
    }     
    return fib(n-1) + fib(n-2);
}

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));

//Iterative version. Longer then the recursive version but Works well for Larger numbers.
function fib2(n) {
    // If looking for 0th or 1st element of fibonacci returns input
    if (n <= 1 ){
        return n
    }

    let prev = 0
    let current = 1
    let counter = 1
    let number

    while(counter < n){
        number = prev + current
        prev = current        
        current = number
        counter++
    }
    return current
}

console.log(fib2(2));
console.log(fib2(3));
console.log(fib2(4));
console.log(fib2(5));
console.log(fib2(6));
console.log(fib2(7));
console.log(fib2(8));
console.log(fib2(9));
console.log(fib2(10));





