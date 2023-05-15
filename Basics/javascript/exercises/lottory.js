///////////////////////////////////////
// Option 1
const arr = [];
function primaryNumber(number) {
  for (let i = 2; i < number; i++) {
    if (!(number % i)) {
      return false;
    }
  }
  return true;
}
// primaryNumber(5);

function primary(number) {
  for (let i = 1; i <= number; i++) {
    if (primaryNumber(i)) arr.push(i);
  }
  console.log(arr);
}

// primary(136);

//////////////////////////////////////
// Option 2
const number = 20;
startBegin: for (let i = 1; i <= number; i++) {
  for (let j = 2; j < i; j++) {
    if (!(i % j)) continue startBegin;
  }
  arr.push(i);
}
console.log(arr);
