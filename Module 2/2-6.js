'use strict';

const ul = document.createElement('ul');
ul.setAttribute('id', 'target');
document.body.appendChild(ul);
const target = document.getElementById('target');

const randNum = () => Math.floor((Math.random() * 6 + 1));

while (true) {
    let random = randNum();
    if (random === 6) {
        target.innerHTML += `<li>${random}</li>`;
        break;
    } else {
        target.innerHTML += `<li>${random}</li>`;
        continue;
    }
}