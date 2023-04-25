// Arithmetic operator
/*
+,-,*,/, ++ , --

*/
let result = "5" != 5;
console.log(result);
// Arithmetic operator
/*
+ , - , * , / , ++ , --
*/
let number = 50;

// increase
number++;
number = number + 1;
number += 1;

// decrease
number--;
number = number - 1;
number -= 1;

// add operator (+)
number = number + 10;
number += 10;

// subtract op (-)
number -= 20;
number = number - 20;

// multiply (*)
number = number * 2;
number *= 2;

// divide (/)
number = number / 2;
number /= 2;

++number;
--number;

let i = 0;

// for(i; i<20;++i){
//     console.log(i)
//     if(i>=10){
//         i--
//     }
// }
number *= 3;

// expo (**)
number = number ** 2;
number **= 2;

// mod (%)
// number %=1
// number = number % 3
console.log(13 % 5);

// Comparison Operators

var number1 = 5;
var number2 = Number("5");

// equal to (==)
number = number1 == number2; // check if n1 equal to number2 using value only

// equal to (===)
number = number1 === number2; // false value and data type

// not equal (!=)
number = number1 != number2; // check only value

var result;

result = "Python" == "Python"; // true
result = "PytHon" == "Python"; // false

result = "PytHon" != "Python"; // true
result = "Python" != "Python"; // false

result = null === null; // true
result = undefined == undefined; // true
result = null + 10;
result = undefined === undefined; // true

result = "5" !== 5; // true

// greater than symbol (>)

result = 10 > 11; // false
result = 10 >= 11; // false

number2 = 14;
number1 = Number("20");
number = number;

result = number1 < number2;
result = number1 <= number2;
result = number1 > number2;

// ternary operator ?

result = number1 === number2 ? "yes" : "no";

// nested ternary

// result = number1===number2 ?
// (number1>number2)?
// 'yes its greater'
// :'no its small number'
// :'Not equal'

const user = {
  username: "Joe",
  age: 20,
};

result =
  user.username === "Joe"
    ? user.age > 20
      ? "Welcome Joe"
      : "Age is not greater than or equal to 20"
    : "unknown user";

const user1 = {
  username: "root",
  password: "qwerty123",
};

result =
  user1.username === "root"
    ? user1.password === "qwerty123"
      ? "Welcome Root"
      : "Incorrect Password"
    : "username is incorrect";

// Logical Operators
result = console.log(result);

//console.log(number)
