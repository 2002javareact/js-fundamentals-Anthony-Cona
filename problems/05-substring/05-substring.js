/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */


function substring(someStr, startIndex, endIndex) {
    if((NaN === startIndex)&&(NaN === endIndex)){
        throw "Input was incorrect Not a Number in startIndex or endIndex"
    }
    try {        
        return someStr.substring(startIndex, endIndex)
    } catch (error) {
        throw "Input was incorrect Not a String!"
    }
}
// Working Examples
console.log(substring("Hello World", 0, 3));
console.log(substring("Hello World", 3, 7));

//Error Examples
console.log(substring(3, 3, 5));
//console.log(substring("ERROR", '1', 3));