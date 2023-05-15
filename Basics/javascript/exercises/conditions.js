// https://www.w3schools.com/js/js_if_else.asp
// Conditional Statements
/*
if
if else
else if
switch
*/
// let n1 = 10,
//   n2 = 10;
// // if statement
// if (n1 > n2) {
//   console.log("n1 is less than n2");
// } else {
//   console.log("n1 is n1 is not bigger than n2");
// }
// //  if and elseif
// if (n1 > n2) {
//     console.log("n1 is less than n2");
//   } else if (n1==n2){
//     console.log("n1 equal to n2");
//   } else{}

// let hour = new Date().getHours();
// console.log(hour);
// hour += 12;
// if (hour <= 12) {
//   console.log("good morning");
// } else if (hour > 18 && hour < 23) {
//   console.log("good evening");
// } else {
//   console.log("goodnight");
// }

// const names = ["Joe", "John", "Jack", "Jackie", "Bruce", "Wills"];

// names.forEach((fullname) => {
//   // console.log(fullname)
//   if (fullname.toLowerCase() === "jackie") {
//     console.log(fullname);
//   }
// });
const score = 99;
switch (true) {
  case score == 50:
    console.log("It's ok");
    break;
  case score >= 60 && score <= 70:
    console.log("Normal");
    break;
  case score >= 80 && score <= 90:
    console.log("Good");
    break;
  case score > 90 && score <= 100:
    console.log("Very good");
    break;
}
