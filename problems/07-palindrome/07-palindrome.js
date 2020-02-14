/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    for (let index = 0; index < someStr.length/2; index++) {

        if (someStr.charAt(index) !== someStr.charAt(someStr.length - index - 1)) {
            return false
        }

        return true        
    }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("taco cat"));
console.log(isPalindrome("racecars"));


