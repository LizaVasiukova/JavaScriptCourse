'use strict';

const answer = confirm("Should I calculate the square root?");

if (!answer) {
    document.getElementById('target').innerHTML = `The square root is not calculated.`;
}

if (answer) {
    let num = Number(prompt('Provide with a number to calculate a square root:'));
    if (num > 0) {
        let root = Math.sqrt(num);
        document.getElementById('target').innerHTML = `The square root of ${num} is ${root}`;
    } else {
        document.getElementById('target').innerHTML = `The square root is not calculated.`;
    }
}