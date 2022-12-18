'use strict';

let total = [];
const number = prompt(`Type a number. Enter a 0 to stop `);

while (number > 0) {
  let number = prompt(`Type a number. Enter a 0 to stop `);
  total.push(number);
  if (number == 0) {
    break;
  }

}
total.sort().reverse()

console.log(total);
