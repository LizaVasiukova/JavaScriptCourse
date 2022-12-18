'use strict';

let numbers = [];


while (true) {
    let number = Number(prompt('Enter the number:'));
    if (numbers.includes(number) === false) {
        numbers.push(number);
    } else {
        alert('The number has already been given.');
        numbers.sort();
        for (let number of numbers) {
            console.log(number);
        }
        break;
    }
}