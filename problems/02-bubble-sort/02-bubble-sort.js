/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    //This loop checks the array for each index in the array,
    //it allows for lower values to move as far left as possible
    for (let i = 0; i < numArray.length; i++) {
        //This loop checks the value at each index and swaps it if 
        //the value on the left is larger then the value on the right
        for (let j = 0; j < numArray.length; j++) {
            if (numArray[j] > numArray[j + 1]) {
                let temp = numArray[j]
                numArray[j] = numArray[j + 1]
                numArray[j + 1] = temp
            }
        }
    }
    return numArray
}

//worst case
console.log(bubbleSort([6,5,4,3,2,1]));
//best case
console.log(bubbleSort([1,2,3,4,5,6]));
console.log(bubbleSort([77,22,398,344,76,1212]));