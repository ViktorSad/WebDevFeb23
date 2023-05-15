const obj = {
  first1: 1,
  first2: 2,
  first3: {
    second1: 11,
    second2: 12,
    second3: { third1: 111, third2: 112 },
  },
  first4: 4,
};
// Resursive Loop
function Recursiveloop(obj) {
  for (val in obj) {
    if (typeof val === "object") {
      Recursiveloop(val);
    } else {
      console.log(val);
    }
  }
}
Recursiveloop(obj);

const number = 100;
let total = 0;
const myArr = [];
for (let i = 1; i <= number; i++) {
  total += i;
  myArr.push(total);
}
let sum = 0;
console.log(myArr);
for (el of myArr) {
  sum += el;
}
console.log(sum);

let messages = [
  ["bla", "lol", "trololo"],
  ["bla1", "lol1", "trololo1"],
  ["bla2", "lol2", "trololo2"],
];
function recursive(messages) {
  for (let el = 0; el < messages.length; el++) {
    if (Array.isArray(messages[el])) {
      recursive(messages[el]);
    } else {
      console.log(messages[el]);
    }
  }
}
recursive(messages);

// beginLable: for (let el = 0; el < messages.length; el++) {
//   if (typeof messages[el] === "object") {
//      for (let i=0; i<messagesbeginLable;
//   } else {
//     console.log(messages[el]);
//   }
// }
