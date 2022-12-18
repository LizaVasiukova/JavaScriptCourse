'use strict';


let number = 6
let names = [];

for (let i = 0; i < number; i++) {
 const name = prompt(`Type name of a dog ${i + 1}: `);
 names.push(name);
}

names.sort().reverse();

for (const name of names) {
  document.querySelector('#target').innerHTML += `<li>${name}</li>`;
}

