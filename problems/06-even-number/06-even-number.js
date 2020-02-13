/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    if (Number.isInteger(someNum / 2)) {
        return true
    } else {
        return false
    }
}

console.log(isEven(3));
console.log(isEven(4));
console.log(isEven(9));
console.log(isEven(98432));