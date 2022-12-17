'use strict';

let num1 = Number(prompt('Type number(integer) one: '));
let num2 = Number(prompt('Type number(integer) two: '));
let num3 = Number(prompt('Type number(integer) three: '));
let sum = num1 + num2 + num3;
let product = num1 * num2 * num3
let average = sum / 3
document.querySelector('#target').innerHTML =
    `The sum of numbers is: ${sum}. 
    The product of numbers is: ${product}.
    The average of numbers is: ${average}`;