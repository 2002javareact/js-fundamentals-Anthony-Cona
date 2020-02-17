/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    //Base case, needs to be 1 if it was 0 or lower would not return the correct value
    if (sumNum === 1) {
        return (sumNum)
    }
    //recursively takes sumNum-1 and multiplies it by the value+1
    return (sumNum * factorial(sumNum - 1))
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));