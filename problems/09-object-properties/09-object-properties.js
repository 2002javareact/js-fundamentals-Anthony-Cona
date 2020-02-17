/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    //By returning the log of the object JS prints all the elements and their values
    return console.log(someObj);        
}

//Used Object from traing for this problem
const circle = {
    radius: 10,
    area: 314.15,
    color:{
        id:1 ,
        color: 'red'},
        spin: ()=>{
            console.log('wee');
        }
    }

    objectProperties(circle)