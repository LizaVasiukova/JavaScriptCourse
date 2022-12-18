'use strict';

const start = document.getElementById('start');
let result = document.getElementById('result');

const operation = () => {
    const operation = document.getElementById('operation').value;
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    switch (operation) {
        case 'add':
            result.innerHTML = num1 + num2;
            break;
        case 'substr':
            result.innerHTML = num1 - num2;
            break;
        case 'multi':
            result.innerHTML = num1 * num2;
            break;
        case 'div':
            result.innerHTML = (num1 / num2).toFixed(2);
            break;
        default:
            result.innerHTML = 'error';
    }
}

start.addEventListener('click', operation);

