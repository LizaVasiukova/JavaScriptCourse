'use strict';


let name, department;
name = prompt('Type your name: ');
let number = Math.floor(Math.random()*4)+1;
switch (number) {
    case 1:
        department = 'Hufflepuff';
        break;

    case 2:
        department = 'Slytherin';
        break;

    case 3:
        department = 'Daredevil';
        break;

    case 4:
        department = 'Ravenclaw';
        break;
}


document.querySelector('#target').innerHTML =
    `${name} you are ${department}. `;