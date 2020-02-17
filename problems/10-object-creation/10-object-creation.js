/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//Object Literal
const person = {
    name: "John",
    age: 27,
}

//Constructor Function
function person2(name, age) {
    this.name = name
    this.age = age
}


//ES6 Class Defination
class person3 {
    constructor(name = null, age = null) {
        this.name = name
        this.age = age
    }
}

//Test code
let user = person
let user2 = new person2("Alton",50)
let user3 = new person3("Chris", 37)

console.log(user);
console.log(user2);
console.log(user3);
