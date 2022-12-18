'use strict';

let num1 = prompt('Type number 1: ');
let num2 = prompt('Type number 2: ');
let num3 = prompt('Type number 3: ');
let num4 = prompt('Type number 4: ');
let num5 = prompt('Type number 5: ');
let numbers = [num1, num2, num3, num4, num5];

for (let i = numbers.length; i > 0; i--) {
    console.log(numbers.at(i - 1));
}



