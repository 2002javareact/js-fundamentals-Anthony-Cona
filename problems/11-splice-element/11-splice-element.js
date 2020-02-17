/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    //Splice removes an element at a given array
    someArr.splice(index,1)
    //returning the copy of the array now exclueds the spliced element
    return someArr
}

//Test Code
let numArray = [2,3,4,5,6]
let strArray = ["Potato","Carrot","Leek","Apple","Banana"]
console.log(spliceElement(numArray,2));
console.log(spliceElement(strArray,1))

