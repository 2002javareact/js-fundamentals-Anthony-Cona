/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  *
*/
function printShape(shape, height, character) {
  switch (shape) {
    case "Square":
      for (let i = 0; i < height; i++) {
        console.log(character.repeat(height));
      }
      break;

    case "Triangle":
      //
      for (let i = 0; i < height; i++) {
        console.log(character.repeat(i + 1));
      }
      break;

    case "Diamond":
      let growth = 1
      let space = ((height / 2) - 1).toFixed(0)
      for (let i = 0; i < height; i++) {

        if (growth === height) {
          while (growth > 0) {
            console.log(" ".repeat(space) + character.repeat(growth));
            growth -= 2;
            space += 1
          }
        } else if (growth < height && growth > 0) {
          console.log(" ".repeat(space) + character.repeat(growth));
          growth += 2
          space -= 1
        }
      }
      break;

    default:
      console.log('Please enter a valid Shape "Square","Triangle","Diamond"');

      break;
  }
}

printShape("Square", 9, "0")
printShape("Triangle", 9, "$")
printShape("Diamond", 9, "*")