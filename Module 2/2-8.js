'use strict';

const p = document.createElement('p');
document.body.appendChild(p);
const arr = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
let string = '';

const concat = (array) => {
    for (let value of array) {
        string += value;
    }
    p.innerHTML = string;

}

concat(arr);