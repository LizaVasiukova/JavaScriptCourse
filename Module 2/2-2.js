'use strict';

let num = Number(prompt('Type number of participants: '));
let names = [];

for (let i = 0; i < num; i++) {
  const name = prompt(`Type name for participant ${i + 1}`);
  names.push(name);
}

names.sort();

for (const name of names) {
  document.querySelector('#target').innerHTML += `<li>${name}</li>`;
}


