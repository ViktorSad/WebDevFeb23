// // functions
// function getUsername() {
//   console.log("Hello world");
//   return "Hello";
// }
// // getUsername();

// function getName(fullname) {
//   return fullname;
// }

// var fullname = "Joe";

// function GetName() {
//   return fullname;
// }

// result = GetName("Jack");

// console.log(result);

// result = GetName("Jack");

// result = function () {
//   // Anonymous function
//   console.log("hello world");
// };

// result = function (param1) {
//   return "hello " + param1;
// };

// // console.log(result('Joe'))

// // function getFullname(firstname,lastname){
// //     return firstname + " " + lastname
// // }

// function getFullname(firstname, lastname) {
//   return `${firstname} ${lastname}`;
// }

// console.log(getFullname("Joe", "Dalton"));

// // console.log(result)

// function number1() {
//   return 6;
// }
// function number2() {
//   return 5;
// }
// result = number1() + number2();
// console.log(result);
// result = (fullname) => fullname; // arraow function with full name parameter
// resuley = (fullname) => fullname;
// result = (firstName, lastName) => `${firstName} ${lastName}`;
// // Multiline
// result = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };
let result = (brutto, tax) =>
  ` Netto salary is ${(brutto * (100 - tax)) / 100}`;
console.log(result(4000, 40));
const student = {
  age: 17,
};
function isAllowedDrinkAlchohol(obj) {
  return obj.age >= 18 ? "Allowed to drink jupiler" : "Not allowed";
}
result = isAllowedDrinkAlchohol(student);
console.log(result);
